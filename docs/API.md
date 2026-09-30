# Tool and transport contract

Run `python -m anima tools` to print the canonical tool definitions and JSON schemas. The workbench's Tool console exposes the same schemas and operations.

## Tools

| Tool | Required arguments | Result |
|---|---|---|
| `describe_capabilities` | None | Species/action matrix, available backends, units and limitations |
| `create_character` | None; defaults to human | Persisted rig, ID, joint hierarchy, ranges, and masses |
| `list_assets` | None | Most recent 100 characters and 100 compact clip summaries |
| `get_character` | `character_id` | Complete synthetic rig |
| `generate_motion` | `character_id`, `action` | Saved clip ID, backend, frame count and measured checks |
| `define_pose` | `character_id`, `joint_angles` | Saved static pose clip |
| `get_clip` | `clip_id` | Header, rig and paginated frames |
| `evaluate_motion` | `clip_id` | Raw diagnostics and their scope |
| `solve_ik` | `root`, `target`, `pole`, `upper_length`, `lower_length` | Feasible chain positions, bend angle, residual and reachability |
| `simulate_physics` | `character_id` | Saved passive dynamics clip, checks and backend label |
| `export_motion` | `clip_id`, `format` | Local path, byte count, and format |

### Generation arguments

```json
{
  "character_id": "<returned character ID>",
  "action": "walk",
  "duration": 4,
  "fps": 60,
  "speed": 1.2,
  "stride_scale": 1,
  "jump_height": 0.3
}
```

Duration is 0.5–15 seconds, sample rate 24/30/60/120/180/240, speed 0.1–4 metres per second, stride scale 0.5–1.35, and jump height 0.1–0.8 metres. These are input bounds, not a guarantee that every parameter combination is biomechanically plausible. Speed/stride apply to locomotion only. Jump height applies to jump only. A jump must have enough duration to include crouch, flight and landing. For other motions, use `describe_capabilities` to inspect the species-specific list.

Default human dimensions are 1.75 m and 75 kg. Default canine dimensions are a 0.65 m withers reference scale and 22 kg. Mass changes diagnostics and MuJoCo properties; it does not change the procedural reference trajectory. Existing characters are immutable: create a new one to change dimensions.

### Frame data

```json
{
  "time": 0.0,
  "root": [0.0, 0.85, 0.0],
  "rotations": [[0.0, 0.0, 0.0, 1.0]],
  "positions": [[0.0, 0.85, 0.0]],
  "contacts": {"left_toe": true, "right_toe": false}
}
```

The arrays above are abbreviated examples; each actual rotations/positions array has exactly one entry per joint in rig order. Contacts are declared controller states for procedural clips, and observed toe-geometry contacts for MuJoCo clips. `estimated_com` is kept with evaluation for the viewer and omitted from the compact evaluation tool response.

### Failure handling

- Invalid tool arguments, missing IDs and unsupported motions yield actionable errors. There is no success-shaped placeholder clip.
- Non-finite inputs are rejected before generation; exports reject non-finite JSON values.
- The IK tool returns `reachable: false` and `residual_m` for an unreachable target while preserving segment lengths and bend bounds.
- `simulate_physics` fails with installation instructions if MuJoCo is unavailable. It never silently calls the procedural generator.
- `define_pose` rejects out-of-range angles. Geometric ground checks can still flag a valid-angle pose.
- Motion reports show raw metrics. Missing stance samples produce `null` foot-slip results, not a zero or perfect score.

## HTTP application API

Default origin: `http://127.0.0.1:8765`.

| Method/path | Purpose |
|---|---|
| `GET /api/status` | Capabilities |
| `GET /api/tools` | Full tool schemas |
| `GET /api/assets` | Character and clip inventory |
| `GET /api/clips/<id>` | Complete clip, for the local viewer |
| `GET /api/export/<id>.<format>` | Download exported bytes |
| `GET /api/mcp-config` | Exact local MCP configuration for the current installation |
| `POST /api/call` | Invoke `{ "name": "tool_name", "arguments": {...} }` |

The request body must be `application/json`, at most 2 MB. Mutations are local and reversible (new saved takes/characters and export files). No public binding, cross-origin access, account system or external network requests are provided. For public hosting, design authentication, authorization, worker limits and storage quotas first.

## MCP stdio

Launch `python -m anima mcp`, optionally with `--data /absolute/project-data`. An MCP client initializes, sends `notifications/initialized`, discovers `tools/list`, and invokes `tools/call`. Supported protocol: `2025-06-18`. It is a small synchronous server exposing tools and the animation_director prompt; it does not implement resources, sampling, task extensions, or streaming progress. Requests run serially, so there is no mid-call cancellation.

Tool results include both text JSON and `structuredContent`. Expected tool errors return `isError: true`; protocol errors use JSON-RPC error objects. Diagnostics stay on stderr. The base server needs no secret, because it runs as a local child process.

## Serve / version 0.2

`generate_motion` accepts human `action: "serve"`, duration at least 3 seconds, and 24/30/60/120/240 fps. A default 4.2-second serve at 240 fps contains 1,009 frames. Contact is placed on an exact sample and the authored curves pass through that pose. The rig snapshot gains named clavicle and forearm joints; use names, not hard-coded joint indices.

`get_clip` returns attachment definitions, pose pins and the ball-contact event along with the requested frame slice. `evaluate_motion` includes `rotation_integrity`, `fk_consistency`, `rigid_grip`, `target_tracking`, `pinned_poses` and `ball_contact`. A failed constrained clip is rejected on save and export. These are kinematic constraints, not physical realism scores.

Shoulder `rotation_model: swing_twist` means its three input coordinates are elevation from rest-down, swing plane, and axial twist, in degrees. Standard rig joints continue using intrinsic XYZ. This distinction is explicit in the rig metadata.


## Recorded serve / version 0.3

`load_recording` accepts `character_id`, `recording: "tennis_serve"` (default), and `fps` (24, 30, 60, 120, 180 or 240). It returns a persisted clip with backend `motion_capture`, action `recorded_serve`, source attribution and capture-fit residuals. Retrieve `source` and `capture_fit` through `get_clip`. Native duration is 300/180 seconds; output duration is rounded to the requested sample grid, without retiming the delivery. There is no duration parameter.

The character's height uniformly scales the recorded subject proportions. This does not perform a subject-specific anatomical calibration. Evaluation returns `joint_limits: null` because ranges were not supplied by the recording, and `contact_sliding: null` because no force-plate contact labels are available. The ball/contact event and head gaze are reconstructed. `export_motion(format="mjcf")` rejects this uncalibrated rig. BVH, glTF and JSON retain the reconstructed motion.


## Guided director / version 0.4

Use `python -m anima mcp --profile guided` to expose only five compact schemas.
`--profile all` remains the default for the legacy CLI/catalog. HTTP `/api/tools`
includes all 22 tools. The workbench's connection config defaults to all tools, with guided mode selectable.

| Tool | Required arguments | Result |
|---|---|---|
| `list_motion_recipes` | None; optional `query` | Recipe IDs, provenance, defaults and short instructions |
| `create_animation` | `recipe` | `clip_id`, phases, controls, compact quality, next export call |
| `inspect_animation` | `clip_id` | Current quality, issues, unknown checks and source |
| `revise_animation` | `clip_id` | New immutable take regenerated from its source |
| `finish_animation` | `clip_id` | Per-format real-file paths/status, video verification or failure |
| `import_reference_motion` (advanced) | `manifest_file` | Reusable recipe ID from observed 2D or fitted 3D tracks |

Create/revise controls are height, mass, tempo (0.75–1.25), heading (degrees),
origin ([X, 0, Z] metres), and name. Omit them to retain reference defaults or
previous revision settings. Human recipe height is 1.3–2.3 m; canine withers
scale is 0.3–1.2 m. Racket/reference recipes sample at 240 Hz; general coupled human recipes output
at 60 Hz from a dense 240 Hz source. Retimed contact and pose
pins are preserved on exact samples through event-aware source resampling.

`finish_animation.formats` is an array of mp4/json/gltf/bvh, default [mp4].
Optional `serve_clip_id` composes a `zverev_serve` before the primary
`forehand_return` clip. Both must use tempo 1, with default serve heading and
origin. The receiver is placed on the opposite baseline. Court scenes support
MP4/JSON only; individual actors retain BVH/glTF export. Both actor clips are
validated, and the shared ball has service/return bounces and exact racket
contact. This is prescribed flight, not a force-based impact simulation.

`quality` is final (1920×1080) or preview (1280×720), both at 60 fps. MP4 uses
local Node.js/FFmpeg and Linux surfaceless EGL. A missing renderer dependency is
reported per file; other formats can succeed in the same call. The old
`export_motion` retains its skeletal/MJCF formats. `GET /api/export/<id>.mp4`
serves a video already created by finish_animation and validates the clip again.

All guided save/export paths use the same release gates. Null checks are
unknown. Compact replies omit the skeleton, frames and COM trajectory.
The forehand rig declares bounded elbows, forearm roll and wrists. Arm capsules
are checked against the standard shirt surface at poses and interpolation
midpoints. `arm_torso_clearance`, `arm_joint_limits` and `elbow_continuity`
failures block export; compact issues identify the affected part and time for
clearance/continuity. Legacy capture arm checks remain unknown unless they
declare the supported body profile. Calibrated anatomy and dynamic balance are
not established by these checks.
Imported reference data persists in SQLite with its recipe. Manifest paths are
plain JSON filenames inside the project references directory, limited to 2 MB.
No raw-video pose extraction or built-in model/inference endpoint is provided.
MCP additionally exposes prompts/list and prompts/get for animation_director.

## Coupled body / version 0.5

All controls are exposed through the same Engine.call / HTTP / MCP registry.

| Tool | Required arguments | Result |
|---|---|---|
| `describe_body_controls` | `character_id` | 35 named controls, effective ranges, drivers, settings/options schemas and primary research links; optional coordinates/options |
| `configure_body` | `character_id` | New immutable canonical human profile; optional settings (mobility, shoulder share, six motion budgets) |
| `preview_body_pose` | `character_id`, `coordinates` | Unsaved frame, valid flag, projected values, actual ranges and collision diagnostics |
| `animate_body` | `character_id`, `keyframes` | Validated clip summary, profile ID, timing and reported key adjustments |

`coordinates` is a sparse name→degrees map; discover names rather than guessing.
`keyframes` has 2–16 `{time, coordinates}` objects, starts at time zero and ends
between 0.25 and 30 seconds. Coordinates accumulate across keys. Omitted initial
coordinates use the documented relaxed stance. Options: `coordinate_shoulders`,
`ground_lift`, `auto_timing`; all default true. `on_limit` is project/reject;
preview defaults to project, animation to reject. Projection affects requested
keys only, and reports every adjustment. Invalid intermediate curves are rejected.

`animate_body` returns `id`, suitable for `finish_animation` as `clip_id`.
`get_clip` exposes `body_request` and `body_adjustments`; its summary includes
`body_profile` and `timing`. `inspect_animation` also accepts body clips.
Revise a body motion by sending amended keys to `animate_body`; recipe revision
remains `revise_animation`. No frame array is needed from the language model.

Human `generate_motion` and human `define_pose` now use canonical coupled
constraints before persistence. Legacy XYZ poses are converted; unsupported
capture-frame edits are rejected. General human recipes also use these gates.
Requested duration/speed can change when automatic retiming is necessary;
read `timing.requested_duration`, `actual_duration` and actual clip duration.
Body-profile generation and pose failures save neither a clip nor an orphan rig.
Existing reference/racket recipes retain their documented coordinate/check scope.

MJCF/dynamics for the coupled profile is unsupported rather than exported with
its dependencies silently dropped. See [BIOMECHANICS.md](BIOMECHANICS.md) for
all equations, synthetic numeric defaults, source mapping and check tolerances.

`GET /api/mcp-config?profile=all` is the workbench default. `profile=guided`
returns the original five-tool connection configuration. The Complete API UI
renders all fields from `/api/tools`, with exact JSON as an alternative.

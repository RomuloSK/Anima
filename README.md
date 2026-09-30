# Anima · Motion lab

Anima 0.5.0: coupled body constraints, 35 live anatomical sliders, a complete 22-tool API workbench, reusable reference motion, and local MP4 export.

**This release builds the engine/tool/viewer loop. It does not yet generate arbitrary animations with near-perfect realism.** It includes synthetic human and simplified canine rigs, procedural reference motion, measured diagnostics, actual passive MuJoCo simulation, motion export, and an MCP server that an external LLM can call.

## Body controls and complete API

Open **Body controls** for 35 anatomical sliders, three coordination/timing
toggles, live pose-dependent ranges and a validated keyframe sequence builder.
Shoulder/girdle, trunk twist/bending, hip/knee, knee/ankle and wrist dependencies
are enforced in the engine. Collision and timing checks cannot be switched off.
The **Complete API** panel generates controls from all 22 tool schemas, including
nested arrays/maps. HTTP, MCP and Python share the same validation.

New human poses and general procedural motion use the coupled profile, including
legacy API calls. The engine reports any automatic slowdown. Existing racket
and captured references keep their own known/unknown validation scope. The
numeric envelopes are research-informed synthetic defaults, not calibrated
subject anatomy, muscle dynamics or a guarantee of realistic technique.
See [BIOMECHANICS.md](docs/BIOMECHANICS.md) for the exact dependencies, defaults,
sources and limits, and [body_controls.py](examples/body_controls.py) for a
minimal model-directed workflow.

## A smaller model can direct the engine

The language model selects a recipe and changes a few controls. Anima does the
numerical work: reference reconstruction, FK, fixed grip, quaternion continuity,
exact contact sampling, validation, and file export. No model API key or hosted
language model is used by the engine. This release has **not been benchmarked
with Qwen**; it removes animation mathematics and large pose arrays from the
model's responsibilities, rather than claiming a particular model's reliability.

The bundled `zverev_serve` recipe reproduces the accepted video-guided take:
649 poses at 240 Hz, with its source, phases, knees, racket and ball. Default
controls preserve the motion. The fitted-pose importer independently rebuilds
that geometry within floating-point precision. The engine is not limited to
replaying that take: new human/racket reference recipes can be imported from
2D screen observations or fitted 3D tracks. Extraction of the observations from
raw video still needs a vision/pose tool or human annotations.

Use the **guided MCP profile** for models with a smaller context or weaker
planning ability:

```json
{
  "mcpServers": {
    "anima": {
      "command": "python",
      "args": ["-m", "anima", "mcp", "--profile", "guided"]
    }
  }
}
```

Install the package first with `python -m pip install .`, or use the exact
configuration from **Connect an LLM** in the workbench. This profile exposes
only five tools. The full advanced catalog remains available with `--profile all`.
The server also supplies an `animation_director` MCP prompt.

| Tool | Model's decision | Engine's work |
|---|---|---|
| `list_motion_recipes` | Pick the correct motion/reference | Catalog, provenance, defaults, short guide |
| `create_animation` | Recipe; optional height, mass, tempo, heading, name, origin | Rig, resampling, exact events, FK, attachments, release checks |
| `inspect_animation` | Read issues and unknown checks | Compact measured diagnostics |
| `revise_animation` | Change controls or rebuild a take | Immutable regeneration from its source, no accumulated drift |
| `finish_animation` | Choose MP4/JSON/glTF/BVH | Validation, real files, video frame/format checks and complete decoding |

For the same Zverev motion, two tool calls are enough after choosing the recipe:

```json
{"name":"create_animation","arguments":{"recipe":"zverev_serve"}}
```

Copy the returned `clip_id` into:

```json
{"name":"finish_animation","arguments":{"clip_id":"<returned clip_id>","formats":["mp4"]}}
```

A clip ID is not a video. Deliver the returned `files[].path` only when its
status is `ready`. Missing rendering dependencies produce `needs_dependency`,
not a fake success. JSON/glTF/BVH remain available without renderer dependencies.
Responses contain compact controls, phases and checks, not hundreds of poses.
See [SMALL_MODEL_GUIDE.md](docs/SMALL_MODEL_GUIDE.md) for few-shot examples and
[REFERENCE_RECIPES.md](docs/REFERENCE_RECIPES.md) for new reference workflows.

### Serve and return

Create `zverev_serve` and `forehand_return`, then finish the return with the
serve's `clip_id` as `serve_clip_id`. The engine places the receiver on the far
baseline, extends the server's recovery, and builds one shared ball trajectory
through the service bounce and racket contact. Court scenes export as MP4 or
JSON. Export the individual takes for BVH/glTF. See
[examples/serve_and_return.py](examples/serve_and_return.py).

The return is a coordinated procedural preset, not a captured player motion.
It uses chest-relative hand/elbow paths, a stable elbow plane, separate forearm
roll, and bounded wrist flexion/deviation. Racket orientation follows the arm
and fixed grip instead of independently forcing the wrist every frame.
Capsule arms are checked against the standard shirt, using enclosing ellipsoids
and a triangle-surface narrow phase. Release checks include interpolated
clearance, wrist/forearm limits and recipe-specific elbow continuity. The
original rejected pose is a regression fixture and now fails export.

### Reference controls and repair

Height scales the whole skeleton and prop. Mass changes diagnostics. Tempo is
bounded to 0.75–1.25; heading rotates the entire take. Origin moves the take
along the floor (Y must be zero). Each revision starts from the source recipe,
so repeated changes cannot accumulate editing errors. Changing tempo pins
contact and authored pose events to exact output samples.

Cached FK, attachment transforms, quaternion normalization and quaternion signs
are rebuilt automatically. Invalid geometry, backward knees, discontinuities,
bad contact or incorrect sample times stop a guided take before saving/export.
The repair tool rebuilds from its recipe; it does not certify a corrupted pose
as valid. Unknown joint ranges and missing contact measurements stay unknown.
Forward-knee gates apply to the human reference/recorded serve recipes and the
forehand return; general procedural clips retain their own checks. Arm clearance
and mechanical bounds are established for the new return rig. Legacy captures
without that body profile retain unknown arm checks. These mechanical ranges
are preset constraints, not calibrated subject anatomy.

### Local video export

The shared court renderer supports standard named human rigs, including the
reference, recorded, authored and procedural motions. It produces silent H.264
at 60 fps, with a second-angle quarter-speed replay. `quality: "final"` is
1920×1080; `"preview"` is 1280×720. The character is stylized, not photorealistic.
The native renderer currently requires **Linux with surfaceless Mesa EGL**,
**Node.js 22+**, **FFmpeg/ffprobe**, **DejaVu Sans**, and the Python video extra:

```bash
python -m pip install ".[video]"
```

Install Node.js, FFmpeg, Mesa and DejaVu Sans through the operating system's package manager.
A working EGL context is checked during rendering. Canine motions can be viewed
in the workbench and exported as skeletal files; court MP4 rendering is currently
human-only. The base engine, recipe generation and skeletal exports remain
portable and have no mandatory third-party Python dependencies.

## Start the workbench

Requires **Python 3.10 or later** and a browser with WebGL 2. The base application has no Python dependencies, Node build step, API keys, or runtime CDN requests.

Unzip this folder, open a terminal inside it, and run:

```bash
python start.py
```

Open **http://127.0.0.1:8765**. On Windows you can also double-click `Start-Anima.bat`; on macOS/Linux use `sh start-anima.sh`.

The first launch creates a human walk and a canine trot. Select a subject and movement, adjust parameters, and choose **Generate motion**. Orbit the camera, pause with Space, scrub the timeline, inspect planted feet, switch to skeleton view, and export your take.

### Enable actual dynamics

The base workbench runs without MuJoCo. To enable the **Dynamics lab**, install the pinned physics extra and restart:

```bash
python -m pip install ".[physics]"
python start.py
```

This installs **MuJoCo 3.3.7** and its dependencies. The passive dynamics tool uses 240 Hz stepping, gravity, joint constraints, floor contacts, and friction. It intentionally has no balancing controller: the character drops and collapses. It is a real dynamics integration test, not a physically controlled walk.

If `python` is unavailable but `python3` is installed, substitute `python3` in these commands. MuJoCo installation requires a compatible wheel/platform and internet access. Python on Android/Termux is not a supported MuJoCo installation target for this release; run the project on a desktop OS.

## Included capabilities

| Component | Implemented in 0.4 |
|---|---|
| Rigs | 22-joint human, 26-joint authored/reference serve, 28-joint forehand return, 24-joint recorded reconstruction, and 24-joint canine |
| Human motion | Idle, walk, run, squat, ballistic-root jump, wave, authored serve, recorded serve, forehand return |
| Canine motion | Idle, walk, trot |
| Motion generation | Procedural trajectories plus one licensed marker-based serve reconstruction; fixed-length limb IK |
| IK tool | General two-link solver with a pole, hinge bend bounds, reach clamping, explicit residual |
| Posing | Local intrinsic XYZ pose input with joint-limit rejection |
| Dynamics | Optional real MuJoCo passive ragdoll simulation and MJCF generation |
| Inspection | Bone-length error, joint limits, ground penetration, declared-contact foot slip, root jerk, estimated COM, grip drift, pose pins, target tracking |
| Workbench | 3D solid/skeleton preview, camera controls, playback speeds, frame scrubbing, foot-contact tracks, recent takes |
| LLM integration | 18 schema-validated tools (five in the guided profile), MCP stdio, JSON-over-HTTP API, local tool console |
| Persistence | SQLite shared by the viewer, CLI, and MCP process; immutable clip snapshots |
| Exports | Verified local MP4, BVH, embedded-buffer glTF skeleton animation, full motion JSON, MJCF rig |

The solid viewport character is a procedural segmented mannequin, not a production skinned anatomical model. Canine limbs use a simplified two-link chain; separate digitigrade hocks, scapular motion, and muscles are future work.

## Recorded tennis serve

Choose **Serve · Zverev** to use the supplied-video reference recipe. Its timing controls are disabled in this panel; use `revise_animation` to change tempo.

Choose **Serve · recorded**, then **Generate motion**, or call `load_recording` with a human `character_id`, `recording: "tennis_serve"` and `fps: 60`.

This path reconstructs measured body and racket markers from a licensed University of Bath capture. It preserves the original 1.667-second delivery, with uniform height scaling and a constant-length skeleton fit. Duration controls are disabled for the recording; playback stops at its end rather than snapping into a loop. The ball trajectory, inferred contact and head gaze are reconstructed. The renderer is a stylized mannequin.

Version 0.3.1 fixes backward knee bends near extension. Knee poles are constrained to the forward side of the leg using the measured foot direction before temporal smoothing. Regression checks cover both knees throughout the take, including interpolated playback poses. Arm and racket motion are unchanged.

Joint ranges for the captured subject are **not calibrated** and appear as unknown, not passed. The header exposes source attribution and measured reconstruction errors. BVH, glTF and JSON exports work; MJCF export requires calibrated ranges and is unavailable for this captured rig. The original procedural serve remains a separate authored template.

Source: Durlind, Martinez-Hernandez & Assaf (2025), University of Bath, [DOI 10.15125/BATH-01454](https://researchdata.bath.ac.uk/1454/), CC BY 4.0. See `anima/data/ATTRIBUTION.md` for the exact take and adaptation details.

## Authored serve and arm constraints

Choose **Serve · authored** in the workbench, or call `generate_motion` with `action: "serve"`, a human `character_id`, `duration: 4.2`, and `fps: 60` (240 is also supported). This uses the same generation, validation, persistence and export path as other actions.

The serve creates an immutable 26-joint rig snapshot with clavicle motion, shoulder swing/twist, elbow flexion, forearm roll and wrist bend. The source character is preserved. The racket has one constant local transform attached to the wrist; its orientation is never animated independently. Interpolating the local skeleton also preserves this grip in the viewer and video renderer.

C2 key curves pass through the authored contact pose exactly. The evaluator checks final joint ranges, unit rotations, FK consistency, declared position targets, rigid prop transforms and contact pose pins. Invalid constrained clips are rejected before saving or exporting, including browser downloads. A reachable-position helper rejects impossible IK requests instead of silently substituting a target.

`constraints.py` exposes the reusable rig and constraint operations; `serve.py` authors the serve through those operations. The clip's `attachments`, `position_targets`, `pose_pins` and `ball_contact` metadata are available through the tool API. glTF contains a wrist-parented racket node and the ball trajectory; BVH exports the body skeleton only. Neither export includes a production mesh.

This is authored kinematics with synthetic joint ranges. It does not add motion capture, self-collision avoidance, muscle simulation or force-driven control. Passing its tests establishes constraint consistency, not professional technique or anatomical realism.

## Connect an LLM

Use **Connect an LLM** in the running workbench to copy a configuration with your actual interpreter, source path, and data directory. Add that configuration to an MCP client supporting local stdio servers. It is not automatically connected to this ChatGPT conversation.

Alternatively, after `python -m pip install .`, configure:

```json
{
  "mcpServers": {
    "anima": {
      "command": "python",
      "args": ["-m", "anima", "mcp"]
    }
  }
}
```

Use the full interpreter path if your client does not resolve `python`. The same interpreter must have the physics extra installed to expose MuJoCo. MCP is implemented for protocol revision **2025-06-18**, over newline-delimited stdio. The HTTP API is a local application API; it is **not** an MCP Streamable HTTP endpoint.

Recommended tool sequence:

1. `describe_capabilities` — inspect actual supported motions and available backends.
2. `create_character` — choose a human or canine template and dimensions.
3. `generate_motion` or `define_pose` — create a take using validated parameters.
4. `evaluate_motion` — read measured problems; change parameters if needed.
5. `get_clip` — inspect bounded frame slices.
6. `export_motion` — save BVH, glTF, JSON, or MJCF.

`solve_ik` is a standalone geometry tool. It reports a feasible target and residual; it does not automatically apply a character pose, constrain the shoulder, or resolve collisions. The viewer's **Reload saved assets** button shows takes created by the LLM.

There is no built-in LLM, text-prompt parser, model API call, or simulated AI response. The tool console exercises the actual engine functions.

## Command line and API

```bash
# Print the complete tool catalog and JSON schemas
python -m anima tools

# Check the available backends
python -m anima call --tool describe_capabilities

# Isolate a project’s state; use the same directory for serve and mcp
python -m anima serve --data ./project-data --port 8765
python -m anima mcp --data ./project-data

# Run the complete create → generate → evaluate → export example
python examples/llm_workflow.py
```

HTTP example, with the viewer running:

```bash
curl http://127.0.0.1:8765/api/call \
  -H 'Content-Type: application/json' \
  -d '{"name":"create_character","arguments":{"species":"human","name":"Actor","height":1.8,"mass":78}}'
```

Use the returned `id` as `character_id` in `generate_motion`. See [API.md](docs/API.md) for the complete contract and [ARCHITECTURE.md](docs/ARCHITECTURE.md) for implementation boundaries.

## Files and state

The default SQLite store is `~/.anima-motion-lab/anima.sqlite3`. Tool-created exports go to `~/.anima-motion-lab/exports/`; browser exports download through the browser. A custom `--data` directory changes both. The server binds to localhost and rejects foreign origins/hosts. It has no account system and is not intended for public deployment.

All motion data uses metres, seconds, kilograms, +Y up and +Z forward. Local rotations are XYZW unit quaternions. Authored angles and BVH channels use intrinsic XYZ degrees. Exported glTF contains animated joint nodes with no renderable mesh or skin weights; use BVH for a DCC skeletal-animation workflow. MJCF exports the initial rig/environment, not the procedural animation.

## Verification

```bash
python -m unittest discover -s tests -v
```

The suite checks all motion families, stance-foot drift, IK reach bounds and singularities, airborne jump acceleration, export data round-trips, persistence, argument rejection, MCP protocol behavior, HTTP integration, and origin protection. With the physics extra it also checks repeatable human/canine simulations, contacts, solver warnings, and skeletal consistency. Without the extra, only that physics test is skipped.

Example BVH takes and a MuJoCo rig are included in `examples/`.

See [VALIDATION.md](docs/VALIDATION.md) for this build's measured results and browser checks.

## Next engineering stages

1. Extend the bundled recorded-serve reconstruction to general capture imports, more skeletons and validated contact retargeting.
2. Add closed-loop whole-body control and physical tracking in MuJoCo. Separate tracking error, balance, contact impulses, and actuator limits from visual checks.
3. Extend the implemented grip, target and pose-pin constraints to obstacle interaction, motion composition, constrained editing and optimization.
4. Replace template proportions with validated species/subject models, including canine hocks and scapulae; add muscle/tendon models where they contribute measurable fidelity.
5. Add mesh skinning, facial rigs, soft-tissue/cloth stages, offline rendering, and production asset exchange.
6. Add learned motion priors and task policies after data licensing, evaluation, and compute requirements are resolved.

Foot contacts and joint limits alone do not establish realism. The present checks are diagnostics, not a confidence score or clinical/biomechanical validation.

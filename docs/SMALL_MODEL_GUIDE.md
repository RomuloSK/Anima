# Anima director guide

Use an MCP client with `python -m anima mcp --profile guided`. The client must
support tool calls; Anima does not host Qwen or select its inference settings.
The guided profile keeps five compact schemas. Responses
are compact, and omit the full skeleton and frame arrays.

Give the client this instruction, or request the `animation_director` prompt:

> Use Anima's guided tools. Choose an exact recipe ID from list_motion_recipes.
> Keep defaults for a faithful reference. Never calculate raw joint angles.
> Read issues and unknown checks. Use revise_animation for changes or repair.
> finish_animation creates the actual files. Deliver only paths marked ready.
> If a suitable recipe is absent, ask for reference observations rather than
> substituting an unrelated performer. Report export failures honestly.

## Example: the accepted Zverev serve

1. `list_motion_recipes({"query":"Zverev"})`
2. `create_animation({"recipe":"zverev_serve"})`
3. Read `quality.status`, `quality.issues` and `quality.unknown_checks`.
4. `finish_animation({"clip_id":"<returned id>","formats":["mp4"]})`
5. Deliver the ready MP4's returned path.

The engine reproduces the accepted motion without the model tracing poses,
writing a renderer, guessing racket rotations or implementing IK. The source
speed and monocular depth remain estimates, as in the accepted reconstruction.

## Example: serve followed by a forehand return

1. `create_animation({"recipe":"zverev_serve"})` → save the returned serve ID.
2. `create_animation({"recipe":"forehand_return"})` → save the return ID.
3. `finish_animation({"clip_id":"<return id>","serve_clip_id":"<serve id>","formats":["mp4"]})`
4. Deliver the ready MP4's returned path.

Keep both tempos at 1 and the serve heading/origin at their defaults. The engine
handles placement, arm clearance, wrist/forearm articulation, ball bounces and
exact racket contact. The return is synthetic, not a captured Zverev return.
Court scenes support MP4/JSON; individual takes support skeletal formats too.
If an arm clearance, mechanical-limit or elbow-continuity check fails, use
`revise_animation` on the affected guided take and finish the new ID.

## Example: smaller character, slightly slower take

```json
{"name":"revise_animation","arguments":{"clip_id":"<returned id>","height":1.7,"tempo":0.9}}
```

This returns a new clip ID. Use that ID for inspection/export. Omitted controls
retain the previous take's intended settings; the engine regenerates from its
immutable recipe. The previous take survives unchanged.

## Example: a damaged cached pose

If inspection reports failed FK, grip or bone checks:

```json
{"name":"revise_animation","arguments":{"clip_id":"<damaged guided clip id>"}}
```

Regeneration restores the source recipe rather than trying to guess which joint
the model should edit. A new take that fails validation is not saved. Retry a
creation error with supported controls; do not invent a missing clip ID.

## Example: unavailable video renderer

`finish_animation` can return `export_incomplete` with a per-file
`needs_dependency`, `unsupported` or `render_failed` status. The diagnostic
explains the missing dependency or renderer error. Install the required local
renderer dependencies, or export `json`, `gltf` or `bvh`. Never claim an MP4
exists from a successful motion-generation response alone.

## New movements and evaluation

Built-in recipes include the Zverev reference, the separately attributed Bath
serve, a body-aware forehand return, seven human procedural actions and three canine actions. Procedural
actions do not have the same measured/reference fidelity as the Zverev recipe.
New human/racket references can be imported through the advanced profile;
see REFERENCE_RECIPES.md. A text-only model cannot extract a person's pose from
unseen video. The depth solver cannot recover uniquely measured 3D anatomy from
one camera view.

The included tests exercise schemas, compact responses, immutable revisions,
source reconstruction, constraints and file export. They are engine/interface
tests, not a Qwen evaluation. To measure a specific model, run the examples
through its actual MCP client and record valid tool-call rate, correct recipe
selection, task completion, export errors and the resulting motion review.

## Custom body motion with the complete profile

Use MCP `--profile all` for custom motion. Call `describe_body_controls` with a
created character ID, then `preview_body_pose` with a few named coordinates.
Read `valid`, `adjustments` and effective ranges. Supply two or more sparse
keyframes to `animate_body`; let the engine coordinate shoulders and timing.
Copy its returned `id` into `finish_animation.clip_id`. Read requested/actual
duration before describing the result. A body pose uses degrees and names, not
raw quaternion arrays. If an intermediate curve is rejected, revise the keys;
there is no safety-off option. Numeric defaults are synthetic, not individually
calibrated anatomy. See `examples/body_controls.py` for an executable workflow.

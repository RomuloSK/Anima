# Reusable reference reconstruction

The importer turns supplied observations into a reusable motion recipe. A small
language model directs the workflow; it does not solve joint rotations.
The current fitted-reference adapter covers a fixed-proportion human and a
wrist-attached tennis racket. Canine/reference retargeting and arbitrary rigs
are not covered by this adapter.

## Inputs

`examples/zverev_reference.json` is a complete fitted-3D manifest used to
independently rebuild the accepted take. `examples/zverev_reference_2d.json`
contains the original manually traced screen observations and camera-pan
compensation, so the engine can perform monocular lifting itself.

Both examples retain the reference's phase timing, yaw, foot yaw/pitch, racket
roll, contact/release and source provenance. These controls are reference
observations/priors, not exact anatomical measurements. A new reference needs
its own observations and timing; copying the Zverev controls would copy parts
of his technique. The original 74 MB video is not duplicated in the package.

| Field | Contract |
|---|---|
| `schema_version` | `1` |
| `kind` | `human_racket_reference` or `human_racket_reference_2d` |
| `name`, `source` | Name plus file, performer and provenance metadata |
| `height`, `mass` | Synthetic rig dimensions; 1.3–2.3 m, 40–150 kg |
| `playback_slowdown` | Explicit source playback/capture-speed assumption |
| `release_time`, `impact_time` | Ordered source-time events; contact before recovery |
| `landmarks` | 4–240 strictly ordered source timestamps, each with all 13 roles |
| `view_direction` | Camera view basis vector |
| `controls` | Time keys for yaw, both feet, racket roll and contact twist |
| `phases` | Ordered source times and labels, starting with the take |

The landmark roles are pelvis, left/right shoulder, head, left/right elbow,
left/right wrist, left/right knee, left/right ankle, and racket head. 3D points
are metres, Y up. 2D points are source pixels with Y down. Racket head means the
string-bed centre, not the tip. All control curves cover the full source interval.
See the complete example for array widths and values rather than synthesizing
an undocumented format.

A 2D manifest additionally supplies an orthonormal camera right/up/view basis,
pixel origin, pixels per metre and one pan translation per observed frame.
`fit_hints` optionally contains one row per frame for relative depths, root
depth, ankle height and knee flexion. These are estimates/priors: preserve their
origin in source metadata. Without hints, the fitter uses neutral depth priors
and projected ankle heights. Missing depth remains ambiguous.

## Import and use

Install numerical reference dependencies:

```bash
python -m pip install ".[reference]"
```

Use one shared project directory. Put the manifest in its `references` folder:

```bash
mkdir -p project-data/references
cp examples/zverev_reference.json project-data/references/reference.json
python -m anima call --data project-data --tool import_reference_motion --args '{"manifest_file":"reference.json"}'
```

Copy the returned `recipe_id` into `create_animation`. Imported recipes persist
in the same SQLite store and appear in `list_motion_recipes`; the compact guided
profile can use them after ingestion without receiving the observation arrays.
This importer is in the advanced profile; numerical math remains in the engine.
The CLI supports it directly. Files must be plain JSON filenames within the
reference inbox; path traversal, invalid coordinates, missing roles, unordered
events and excessive inputs are rejected.

## What the engine solves

For 2D input, a constrained least-squares fit uses projection residuals,
synthetic segment lengths, torso/head proportions, floor estimates, yaw,
optional hints and temporal depth continuation. Reprojection errors and solver
convergence counts are reported. They measure fit to supplied annotations,
not motion-capture accuracy or a uniquely correct depth solution.

For fitted 3D input, shape-preserving curves feed a fixed-length 26-joint rig.
Two-link IK handles arms/legs. Knee poles stay on the forward side of the foot;
elbow planes are carried through extension; the racket frame is transported
continuously. A small centred quaternion filter removes fitting noise. Racket
and ball-contact transforms are computed from the skeleton. Excessive IK reach
residuals stop import rather than hiding grossly incompatible observations.

Release checks include FK, bone lengths, rotations, ground clearance, rigid
grip, contact and forward knees at actual and interpolated poses. They do not
certify visual realism, anatomical ranges, balance, forces, or self-collision.
The model still needs a person or vision/pose provider to get observations from
a new video; raw-video pose detection is not implemented in this release.

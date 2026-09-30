# Coupled body controls · v0.5.0

The `human_coupled_v1` profile turns a known synthetic human into a 28-joint
rig with 35 anatomical controls. The engine owns the coordinate conversion,
dependent ranges, fixed bone lengths, collision checks and timing checks.
The UI, Python Engine, HTTP and MCP use the same registry and constraint code.

## Use the workbench

Select a human and open **Body controls**. Move a slider; its available range
and the ranges of dependent controls update from a server-side preview. The
preview identifies projected values and collision failures. A blocked pose
cannot be added to the sequence. Add at least two poses, edit their times
(starting at zero), and choose **Create checked motion**. The whole resulting motion,
including quaternion-interpolated playback midpoints, must pass before saving.

The **Profile and timing budgets** section creates an immutable profile. The
**Complete API** dialog renders all 22 tool schemas as numeric sliders/number
inputs, toggles, selectors, nested objects and editable arrays/maps. Raw JSON
is available for exact values. **Connect an LLM** defaults to all 22 tools;
`guided` still exposes the existing five recipe tools.

## Coordinate model

Angles are degrees. Body coordinates are separate from raw intrinsic XYZ.
Positive elbow/knee flexion bends the hinge in its permitted direction. Arm
elevation starts from rest-down; arm plane 0 is forward, 90 outward and 180
backward. Left/right controls use the same anatomical sign convention.
Forearm pronation/supination is separate from wrist flexion and deviation.
The shoulder-girdle transform is a virtual rotational proxy, not a measured
scapula sliding on an anatomical rib cage. Trunk rotation is relative to the
pelvis; turning the pelvis turns the whole body.

| Group | Coordinates per side or group | Base envelope, degrees |
|---|---|---|
| Trunk | Pelvis turn; flexion; side bend; twist | ±180; −25…60; ±35; ±70 |
| Head | Neck flexion; turn; side bend | ±45; ±75; ±35 |
| Each arm | Girdle; elevation; plane; axial rotation | 0…60; 0…175; ±180; ±100 |
| Each arm | Elbow; forearm roll; wrist flexion; wrist deviation | 0…150; ±90; ±70; ±35 |
| Each leg | Hip flexion; abduction; axial rotation | −20…125; −20…45; ±45 |
| Each leg | Knee; ankle dorsiflexion; inversion | 0…150; −45…45; ±20 |

These boxes are only outer bounds. `describe_body_controls` supplies the
current effective interval, driver names, explanation, units and value for
every coordinate. Use names rather than joint indices. `mobility` (0.5–1)
tightens the envelope; it cannot expand it beyond the base model.

## Dependencies embedded in the solver

The following equations describe **synthetic animation defaults**, not
universal human measurements. Values below assume mobility 1. They remain
explicit and versioned so a future calibrated profile can replace them.

| Dependency | Implemented rule |
|---|---|
| Girdle → overhead arm | Glenohumeral elevation ≤120°. Total elevation ≤120° + actual girdle rotation, capped at 175°. Automatic coordination supplies a configurable 25–40% girdle share (default one third). |
| Arm plane → elevation | Elevation cap decreases from 175° at absolute plane 100° to 45° at 165°, remaining 45° farther backward. |
| Elevation → arm axial rotation | Axial limit narrows from ±100° below 90° elevation to ±70° at 175°. |
| Trunk bend → twist | Normalized squared flexion, side bend and twist sum to at most 1. Flexion has distinct positive/negative bounds. |
| Combined neck motion | The analogous normalized ellipsoid prevents all three independent end ranges at once. |
| Wrist flexion → deviation | Available deviation is 35 × √(1 − (flexion/70)²). Roll comes from the forearm. |
| Knee → hip | Hip flexion cap is 85 + 40 × clamp(knee/90, 0, 1). |
| Hip flexion → hip rotation | Rotation cap rises from 30° at hip extension −20° to 45° at hip flexion 20°. |
| Knee → ankle | Dorsiflexion cap is 25 + 20 × clamp(knee/20, 0, 1). |

Driver coordinates resolve before their dependents. `on_limit: project`
returns each requested/resolved value and the dependency that changed it.
`on_limit: reject` fails instead. Animated intermediate samples are never
clamped to a flat plateau: a curve crossing a constraint is rejected.

## Toggles and mandatory checks

| Option | Effect |
|---|---|
| `coordinate_shoulders` | Coordinates girdle motion with elevation. Off retains the explicitly supplied girdle angle and reduces available arm elevation accordingly. |
| `ground_lift` | Lifts the root enough to clear the joint-sphere floor envelope, then smooths its height conservatively. Off leaves floor correction to the author; floor validation remains active. |
| `auto_timing` | Lengthens a motion to meet angular and root speed/acceleration/jerk budgets. Off rejects excess motion. |

There is no disable-limits or disable-collision toggle. Both saving and export
recompute checks from quaternion rotations and FK; cached coordinates and
positions are not trusted. Unrepresented rotations (such as knee twist or
clavicle motion used to bypass the girdle) fail canonical reconstruction.
Knee hyperextension fails even if body-profile metadata is removed.

Upper arms and forearms use capsules against the standard torso surface.
Nonadjacent limb capsules, hands, the head sphere and leg/torso intersections
are also checked. Connected shoulder/hip seams are excluded locally. These
are approximate mannequin volumes, not muscle, cloth or soft-tissue contact.
Checks sample frames and interpolation midpoints, with numerical tolerances;
this is not an analytic continuous-time collision proof.

## Timing and smoothness

Sparse anatomical keys use bounded quintic C2 curves. Retiming existing dense
procedural motion uses a natural cubic C2 spline with quaternion sign alignment
and normalization. Linear resampling had introduced artificial acceleration
and jerk at old frame boundaries. All resampled output is validated again.

| Budget | Default | Configurable interval |
|---|---|---|
| Joint speed | 360°/s | 60–720 |
| Joint acceleration | 2,400°/s² | 200–6,000 |
| Joint jerk | 30,000°/s³ | 2,000–100,000 |
| Root speed | 3 m/s | 0.5–10 |
| Root acceleration | 20 m/s² | 2–80 |
| Root jerk | 400 m/s³ | 20–5,000 |

These are animation budgets, not injury thresholds or measured athletic
maxima. The API returns requested and actual duration; the workbench displays
both. Retiming slows every track together and preserves the trajectory at the
source samples. Older procedural walking/running/jumping may slow substantially
under the defaults. Passing these limits does not make a legacy gait realistic.
For fast sport-specific technique, prefer the established reference recipes.

## Research basis and scope

The earlier project research called for hierarchical DOFs, dependent
coordinates, range limits, contact checks and smooth interpolation, but supplied
no calibrated subject-specific ROM table. This release implements that
architecture. Primary sources below support the *existence of dependencies*,
not the precise synthetic equations or numerical defaults above.

- [Unconstrained overhead-reaching study](https://pubmed.ncbi.nlm.nih.gov/19395283/): scapulohumeral coordination varies through reaching; a fixed universal ratio is not assumed as measured truth.
- [Glenohumeral/scapulothoracic axial coupling](https://pubmed.ncbi.nlm.nih.gov/35367838/): girdle orientation contributes to total humeral axial motion.
- [Biceps femoris fascicle length during passive stretching](https://pubmed.ncbi.nlm.nih.gov/29223017/): combined hip/knee posture changes hamstring length.
- [Knee position and ankle dorsiflexion](https://pmc.ncbi.nlm.nih.gov/articles/PMC4118219/): knee flexion changes gastrocnemius restriction. The implemented absolute ankle range is a model assumption.
- [Lumbar axial rotation at sagittal end ranges](https://www.sciencedirect.com/science/article/abs/pii/S1356689X07000483): axial rotation depends on sagittal posture. Extending this to a whole-trunk ellipsoid is an engineering approximation.
- [OpenSim CoordinateCouplerConstraint](https://opensim-org.github.io/opensim-moco-site/docs/1.2.0/html_user/classOpenSim_1_1CoordinateCouplerConstraint.html): software precedent for dependent coordinates as functions of independent coordinates.

New human body poses and general procedural human clips use this profile,
including those created through legacy pose/generation and recipe APIs. Dogs
remain a separate model. Existing accepted Zverev, recorded and racket presets
retain their coordinate systems and their established release gates. Their
uncalibrated checks remain explicitly unknown; they are not silently relabeled
as passing this whole-body model. Configure/preview on a reference character
creates a canonical synthetic rig of matching height/mass rather than assuming
its captured marker frames are anatomical coordinates.

There are no muscles, tendon-force limits, joint loads, learned balance,
foot-lock solver or individualized segment measurements in this profile.
Its MJCF export/passive physics path is rejected because the existing dynamics
mapping would discard coupled constraints. Legacy synthetic rigs still support
the separate optional passive MuJoCo workflow. Downstream editors that alter
angles, timing or interpolation must revalidate the altered motion.

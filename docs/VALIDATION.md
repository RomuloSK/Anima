# Build validation · 0.4.1

Validated on 2026-09-30. **61 tests ran: 60 passed, one optional MuJoCo
integration test skipped** because MuJoCo is not installed. See
`test-results-v0.4.1.txt`. The five-tool director profile remains intact.
The 0.4.1 wheel built successfully. In an isolated installed-package path,
both recipes, arm checks and full scene JSON export passed without importing
NumPy, SciPy or Pillow. See `wheel-check-v0.4.1.json`.

The rejected return independently placed the wrists/racket and used fixed
world-space elbow guides. The new engine preset couples the hands and elbows
to the chest turn, keeps a consistent elbow plane, and drives bounded forearm
roll and wrist articulation through smooth joint curves. The racket remains
rigidly attached. Forcing an independent racket axis every frame is avoided.

Regression coverage includes the actual rejected pose, complete arm segments
crossing the torso even with endpoints outside, triangle-surface clearance,
the rendered shirt enclosed by its broad phase during twists, excessive arm
rotation, wrist interpolation outside valid endpoint ranges, elbow jumps under
the older quaternion threshold, retargeting, immutable repair, two-actor
validation, legal service bounce/net clearance, exact contact and a moving
shared ball in the native renderer from all three review angles.

The return checks actual poses and interpolation midpoints. The delivered scene
has a minimum arm/shirt clearance bound of 2.08 mm, zero configured arm-limit
violations, a maximum per-sample rotation step of 4.13 degrees, and maximum
chest-relative elbow speed of 3.91 m/s. The elbow-speed gate is a preset
continuity threshold, not an anatomical speed certification. Fixed bone lengths
and rigid grip pass; the prescribed ball contact is exact within numerical
precision. The source controls and generator are included to regenerate the
baked preset.

`finish_animation` produced the replacement MP4: H.264/yuv420p,
1920×1080 at 60 fps, **777 frames / 12.95 seconds**, with a full-court view and
quarter-speed return replay. First-frame readback, frame count, stream format
and complete FFmpeg decoding passed. Twelve poses were reviewed from both
receiver-side camera angles, and a contact frame was inspected from the actual
MP4. A standalone serve also passed native preview rendering after the scene
export changes. See `return-validation.json` and `video-check-v0.4.1.json`.

The return is synthetic, not player capture. General human joint-limit
calibration, force-based contact labels, dynamic balance, arm/arm or
racket/body collisions, full anatomical surfaces and a Qwen client benchmark
remain unestablished. Legacy captures retain unknown arm checks unless they
declare the supported standard body profile. The new collision checks cover
arm capsules against the rendered standard shirt, with the connected shoulder
seam excluded.

---

# Build validation · 0.4.0

Validated on 2026-09-29. The current suite ran **49 tests: 48 passed, one optional
MuJoCo integration test skipped** because MuJoCo is not installed. The HTTP
round-trip and foreign-origin test passed with a temporary loopback server.
New browser UI changes passed JavaScript syntax checks; an interactive browser
run was not performed in this environment.

The guided tool profile contains five schemas, about 4.3 KB of JSON. A typical
creation response is under 2.6 KB and contains no pose arrays. Actual MCP
initialization, profile discovery, creation and advanced-tool isolation are
covered. The installable 0.4.0 wheel was built and tested in an isolated import
path: bundled recipe creation and JSON export succeeded without importing
NumPy, SciPy or Pillow.

Both the bundled Zverev recipe and the fitted-3D reference importer reproduce
the accepted reconstruction within floating-point precision. Default recipe
joint-position differences measured below 1e-11 m. This is reproducibility of
the reconstruction, not accuracy against calibrated Zverev motion capture.
The source file/timecodes and absence of another performer's base capture are
checked. 2D import tests perform actual numerical lifting from source pixels,
report projection errors, create a new recipe and validate the resulting take.
Nonfinite points and invalid camera geometry are rejected.

Height, heading, tempo and origin controls preserve FK, segment lengths and
grip. Forward knees are checked at actual and interpolated poses. Retiming
keeps authored contact pose pins on exact samples. Corrupted cached geometry
is blocked by export, and immutable recipe regeneration restores it. Every
built-in recipe is exercised through the same high-level director interface.
Missing video dependencies return an incomplete export result while requested
skeletal exports can still succeed.

`finish_animation` produced a verified silent H.264/yuv420p MP4 at
1920×1080/60 fps: 855 frames, 14.25 seconds. First-frame GPU readback, frame count,
stream format and complete FFmpeg decoding passed. Six frames from both camera
views were visually reviewed. The renderer and workbench use local assets.

No Qwen inference/client benchmark was run. Reduced model responsibilities and
deterministic engine results are demonstrated; a particular model's tool-call
reliability, arbitrary-motion realism, calibrated anatomy, physical balance,
self-collision and monocular depth correctness are not established.

See `test-results-v0.4.txt`, `video-check-v0.4.json` and the included guided
workflow and reference recipes. Older release results below describe their
respective implementations.

---

# Build validation · 0.3.1

Validated on 2026-09-29: **35 automated tests passed, 0 failed, 0 skipped**, including MuJoCo integration checks. See `test-results-v0.3.1.txt`.

The user identified backward knee bends in the opening pose. The reconstruction had a positive scalar knee angle but an unconstrained pole behind the hip-to-ankle line. Temporal smoothing preserved the wrong branch. The corrected solver uses projected measured foot-forward as its anterior reference, smoothly discounts ambiguous surface-marker poles, and constrains the bend plane within 45 degrees of that reference before temporal smoothing.

The new regression checks both knees over the complete take at 180 and 240 Hz, plus the midpoint of every adjacent pair of poses using the same local-quaternion interpolation and FK as playback. The existing axis-flip regression still passes. In the delivered 401-pose take, neither knee bends backward; minimum knee/foot-forward alignment is 0.901 left and 0.782 right. These are reconstruction constraints, not calibrated anatomical ranges.

The racket trajectory and all shoulder/elbow/wrist/hand positions match the prior version exactly. Bone lengths and fixed grip checks pass. Key poses were rendered from both camera angles for visual review. See `knee-direction-validation.json` and the updated `recorded-serve-validation.json`.

Earlier test and browser reports below describe their respective releases.

---

# Build validation · 0.3.0

Validated on 2026-09-29. **34 automated tests passed, 0 failed, 0 skipped**, including MuJoCo integration checks. **12 browser checks passed**, with no runtime exceptions. The base package still has no mandatory third-party Python dependencies.

The rebuilt video uses `Engine.call("load_recording", ...)`: 301 measured samples at 180 Hz, reconstructed as 401 poses at 240 Hz. Recorded duration is 1.667 seconds; no slow easing or time stretching is applied. The video uses a native-speed view and a quarter-speed replay, 1920×1080 at 60 fps, 472 frames / 7.867 seconds.

## What changed and what was checked

The earlier authored serve passed its mathematical constraints but did not look convincing. This revision adds measured body and racket motion, retaining the original racket trajectory and string-plane orientation. A direct comparison against the bundled marker array checks that trajectory at all 301 original sample times. Rigid grip, bone lengths, quaternion interpolation, scaling, persisted source attribution and export parenting are also checked.

Visual review exposed a separate rotation-frame bug: when a leg approached straight or a foot pointed vertically, a noisy projected pole or world-up cross product could flip the joint frame. One 240 Hz frame showed a 125° thigh rotation and compensating ankle rotation; the toss wrist could jump 83°. The knee plane now carries forward through near-extension, and foot/wrist frames use lateral marker pairs. The affected joints now change at most about 7.3° per 240 Hz frame on this take. A regression test explicitly detects these flips. This is a discontinuity check, not a biomechanical speed certification.

## Reconstruction measurements

| Measurement | Result |
|---|---:|
| Racket-centre error against source, at original samples | < 1e-10 m |
| Maximum variation of source racket-marker distances | 4.05 mm |
| Maximum IK endpoint residual | < 1e-10 m |
| Elbow marker-fit RMS | 39.3 mm |
| Maximum elbow marker-fit error | 74.4 mm |
| Maximum shoulder marker-fit error | 38.4 mm |
| Racket speed at inferred contact, 240 Hz reconstruction | about 28.1 m/s |
| Joint-sphere ground penetration | 0 mm |
| Captured-subject joint limits | Unknown, not passed |
| Force-plate contact labels / contact slip test | Unavailable |

The small racket-path residual verifies the reconstruction preserves its input. It is not a claim of capture-system accuracy. Joint centres and marker identities are inferred from a numeric array; the body fitting errors above remain. The ball/contact event and head gaze are reconstructed. The character is a stylized segmented mannequin. No dynamics control, calibrated anatomy, self-collision avoidance, spin model, or perceptual realism study is claimed.

The browser test checks the actual recorded-serve control, disabled duration editing, honest unknown-limit display, scrubbing, playback stopping at the end, source persistence, glTF racket parenting and ball export. Key poses and the rendered frame sequence were visually reviewed from two angles. Full MP4 decoding and format checks verify the video output. See `test-results-v0.3.txt`, `recorded-serve-browser-checks.json` and `recorded-serve-validation.json`.

The following sections are retained historical results for earlier releases, not claims about the new capture reconstruction.

---

# Build validation · 0.2.0

Validated on 2026-09-29. **29 automated tests passed, 0 failed, 0 skipped**, including the existing MuJoCo integration checks. **9 browser checks passed**, with no runtime errors. The 26-joint serve rig also compiled successfully in MuJoCo. The Python wheel builds without additional mandatory runtime dependencies.

The served animation was generated through `Engine.call("generate_motion", ...)` at 240 Hz, 4.2 seconds, 1,009 poses. The final video contains 660 frames at 1920×1080/60 fps, H.264/yuv420p, 11 seconds. Full decoding completed without errors.

## Final serve measurements

| Check | Result |
|---|---:|
| Configured joint-limit violations | 0 |
| Maximum grip position drift | 0 m |
| Maximum grip rotation drift | 7.11e-15° |
| Contact elbow bend | 8° |
| Maximum contact pose-pin error | 1.59e-15° |
| Ball-center contact constraint error | 4.45e-16 m |
| Maximum declared target tracking error | 8.68e-16 m |
| Maximum joint-sphere ground penetration | 1.092 mm |

These near-zero geometric residuals follow from a fixed hierarchy and exact authored pose keys. They do not establish biomechanical realism. The ball trajectory is prescribed, not a simulated racket-ball impact. Self-collision avoidance, force-driven tracking and motion-capture comparison remain unimplemented.

Regression tests deliberately break the old failure modes: independent racket rotation, changing the pinned elbow pose, unreachable targets, out-of-range forearm rotation and nonunit quaternions. Constrained export validation is centralized so browser downloads use the same gate as tool exports. Multiple frame rates, subject scales and durations are covered.

The browser checks exercise actual UI generation, the articulated rig, scrubbing, fractional playback, glTF wrist-parenting and ball export, persisted takes after reload, and runtime errors. Screenshots were inspected at trophy, drop, contact and follow-through. Software WebGL in Chromium was used; no physical-device test is claimed.

`test-results-v0.2.json`, `serve-browser-checks.json` and `serve-validation.json` retain the results. The earlier release's baseline documentation follows for context.

---

# Build validation · 0.1.0

Validated in the build environment on 2026-09-28 (America/New_York). These results establish implementation behavior, not anatomical fidelity or biomechanical realism.

## Automated engine and interface suite

Command: `python -m unittest discover -s tests -v`

**19 tests passed; 0 skipped with MuJoCo 3.3.7 installed.**

Coverage includes:

- All six human actions and three canine actions produce finite frames and pass their declared geometric checks.
- FK reconstruction agrees with saved joint positions; bone lengths remain invariant.
- Analytic IK preserves both segment lengths for reachable, unreachable and singular targets and reports residuals correctly.
- Stance contact drift stays below `1e-8 m/s` across tested human/canine scales and stride settings.
- Airborne jump root acceleration matches `-9.81 m/s²` in the tested flight interval.
- Human walk root smoothing prevents the former support-switch height cusps, with RMS root jerk under `100 m/s³` for the fixed default fixture. This is a regression threshold, not an anatomical norm.
- BVH frame/channel counts and embedded glTF animation data round-trips agree with the source clip.
- Invalid enums, unknown parameters, non-finite values, negative mass and out-of-range joint angles are rejected.
- SQLite persistence and paginated frame access work across engine instances.
- MCP initialization, tool discovery, tool-level errors and parse errors work.
- A separate MCP subprocess creates a clip visible to the original engine's shared store, without non-protocol stdout output.
- The HTTP API generates and retrieves clips and rejects foreign origins.
- Human and canine passive MuJoCo runs are repeatable, produce contacts, preserve link lengths, and have zero solver warning counters in the tested two-second runs.

## Measured default procedural clips

Four seconds at 60 Hz, speed 1.2 m/s, stride scale 1.0. Floating-point residuals are shown as measured, not rounded to an invented quality score.

| Metric | Human walk | Canine trot |
|---|---:|---:|
| Maximum bone-length error | `3.61e-16 m` | `5.00e-16 m` |
| Maximum ground penetration at tested joint spheres | `2.08e-16 m` | `7.98e-17 m` |
| Stance foot slip, 95th percentile | `5.33e-14 m/s` | `5.33e-14 m/s` |
| Maximum stance foot slip | `1.07e-13 m/s` | `1.07e-13 m/s` |
| Recorded joint-limit violations | 0 | 0 |
| RMS root jerk | `84.67 m/s³` | `161.39 m/s³` |

These tiny length/contact residuals follow from analytic geometry. They are not evidence that the motion resembles captured human or animal movement. Root jerk remains a reported quantity with no claim of clinical acceptability.

## Browser workflow checks

**14 checks passed, with no JavaScript runtime errors.** Headless Chromium 133 with software WebGL; desktop 1440×1000 and mobile emulation 390×844.

1. The desktop WebGL mannequin preview renders.
2. Desktop has no horizontal page overflow.
3. Canine motion displays four foot-contact tracks.
4. Generating a human wave through the UI creates and loads a new take.
5. Scrubbing updates the displayed timestamp correctly.
6. Skeleton, camera and overlay controls respond.
7. The tool console invokes actual IK and reports an unreachable target.
8. The LLM dialog supplies an MCP server configuration.
9. BVH export downloads a file containing motion data.
10. Passive MuJoCo dynamics runs from the workbench and loads its resulting take.
11. Saved takes remain after reloading the page.
12. Mobile layout has no horizontal page overflow.
13. Mobile subject selection switches to the canine take.
14. Neither tested page reports a JavaScript runtime exception.

Desktop, canine and mobile screenshots were visually inspected. A ground-grid visibility defect was corrected and the browser workflow rechecked. Physical Android/iOS devices, real GPU drivers, accessibility assistive technology, Blender import and third-party MCP client applications were not exercised in this environment.

## Packaging

`python -m pip wheel . --no-deps` succeeds. The base Python package has no runtime dependencies; Three.js 0.180.0 and its MIT license are bundled. Physics remains an optional pinned dependency.

## Still unvalidated

No motion-capture comparison, perceptual user study, muscle-force validation, calibrated ground-reaction force benchmark, energy-budget validation, subject-specific anatomy, physically controlled locomotion, self-collision handling or clinical validation is claimed.


## v0.5.0 coupled body controls

The full Python suite ran 76 tests: **75 passed, one optional MuJoCo test
skipped** (not installed), in 202.158 seconds. This includes the existing
accepted Zverev/reference/captured serve, forehand return, two-actor court,
collision, import, MCP/HTTP and skeletal export regressions. No failures.
The saved full output is `test-results-v0.5.0.txt`.

New coverage verifies shoulder/girdle dependencies, hip/knee and knee/ankle
ranges, combined trunk/neck/wrist end ranges, immutable tightened profiles,
chest-collision rejection, knee/clavicle bypass attempts, forged coordinates,
invalid intermediate curves, timing-budget rejection/retiming, no partial
asset persistence, body-tool export gates, smooth source resampling and foot
path seams. An additional targeted run verifies structural arm/torso checks
after profile metadata is removed (`body-final-tests.txt`).

Playwright checked all 22 schema forms, 35 live body sliders, dependent range
updates, creation from two poses, JSON/form round trip, all/guided MCP configs,
and 390-pixel mobile layout. No JavaScript errors or horizontal dialog overflow.
Serialized form values also passed the Python registry schemas. Screenshots
and `browser-body-results.json` are included.

An isolated dependency-free wheel installation discovered all tools and body
controls, generated a checked motion and exported JSON/glTF/BVH. See
`wheel-check-v0.5.0.json`. These results establish software behavior, not
athletic realism, subject-specific anatomy, dynamic balance or measured Qwen
performance. Numeric settings and research scope are in `BIOMECHANICS.md`.

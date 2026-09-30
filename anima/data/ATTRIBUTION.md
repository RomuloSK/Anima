# Recorded serve data

The bundled marker samples derive from **Gustav Durlind, Uriel Martinez-Hernandez and Tareq Assaf (2025)**, University of Bath Research Data Archive, DOI **10.15125/BATH-01454**.

Source record: https://researchdata.bath.ac.uk/1454/
License: **Creative Commons Attribution 4.0 International (CC BY 4.0)**, https://creativecommons.org/licenses/by/4.0/

Selected file: `4D_56.mat`, from the archive's Spatio-Temporal Serve Data download. The source file's SHA-256 is retained inside `tennis_serve_markers.json.gz`. The asset contains all 301 samples and all 75 marker positions, converted from millimetres to metres, at the source's 180 Hz. No extra recovery samples are invented.

Adaptation by Anima: fixed coordinate rotation, uniform character scaling, anatomical joint-centre estimates from surface markers, a constant-length skeleton fit with anterior knee-pole constraints, quaternion resampling, reconstructed head gaze, a reconstructed ball trajectory, and a rendered mannequin. Racket centre and string-plane orientation derive from the three racket markers. The rendered clip and skeleton are adaptations, not author-validated biomechanics results. Attribution does not imply endorsement.

The MAT array has no marker-name field. Body marker roles are inferred from spatial clusters and motion, rather than supplied anatomical labels. Elbows use paired points 18/19 and 35/36; wrists 23/24 and 40/41 (zero-based indices). A fixed wrist-to-racket transform is fitted across the take. Source soft-tissue motion and differences from the rigid reconstruction remain visible in the reported fit residuals.

The source dataset is separately licensed. These attribution requirements travel with the marker samples, derived motion and video; they do not replace the licenses of the engine or bundled Three.js code.


## Zverev video-guided recipe (0.4.0)

`zverev_serve.json.gz` is the accepted synthetic 3D reconstruction from the
user-supplied `52102.webm`, source interval 00:06–00:33. It is not derived from
the Bath capture. The original footage is not included or assigned the Bath
license. Screen points, camera pan and fitted tracks are retained in the example
manifests. Occlusion, depth, anatomy, playback speed and ball flight are inferred.
The original reference SHA-256 is retained in the 3D/2D manifests' source data.
This is generated reconstruction data for this project, not calibrated Zverev
motion capture or a claim of rights to redistribute the original footage.

## Forehand return preset (0.4.1)

`forehand_return_controls.json` contains authored torso-relative trajectories;
`forehand_return.json.gz` is the deterministic engine-generated take. It is a
synthetic forehand return, not extracted footage, player capture, or Bath data.
`anima.tennis_return.generate_forehand_return()` regenerates the baked asset.

General coaching guidance informed the ready position, unit turn and contact:

- USTA, [Get your forehand flowing](https://www.usta.com/en/home/improve/tips-and-instruction/national/improve-your-tennis-game--get-your-forehand-flowing.html)
- USTA, [The return game](https://www.usta.com/en/home/improve/tips-and-instruction/national/tennis-techniques--the-return-game.html)

No article text or footage is bundled. These links are coaching context, not
measurement data or validation of joint ranges.

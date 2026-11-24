# Motion Studio

**Make motion matter.** Two experiments in camera-based interaction, with one hand-tracking engine.

## Motion Symphony

Conduct a pentatonic synthesizer with your hands. A right hand selects notes and expression, a left hand shapes tempo and visual color, and a pinch adds a bell accent. Enable sound explicitly. Drag the canvas to perform without a camera.

## Gesture Command Studio

Assign open hand, peace sign, fist, pointing, or pinch to a website. Arm recognition and hold a gesture to prepare the action, then confirm the link. Try gestures using buttons without a camera. No system commands or automatic pop-ups.

## Run

Node.js 18+; no npm dependencies.

```sh
git clone https://github.com/zhen01/Motion-Studio.git
cd Motion-Studio
npm start
```

Open http://localhost:4320, enable camera and grant browser permission. First load requires internet for MediaPipe SDK and model. Frames are processed locally; the app does not upload camera imagery. Escape stops sound and camera. Camera accuracy varies with lighting and hand orientation; use the preview to see detection. If camera access fails, use pointer mode. Browser-based audio is synthesized, not recorded music.

## Technical stack

MediaPipe Hand Landmarker, Web Audio API, Canvas 2D, native JavaScript, Node HTTP. Gesture detection uses normalized hand landmark distances, a dwell gate, and a release-to-rearm mechanism. Custom URL mappings persist in browser storage.

Run `npm test` for the pure logic tests. Actual webcam/audio behavior requires a browser with hardware access and network access to the model assets.

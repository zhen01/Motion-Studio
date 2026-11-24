# Motion Studio

**Make motion matter.** A camera-powered playground for natural human-computer interaction.

## 01 / Motion Symphony

Conduct an original eight-bar score performed by four synthesized sections: strings, woodwinds, brass and percussion. Raise hands for louder expression, spread both hands to bring in sections, move your right hand up and down rhythmically to influence tempo, hold a fist to pause and open a hand to resume. The concert hall illuminates playing sections. With no webcam, use the sliders and pointer. Enable sound to hear the arrangement. Instruments are synthesized approximations, not recordings of a live orchestra.

## 02 / Gesture Command Studio

Visual gesture cards show exactly how to position your fingers. Enable camera, arm recognition, hold a gesture for 0.85 seconds and watch the live highlight and progress indicator. Confirm the proposed website to open it. Edit mappings or try them manually without a camera. No automatic system commands.

## Quickstart

```sh
git clone https://github.com/zhen01/Motion-Studio.git
cd Motion-Studio
npm start
```

Open http://localhost:4320. Node.js 18+; camera mode needs internet to load MediaPipe. Frames are processed locally, not uploaded by this app. Press Escape to stop camera and sound. Hardware tracking and audio require testing on your device.

## Stack

MediaPipe Hand Landmarker, Web Audio API, Canvas 2D, native JavaScript and Node.js. Run `npm test` to verify gesture gating, URL validation and musical arrangement logic.

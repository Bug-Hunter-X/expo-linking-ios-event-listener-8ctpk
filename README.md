# Expo Linking.addEventListener iOS Inconsistency

This repository demonstrates a bug where Expo's `Linking.addEventListener` doesn't reliably trigger deep link events on iOS when the app is already open.  The issue appears to be more prevalent in iOS than Android.

The `bug.js` file contains code that showcases the problem. The `bugSolution.js` file offers a potential workaround.

## Steps to Reproduce

1. Clone this repository.
2. Run `expo start`.
3. Open the app and leave it running.
4. While the app is open, trigger a deep link (e.g., tap a URL on another app).  Note that the `Linking.addEventListener` event may or may not fire.

## Potential Solution

The `bugSolution.js` file includes a modified approach that aims to improve reliability by handling initial URL configuration immediately on app launch.
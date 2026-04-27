# Remove macOS support from site

## Plan
- [x] Create task notes and define scope
- [x] Remove macOS support messaging from the download page
- [x] Remove macOS support messaging from the features page
- [x] Update transport security docs to reflect iOS and Android only
- [x] Verify there are no remaining public macOS support references

## Notes
- Goal: the site should present Ekko as supporting iOS and Android only for now.
- Keep changes minimal and limited to user-facing support messaging.

## Review
- Removed the macOS download card and updated the download hero copy to iOS/Android only.
- Removed Windows-forward public support messaging so the site now presents only currently supported platforms.
- Updated the features platform section to show only iOS and Android.
- Updated the transport security platform implementation grid to show only iOS and Android.
- Verification: `rg -n "macOS|MacOS|Mac OS|Windows" src` returned no matches after the edits.
- Verification: `npm run lint` passed.

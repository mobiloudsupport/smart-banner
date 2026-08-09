# Changelog

## 2.0.1
- FIX: Body is now pushed down via `margin-top` instead of `transform`/`padding-bottom`. The previous `transform` approach made body the containing block for all `position: fixed`/`sticky` descendants site-wide, which could conflict with a site's own fixed-header scroll logic (e.g. a header that toggles classes based on scroll position). This reverts the 2.0.0 behavior of dragging fixed/sticky elements down with the banner — they now stay pinned to the viewport as normal
- FIX: `.ml-smartBanner__title` (`<h4>`) now resets `margin: 0`, removing extra height the browser's default heading margin was adding to the banner

## 2.0.0
- BREAKING: Removed the `position` option. The banner now always renders at the top; `position: 'bottom'` configs will be ignored and render at the top instead
- BREAKING: When a top banner is visible, the page body is now shifted down (via CSS `transform`/`padding-bottom`) by the banner's rendered height, so it no longer overlaps page content. This also drags along any `position: fixed`/`sticky` elements on the page (e.g. a fixed navbar), which previously stayed pinned in place
- CHANGE: Banner element is now appended as a sibling of `<body>` (child of `<html>`) instead of inside `<body>`, so it isn't affected by the body transform above
- CHANGE: Styles are now injected via an inline `<style>` tag instead of a `<link rel="stylesheet" href="data:...">`, fixing a timing bug where banner height could be measured before its own layout styles had applied

## 1.4.0
- FEATURE: Added Apple native Smart App Banner support for iOS Safari when the `apple-itunes-app` meta tag is present
- FEATURE: Added `deviceData.browser` and `deviceData.isIosSafari`
- FEATURE: Added `APPLE_NATIVE_BANNER_ACTIVE` event
- CHANGE: Banner logic now suppresses the custom banner on iOS Safari when the Apple native banner meta tag is detected, avoiding duplicate banners
- Docs updated

## 1.3.0
- useSession parameter updated: Now it creates a localstorage key with an expiration. Defaults to 1 day. Time is set with 'sessionExpire' param.

## 1.2.1
- FIX: html elements now inserts HTML intstead of plain text content, this allows to use html tags within texts

## 1.2.0
- FEATURE: Added `unmount()` method to remove library from DOM
- FEATURE: Added `headingColor` param
- FEATURE: When banner is closed, it unmounts from the page
- FEATURE: Now library emits events on open, close and link clicked
- CHANGE: Base styles changes 
- CHANGE: Library modified to let page to have one instance of the banner only, on each `init()`, banner 
- CHANGE: `useSession` param logic changed, now 
- CHANGE: Styles injected in document now has a data attribute called 'ml-smart-banner-styles' <link rel="stylesheet" type="text/css" href="..." ml-smart-banner-style>

## 1.1.4 & 1.1.5
- FIX: deviceData now working
- Docs updated
- License updated

## 1.1.3
- UPDATE: Added deviceData Method
- Readme and license updated

## 1.1.2
- FIX: UserAgent parsed to lowercase for better matches on OS check

## 1.1.1
- Added z-index param in banner options

## 1.1.0
- Added 'session' functionality
- Minor fixes

## 1.0.2
- Docs updated
- Defaults set on Banner Initialization

## 1.0.0 Release
- Smart Banner release

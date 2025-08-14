# Changelog

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
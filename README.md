[![Version](https://img.shields.io/badge/npm-1.1.3-red?link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fml-smart-banner)](https://www.npmjs.com/package/ml-smart-banner)   [![Static Badge](https://img.shields.io/badge/Mobiloud-%23047857?link=https%3A%2F%2Fwww.mobiloud.com%2F)](https://www.mobiloud.com/)


# Mobiloud Smart App Banner

Driving traffic to your app from your mobile site is the smartest way to gain new app users and retain mobile visitors. To get these people to down load your app, you can use smart app banners.

We highly recommend promoting your app using **smart app banners** – with these you’ll show a banner suggesting to install your app only to your website visitors using either an iOS or an Android device.

Read on to learn more about smart banners, and how to implement a smart app banner on your site.


## **What Are Smart App Banners?**

Smart app banners are banners that show up when someone lands on your mobile website, prompting them to get your app.

Here's an example:

![smart-app-banner.png](https://mobiloud.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F24ca93c7-2026-4800-8bb3-1e13bfdada34%2Fsmart-app-banner.png?table=block&id=26ab5175-3d37-46e7-9249-e50d334fde19&spaceId=f1cb51a8-e748-4832-9335-2c96a2e81d09&width=1440&userId=&cache=v2)

Here's what [Apple's own help pages](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/PromotingAppswithAppBanners/PromotingAppswithAppBanners.html) say about smart app banners:

> "Smart App Banners vastly improve users’ browsing experience compared to other promotional methods. Users will trust that tapping the banner will take them to the App Store and not a third-party advertisement. They will appreciate that banners are presented unobtrusively at the top of a webpage, instead of as a full-screen ad interrupting the web content. And with a large and prominent close button, a banner is easy for users to dismiss. When the user returns to the webpage, the banner won’t reappear."
>

## Features

ML Smart Banner features:
- Configuration options:
    - Banner position
    - Banner delay
    - Texts fonts
    - Texts color
    - Banner BG
    - Text content (for button and heading/description)
    - App icon (the same for Android and Ios)
    - Entering animation
    - Display options: On load or when user scrolls up/down
    - Android and iOS links
-  Button Link applies automatically depending on user agent: If Android, it uses the provided android link if iOS, uses the provided ios link.
-  getMobileOs method available: its a function that can be called to get the current browser OS, useful for triggering external functions'. It returns a string containing "android" | "ios" | "windows"
- Fallback App Icon option --> If the provided icon link is invalid / or image can not be displayed, an icon is generated using the App Name Param and Button colors
- Default options set (if not texts, images or colors provided, it shows placeholder info, useful for catching errors or for testing while implementing the banner)
- Banner can be used as a module or used directly in an html / script tag
- Code written in Typescript and minified/bundled with Vite


## 📖 How to use

Smart Banner can be used importing the JS code via CDN or as a module using NPM

### 🚀 With CDN

```javascript
<script type="module" src="https://cdn.jsdelivr.net/npm/ml-smart-banner/dist/ml-smart-banner.min.js"></script>
<script>
  function addSmartBanner() {
    new SmartBanner().init();
  }
  window.addEventListener('load', addSmartBanner);
</script>
```
## Configuration options:

```javascript
const options = {
    fontFamily: `"Source Sans Pro", "Arial", sans-serif`, // (string) Font family for banner texts, defaults to system safe fonts
    fallbackFontFamily: 'sans-serif', // (string) Font family for fallback icon, safe options are serif and sans-serif
    appName: 'ML', // (string) Initials for fallback icon.  Recommended 2 characters. Fallback Image uses button text and bg color
    textColor: '#222', // (string) Banner texts color (any color property value)
    buttonColor: '#222', // (string) Button color (any background property value)
    buttonText: 'Download', // (string) Button text
    buttonTextColor: '#fff', // (string) Button Text Color (any color property value)
    iconUrl: '', // (string) Icon url, defaults to avatar with appName
    textHeading: 'Download now!', // (string) Heading Text
    textDescription: 'Try it now, download today', // (string) Description text
    bannerColor: '#fff', // (string) Banner BG color
    linkIos: 'https://itunes.apple.com/', // (string) Link for iOS 
    linkAndroid: 'https://play.google.com/', // (string) Link for Android 
    position: 'bottom', // (string) Position of the banner, default 'top'. 'top' | 'bottom'
    animation: 'fadeIn', // (string) Banner animation, default 'fadeIn'. 'fadeIn' | 'scaleUp' | 'slideBottom' | 'slideTop' | 'slideLeft' | 'slideRight' | null,
    display: 'onLoad', // (string) Display options, default 'onLoad'. 'onLoad' | 'onScrollDown' | 'onScrollUp'
    radius: '0', // (string) Banner radius with units
    delay: 0, // (number) defines how much time to wait until the element shows up
    shadow: true, // (boolean) If true applies soft shadow, true | false
    useSession: true, // (boolean) If true, after closed, Banner is not shown upon page reaload. Default: true
    zindex: 999999 // (number) Sets the z-index of the element
}

const smartBanner = new SmartBanner(options);

```

## Methods

```javascript
deviceData.os // returns current os "android" | "ios" | "windows" | "desktop"
deviceData.isCanvas // returns true or false
deviceData.isMobile // returns true or false
```


## Development

- `npm run build` produces a production version into /dist folder
- `npm run dev` runs dev version and starts a dev server


## Testing the smart app banner

You will definitely want to test the smart app banners once you deploy them to your website, to make sure that everything works and looks as you want.

Running these tests on real mobile devices can get overwhelming, so we recommend that you run your tests on your desktop browser.

To do this, you will need to emulate a mobile device by adjusting your [browser’s user agent](https://developer.mozilla.org/en-US/docs/Glossary/User_agent). We recommend using the following Chrome extension to do this: [User Agent Switcher and Manager](https://chrome.google.com/webstore/detail/user-agent-switcher-and-m/bhchdcejhohfmigjafbampogmaanbfkg)

Once you have installed the extension, set it up as follows:

### **Step 1**

Select “Chrome” as the browser and “Android” as the platform if you want to test the Android version of the banner, or “Safari” and “iOS” in case you want to test the iOS version:

![annotely_image (61).png](https://mobiloud.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3c66d89a-b74e-441a-a15f-197d08f78807%2Fannotely_image_(61).png?table=block&id=7b5f225a-60e2-4001-bcdb-e4627b300be4&spaceId=f1cb51a8-e748-4832-9335-2c96a2e81d09&width=1230&userId=&cache=v2)

### **Step 2**

Select one of the options that will appear, any will work:

![annotely_image (62).png](https://mobiloud.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdec5d36c-69ec-40f5-aaf9-d4cc54e1e972%2Fannotely_image_(62).png?table=block&id=dd116c73-51a6-449f-b34c-03358baadb92&spaceId=f1cb51a8-e748-4832-9335-2c96a2e81d09&width=1230&userId=&cache=v2)

### **Step 3**

Click “Apply” to make sure the user agent is properly set up on your browser:

![annotely_image (63).png](https://mobiloud.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcb126a7c-e078-4250-889c-83653ce496dd%2Fannotely_image_(63).png?table=block&id=eae2261a-b36c-43b3-b151-2c02fc4ac39a&spaceId=f1cb51a8-e748-4832-9335-2c96a2e81d09&width=1230&userId=&cache=v2)

### Step 4

You can now press “F5” while viewing your website to refresh the browser window with the updated user agent.

### Reset

If you want to revert the changes to the user agent, as some websites might start behaving differently after doing so, you can click the “Reset” button:

![annotely_image (64).png](https://mobiloud.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8af461b2-d9a7-43bf-9d0a-bec281b98347%2Fannotely_image_(64).png?table=block&id=9e9c3806-30d7-495e-820c-bfca7d0e8331&spaceId=f1cb51a8-e748-4832-9335-2c96a2e81d09&width=1230&userId=&cache=v2)

## License

MIT License

Copyright (c) MobiLoud

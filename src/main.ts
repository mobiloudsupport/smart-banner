import {SmartBanner, deviceData,  IS_BROWSER } from './smartBanner';
export {SmartBanner, deviceData};
declare global {
  interface Window {
    SmartBanner: typeof SmartBanner;
    deviceData: typeof deviceData
  }
}
/* eslint-disable */
if (IS_BROWSER) {
  (function (window) {
    window.SmartBanner = SmartBanner;
    window.deviceData = deviceData
  })(window);
}
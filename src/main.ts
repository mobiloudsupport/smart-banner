import {SmartBanner, deviceData,  IS_BROWSER } from './smartBanner';
export default SmartBanner;
declare global {
  interface Window {
    SmartBanner: typeof SmartBanner;
  }
}
/* eslint-disable */
if (IS_BROWSER) {
  (function (window) {
    window.SmartBanner = SmartBanner;
  })(window);
}
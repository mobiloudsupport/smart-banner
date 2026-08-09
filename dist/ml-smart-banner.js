var v = Object.defineProperty;
var N = (t, e, n) => e in t ? v(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var r = (t, e, n) => (N(t, typeof e != "symbol" ? e + "" : e, n), n);
const b = typeof window < "u", u = {
  BANNER_CLOSED: new CustomEvent("BANNER_CLOSED", { bubbles: !0 }),
  BANNER_MOUNTED: new CustomEvent("BANNER_MOUNTED"),
  BANNER_UNMOUNTED: new CustomEvent("BANNER_UNMOUNTED"),
  BANNER_LINK_CLICKED: new CustomEvent("BANNER_LINK_CLICKED", { bubbles: !0 }),
  APPLE_NATIVE_BANNER_ACTIVE: new CustomEvent("APPLE_NATIVE_BANNER_ACTIVE")
};
function y() {
  var t = navigator.userAgent.toLowerCase() || navigator.vendor.toLowerCase() || window.opera;
  return /windows phone/i.test(t) ? "windows" : /android/i.test(t) ? "android" : /ipad|iphone|ipod/.test(t) && !window.MSStream ? "ios" : "desktop";
}
const _ = y(), A = !!navigator.userAgent.toLowerCase().match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i), L = navigator.userAgent.toLowerCase().includes("canvas");
function B() {
  const t = navigator.userAgent;
  return /CriOS|Chrome/i.test(t) && !/EdgiOS/i.test(t) ? "chrome" : /FxiOS|Firefox/i.test(t) ? "firefox" : /Safari/i.test(t) && !/CriOS|FxiOS|OPiOS|EdgiOS|DuckDuckGo|Brave|Chrome|Firefox/i.test(t) ? "safari" : "other";
}
function C() {
  const t = navigator.userAgent, e = /iPhone|iPad|iPod/i.test(t), n = /Safari/i.test(t), i = !/CriOS|FxiOS|OPiOS|EdgiOS|DuckDuckGo|Brave|Chrome|Firefox/i.test(t);
  return e && n && i;
}
const T = B(), D = C();
class k {
  constructor(e) {
    r(this, "button");
    r(this, "display", "onLoad");
    r(this, "delay");
    r(this, "banner");
    r(this, "options");
    r(this, "heightStyleElement");
    r(this, "resizeListenerAttached", !1);
    r(this, "isCanvas", navigator.userAgent.toLowerCase().includes("canvas"));
    r(this, "os", y());
    r(this, "isMobile", navigator.userAgent.toLowerCase().match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i));
    r(this, "browser", B());
    r(this, "isIosSafari", C());
    r(this, "useSession");
    if (!b)
      return;
    const n = this;
    e = Object.assign({}, {
      fontFamily: '"Source Sans Pro", "Arial", sans-serif',
      // Font family for banner texts, defaults to system safe fonts
      fallbackFontFamily: "sans-serif",
      // Font family for fallback icon, safe options are serif and sans-serif
      appName: "ML",
      // Initials for fallback icon.  Reccommended 2 characters. Fallback Image uses button text and bg color
      textColor: "#222",
      // Banner texts color (any color property value)
      headingColor: "#222",
      // Heading color
      buttonColor: "#222",
      // Button color (any background property value)
      buttonText: "Download",
      // Button text
      buttonTextColor: "#fff",
      // Button Text Color (any color property value)
      iconUrl: "",
      // Icon url, defaults to avatar with appName
      textHeading: "Download now!",
      // Heading Text
      textDescription: "Try it now, download today",
      // Description text
      bannerColor: "#fff",
      // Banner BG color
      linkIos: "https://itunes.apple.com/",
      // Link for iOS 
      linkAndroid: "https://play.google.com/",
      // Link for Android
      animation: "fadeIn",
      // Banner animation, default 'fadeIn'. 'fadeIn' | 'scaleUp' | 'slideBottom' | 'slideTop' | 'slideLeft' | 'slideRight' | null,
      display: "onLoad",
      // Display options, default 'onLoad'. 'onLoad' | 'onScrollDown' | 'onScrollUp'
      radius: "0",
      // Banner radius with units
      delay: 0,
      // defines how much time to wait until the element shows up
      shadow: !0,
      // If true applies soft shadow, true | false
      useSession: !0,
      zindex: 999999,
      sessionExpire: 1440
    }, e);
    const p = `
    
    .ml-smartBanner {
      display:none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: ${e.zindex};
      background-color: ${e.bannerColor};
      box-shadow: ${e.shadow ? "0 0 4px 1px #00000014" : "none"} ;
      transition: all 0.3ms ease-in-out;
      font-family: ${e.fontFamily};
      animation: ${e.animation + " 0.5s both"};
      font-size: 14px;
      border-radius: ${e.radius},
      color: ${e.textColor}
    }
    .ml-smartBanner__icon {
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 5px
    }
    .ml-smartBanner__wrapper {
      display: flex;
      align-items: center;
      padding: 0.5em 1em;
      gap: 15px;
      justify-content: center !important
    }
    
    .ml-smartBanner__description {
      margin: 0;  
      font-size: 14px
    }

    .ml-smartBanner__title {
      margin: 0;
      font-weight: bold;
      color: ${e.headingColor};
      font-size: 14px
    }
  
    .ml-smartBanner__button {
      background-color: ${e.buttonColor};
      padding: 0.4em 0.8em;
      border-radius: 5px;
      color: ${e.buttonTextColor};
      font-size: 14px;
      margin-left: auto;
      text-decoration: none;
      border-radius: 100px
    }
    
    .ml-smartBanner__closebutton {
      font-size: 25px;
      font-weight: revert;
      cursor: pointer;
      line-height: 30px;
      color: #333;
    }
    
    .ml-smartBanner-toggle--visible{
      display: block;
    }
      
    @keyframes fadeIn {
      0% {
          opacity: 0;
      }
      100% {
          opacity: 1;
       }
  }

  @keyframes scaleUp {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes slideBottom {
    0% {
      transform: translateY(1000px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes slideTop {
    0% {
      transform: translateY(-1000px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes slideLeft {
    0% {
      transform: translateX(-1000px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slideRight {
    0% {
      transform: translateX(1000px);
    }
    100% {
      transform: translateX(0);
    }
  }
      /* CHECK MEDIA CLASSES */
      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        .smartBanner-toggle {display: none !important}
      }

      @supports (-ms-ime-align:auto), (-ms-accelerator:true) {
        .smartBanner-toggle {display: none !important}
      }
    `;
    function h(a, l = "white", s = "black") {
      const o = document.createElement("canvas"), d = o.getContext("2d");
      return o.width = 200, o.height = 200, d.fillStyle = s, d.fillRect(0, 0, o.width, o.height), d.font = `bold 100px ${e.fallbackFontFamily}`, d.fillStyle = l, d.textAlign = "center", d.textBaseline = "middle", d.fillText(a, o.width / 2, o.height / 2), o.toDataURL("image/png");
    }
    function w(a) {
      const l = document.createElement("div");
      l.className = "ml-smartBanner";
      const s = document.createElement("div");
      s.className = "ml-smartBanner__wrapper";
      const o = document.createElement("img");
      o.className = "ml-smartBanner__icon", o.src = a.iconUrl, o.onerror = function() {
        this.src = h(a.appName, a.buttonTextColor, a.buttonColor);
      };
      const d = document.createElement("div");
      d.className = "ml-smartBanner__content";
      const f = document.createElement("h4");
      f.className = "ml-smartBanner__title", f.innerHTML = a.textHeading, d.appendChild(f);
      const E = document.createElement("p");
      E.className = "ml-smartBanner__description", E.innerHTML = a.textDescription, d.appendChild(E);
      const m = document.createElement("a");
      m.id = "ml-smartBanner__button", m.className = "ml-smartBanner__button", m.target = "_blank", m.href = n.os === "android" ? a.linkAndroid : a.linkIos, m.textContent = a.buttonText;
      const c = document.createElement("span");
      return c.id = "ml-smartBanner__closebutton", c.className = "ml-smartBanner__closebutton", c.textContent = "×", m.onclick = function() {
        m.dispatchEvent(u.BANNER_LINK_CLICKED);
      }, c.addEventListener("click", () => {
        if (c.dispatchEvent(u.BANNER_CLOSED), n.unmount(), a.useSession) {
          const S = (/* @__PURE__ */ new Date()).getTime(), x = new Date(S + a.sessionExpire * 60 * 1e3);
          window.localStorage.setItem("widgetClosed", x.toString());
        }
      }), s.appendChild(c), s.appendChild(o), s.appendChild(d), s.appendChild(m), l.appendChild(s), document.documentElement.appendChild(l), l;
    }
    let g = w(e);
    this.addStyle(p), this.display = e.display, this.delay = e.delay, this.banner = g, this.useSession = e.useSession, this.options = e;
  }
  // measures the rendered banner height and pushes body's content down to clear it
  updateBannerHeightStyle() {
    const e = this.banner.getBoundingClientRect().height;
    (!this.heightStyleElement || !this.heightStyleElement.isConnected) && (this.heightStyleElement = document.createElement("style"), this.heightStyleElement.setAttribute("ml-smart-banner-height-style", ""), document.head.appendChild(this.heightStyleElement)), this.heightStyleElement.textContent = `
      :root {
        --ml-smart-banner-height: 0px;
      }
      html:has(.ml-smartBanner.ml-smartBanner-toggle--visible) {
        --ml-smart-banner-height: ${e}px;
      }
      html:has(.ml-smartBanner.ml-smartBanner-toggle--visible) body {
        margin-top: ${e}px;
      }
    `, this.resizeListenerAttached || (this.resizeListenerAttached = !0, window.addEventListener("resize", () => {
      this.banner.classList.contains("ml-smartBanner-toggle--visible") && this.updateBannerHeightStyle();
    }));
  }
  // (1) inserts css in page
  addStyle(e) {
    const n = document.createElement("style");
    n.setAttribute("ml-smart-banner-style", ""), n.textContent = e, document.head.append(n);
  }
  init() {
    var a;
    const e = window.localStorage.getItem("widgetClosed"), n = this.display, i = this.banner, p = this.delay;
    if (this.unmount(), !b) {
      this.unmount();
      return;
    }
    const h = !!document.querySelector('meta[name="apple-itunes-app"]');
    if (this.isIosSafari && h && h) {
      i.remove(), (a = document.querySelector("style[ml-smart-banner-style]")) == null || a.remove(), window.dispatchEvent(u.APPLE_NATIVE_BANNER_ACTIVE);
      return;
    }
    if (window.dispatchEvent(u.BANNER_MOUNTED), i.setAttribute("initiated", ""), e)
      if (console.log("smartBanner hidden by session"), /* @__PURE__ */ new Date() > new Date(e))
        localStorage.removeItem("widgetClosed");
      else
        return;
    const g = () => {
      let l = 0;
      switch (n) {
        case "onLoad":
          i.classList.add("ml-smartBanner-toggle--visible"), this.updateBannerHeightStyle();
          break;
        case "onScrollDown":
          window.addEventListener("scroll", () => {
            let s = window.scrollY || document.documentElement.scrollTop;
            s < l ? i.classList.remove("ml-smartBanner-toggle--visible") : (i.classList.add("ml-smartBanner-toggle--visible"), this.updateBannerHeightStyle()), l = s;
          });
          break;
        case "onScrollUp":
          window.addEventListener("scroll", () => {
            let s = window.scrollY || document.documentElement.scrollTop;
            s > l ? i.classList.remove("ml-smartBanner-toggle--visible") : (i.classList.add("ml-smartBanner-toggle--visible"), this.updateBannerHeightStyle()), l = s;
          });
          break;
        default:
          this.button.classList.add("ml-smartBanner-toggle--visible"), this.updateBannerHeightStyle();
          break;
      }
    };
    setTimeout(() => {
      g();
    }, p);
  }
  unmount() {
    var i;
    let e = document.querySelector(".ml-smartBanner[initiated]"), n = document.querySelector("style[ml-smart-banner-style]");
    e && (window.dispatchEvent(u.BANNER_UNMOUNTED), e == null || e.remove(), n == null || n.remove(), (i = this.heightStyleElement) == null || i.remove());
  }
}
const I = {
  os: _,
  isMobile: A,
  isCanvas: L,
  browser: T,
  isIosSafari: D
};
b && function(t) {
  t.SmartBanner = k, t.deviceData = I;
}(window);
export {
  k as SmartBanner,
  I as deviceData
};

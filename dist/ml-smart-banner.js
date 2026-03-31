var A = Object.defineProperty;
var _ = (t, e, n) => e in t ? A(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var r = (t, e, n) => (_(t, typeof e != "symbol" ? e + "" : e, n), n);
const E = typeof window < "u", u = {
  BANNER_CLOSED: new CustomEvent("BANNER_CLOSED", { bubbles: !0 }),
  BANNER_MOUNTED: new CustomEvent("BANNER_MOUNTED"),
  BANNER_UNMOUNTED: new CustomEvent("BANNER_UNMOUNTED"),
  BANNER_LINK_CLICKED: new CustomEvent("BANNER_LINK_CLICKED", { bubbles: !0 }),
  APPLE_NATIVE_BANNER_ACTIVE: new CustomEvent("APPLE_NATIVE_BANNER_ACTIVE")
};
function C() {
  var t = navigator.userAgent.toLowerCase() || navigator.vendor.toLowerCase() || window.opera;
  return /windows phone/i.test(t) ? "windows" : /android/i.test(t) ? "android" : /ipad|iphone|ipod/.test(t) && !window.MSStream ? "ios" : "desktop";
}
const S = C(), y = !!navigator.userAgent.toLowerCase().match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i), L = navigator.userAgent.toLowerCase().includes("canvas");
function N() {
  const t = navigator.userAgent;
  return /CriOS|Chrome/i.test(t) && !/EdgiOS/i.test(t) ? "chrome" : /FxiOS|Firefox/i.test(t) ? "firefox" : /Safari/i.test(t) && !/CriOS|FxiOS|OPiOS|EdgiOS|DuckDuckGo|Brave|Chrome|Firefox/i.test(t) ? "safari" : "other";
}
function v() {
  const t = navigator.userAgent, e = /iPhone|iPad|iPod/i.test(t), n = /Safari/i.test(t), l = !/CriOS|FxiOS|OPiOS|EdgiOS|DuckDuckGo|Brave|Chrome|Firefox/i.test(t);
  return e && n && l;
}
const I = N(), k = v();
class T {
  constructor(e) {
    r(this, "button");
    r(this, "display", "onLoad");
    r(this, "delay");
    r(this, "banner");
    r(this, "options");
    r(this, "useAppleNativeBanner", !1);
    r(this, "appleAppId", "");
    r(this, "isCanvas", navigator.userAgent.toLowerCase().includes("canvas"));
    r(this, "os", C());
    r(this, "isMobile", navigator.userAgent.toLowerCase().match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i));
    r(this, "browser", N());
    r(this, "isIosSafari", v());
    r(this, "useSession");
    if (!E)
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
      position: "top",
      // Position of the banner, default 'top'. 'top' | 'bottom'
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
      sessionExpire: 1440,
      useAppleNativeBanner: !1,
      appleAppId: "",
      appleAppArgument: ""
    }, e);
    const f = `
    
    .ml-smartBanner {
      display:none;
      position: fixed;
      ${e.position === "bottom" ? "bottom: 0" : "top: 0"};
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
      padding: 1.8em 1.5em;
      gap: 15px
    }
    
    .ml-smartBanner__description {
      margin: 0;  
      font-size: 14px
    }

    .ml-smartBanner__title {
      font-weight: bold; margin: 0 0 5px 0;
      color: ${e.headingColor};
      font-size: 14px
    }
  
    .ml-smartBanner__button {
      background-color: ${e.buttonColor};
      padding: 0.6em 0.8em;
      border-radius: 5px;
      color: ${e.buttonTextColor};
      font-size: 14px;
      margin-left: auto;
      text-decoration: none
    }
    
    .ml-smartBanner__closebutton {
      position: absolute;
      top: 0;
      right: 5px;
      font-size: 30px;
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
    function g(o, d = "white", s = "black") {
      const a = document.createElement("canvas"), i = a.getContext("2d");
      return a.width = 200, a.height = 200, i.fillStyle = s, i.fillRect(0, 0, a.width, a.height), i.font = `bold 100px ${e.fallbackFontFamily}`, i.fillStyle = d, i.textAlign = "center", i.textBaseline = "middle", i.fillText(o, a.width / 2, a.height / 2), a.toDataURL("image/png");
    }
    function p(o) {
      const d = document.createElement("div");
      d.className = "ml-smartBanner";
      const s = document.createElement("div");
      s.className = "ml-smartBanner__wrapper";
      const a = document.createElement("img");
      a.className = "ml-smartBanner__icon", a.src = o.iconUrl, a.onerror = function() {
        this.src = g(o.appName, o.buttonTextColor, o.buttonColor);
      };
      const i = document.createElement("div");
      i.className = "ml-smartBanner__content";
      const b = document.createElement("h4");
      b.className = "ml-smartBanner__title", b.innerHTML = o.textHeading, i.appendChild(b);
      const w = document.createElement("p");
      w.className = "ml-smartBanner__description", w.innerHTML = o.textDescription, i.appendChild(w);
      const c = document.createElement("a");
      c.id = "ml-smartBanner__button", c.className = "ml-smartBanner__button", c.target = "_blank", c.href = n.os === "android" ? o.linkAndroid : o.linkIos, c.textContent = o.buttonText;
      const m = document.createElement("span");
      return m.id = "ml-smartBanner__closebutton", m.className = "ml-smartBanner__closebutton", m.textContent = "×", c.onclick = function() {
        c.dispatchEvent(u.BANNER_LINK_CLICKED);
      }, m.addEventListener("click", () => {
        if (m.dispatchEvent(u.BANNER_CLOSED), n.unmount(), o.useSession) {
          const x = (/* @__PURE__ */ new Date()).getTime(), B = new Date(x + o.sessionExpire * 60 * 1e3);
          window.localStorage.setItem("widgetClosed", B.toString());
        }
      }), s.appendChild(a), s.appendChild(i), s.appendChild(c), s.appendChild(m), d.appendChild(s), document.body.appendChild(d), d;
    }
    let h = p(e);
    this.addStyle(f), this.display = e.display, this.delay = e.delay, this.banner = h, this.useSession = e.useSession, this.options = e, this.useAppleNativeBanner = e.useAppleNativeBanner ?? !1, this.appleAppId = e.appleAppId ?? "";
  }
  // (1) inserts css in page
  addStyle(e) {
    const n = document.createElement("link");
    n.setAttribute("rel", "stylesheet"), n.setAttribute("type", "text/css"), n.setAttribute("href", "data:text/css;charset=UTF-8," + encodeURIComponent(e)), n.setAttribute("ml-smart-banner-style", ""), document.head.append(n);
  }
  init() {
    var d;
    const e = window.localStorage.getItem("widgetClosed"), n = this.display, l = this.banner, f = this.delay, g = this.options, p = !!document.querySelector('meta[name="apple-itunes-app"]'), h = this.isIosSafari && (p || g.useAppleNativeBanner === !0);
    if (this.unmount(), !E) {
      this.unmount();
      return;
    }
    if (h && p) {
      l.remove(), (d = document.querySelector("link[ml-smart-banner-style]")) == null || d.remove(), window.dispatchEvent(u.APPLE_NATIVE_BANNER_ACTIVE);
      return;
    }
    if (window.dispatchEvent(u.BANNER_MOUNTED), l.setAttribute("initiated", ""), e)
      if (console.log("smartBanner hidden by session"), /* @__PURE__ */ new Date() > new Date(e))
        localStorage.removeItem("widgetClosed");
      else
        return;
    const o = () => {
      let s = 0;
      switch (n) {
        case "onLoad":
          l.classList.add("ml-smartBanner-toggle--visible");
          break;
        case "onScrollDown":
          window.addEventListener("scroll", function() {
            let a = window.scrollY || document.documentElement.scrollTop;
            a < s ? l.classList.remove("ml-smartBanner-toggle--visible") : l.classList.add("ml-smartBanner-toggle--visible"), s = a;
          });
          break;
        case "onScrollUp":
          window.addEventListener("scroll", function() {
            let a = window.scrollY || document.documentElement.scrollTop;
            a > s ? l.classList.remove("ml-smartBanner-toggle--visible") : l.classList.add("ml-smartBanner-toggle--visible"), s = a;
          });
          break;
        default:
          this.button.classList.add("ml-smartBanner-toggle--visible");
          break;
      }
    };
    setTimeout(() => {
      o();
    }, f);
  }
  unmount() {
    let e = document.querySelector(".ml-smartBanner[initiated]"), n = document.querySelector("link[ml-smart-banner-style]");
    e && (window.dispatchEvent(u.BANNER_UNMOUNTED), e == null || e.remove(), n == null || n.remove());
  }
}
const D = {
  os: S,
  isMobile: y,
  isCanvas: L,
  browser: I,
  isIosSafari: k
};
E && function(t) {
  t.SmartBanner = T, t.deviceData = D;
}(window);
export {
  T as SmartBanner,
  D as deviceData
};

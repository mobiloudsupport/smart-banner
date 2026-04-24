var _ = Object.defineProperty;
var S = (t, e, n) => e in t ? _(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var l = (t, e, n) => (S(t, typeof e != "symbol" ? e + "" : e, n), n);
const w = typeof window < "u", u = {
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
const y = C(), A = !!navigator.userAgent.toLowerCase().match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i), L = navigator.userAgent.toLowerCase().includes("canvas");
function x() {
  const t = navigator.userAgent;
  return /CriOS|Chrome/i.test(t) && !/EdgiOS/i.test(t) ? "chrome" : /FxiOS|Firefox/i.test(t) ? "firefox" : /Safari/i.test(t) && !/CriOS|FxiOS|OPiOS|EdgiOS|DuckDuckGo|Brave|Chrome|Firefox/i.test(t) ? "safari" : "other";
}
function N() {
  const t = navigator.userAgent, e = /iPhone|iPad|iPod/i.test(t), n = /Safari/i.test(t), d = !/CriOS|FxiOS|OPiOS|EdgiOS|DuckDuckGo|Brave|Chrome|Firefox/i.test(t);
  return e && n && d;
}
const k = x(), T = N();
class D {
  constructor(e) {
    l(this, "button");
    l(this, "display", "onLoad");
    l(this, "delay");
    l(this, "banner");
    l(this, "options");
    l(this, "isCanvas", navigator.userAgent.toLowerCase().includes("canvas"));
    l(this, "os", C());
    l(this, "isMobile", navigator.userAgent.toLowerCase().match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i));
    l(this, "browser", x());
    l(this, "isIosSafari", N());
    l(this, "useSession");
    if (!w)
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
      sessionExpire: 1440
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
    function p(a, s = "white", o = "black") {
      const r = document.createElement("canvas"), i = r.getContext("2d");
      return r.width = 200, r.height = 200, i.fillStyle = o, i.fillRect(0, 0, r.width, r.height), i.font = `bold 100px ${e.fallbackFontFamily}`, i.fillStyle = s, i.textAlign = "center", i.textBaseline = "middle", i.fillText(a, r.width / 2, r.height / 2), r.toDataURL("image/png");
    }
    function E(a) {
      const s = document.createElement("div");
      s.className = "ml-smartBanner";
      const o = document.createElement("div");
      o.className = "ml-smartBanner__wrapper";
      const r = document.createElement("img");
      r.className = "ml-smartBanner__icon", r.src = a.iconUrl, r.onerror = function() {
        this.src = p(a.appName, a.buttonTextColor, a.buttonColor);
      };
      const i = document.createElement("div");
      i.className = "ml-smartBanner__content";
      const h = document.createElement("h4");
      h.className = "ml-smartBanner__title", h.innerHTML = a.textHeading, i.appendChild(h);
      const b = document.createElement("p");
      b.className = "ml-smartBanner__description", b.innerHTML = a.textDescription, i.appendChild(b);
      const c = document.createElement("a");
      c.id = "ml-smartBanner__button", c.className = "ml-smartBanner__button", c.target = "_blank", c.href = n.os === "android" ? a.linkAndroid : a.linkIos, c.textContent = a.buttonText;
      const m = document.createElement("span");
      return m.id = "ml-smartBanner__closebutton", m.className = "ml-smartBanner__closebutton", m.textContent = "×", c.onclick = function() {
        c.dispatchEvent(u.BANNER_LINK_CLICKED);
      }, m.addEventListener("click", () => {
        if (m.dispatchEvent(u.BANNER_CLOSED), n.unmount(), a.useSession) {
          const v = (/* @__PURE__ */ new Date()).getTime(), B = new Date(v + a.sessionExpire * 60 * 1e3);
          window.localStorage.setItem("widgetClosed", B.toString());
        }
      }), o.appendChild(r), o.appendChild(i), o.appendChild(c), o.appendChild(m), s.appendChild(o), document.body.appendChild(s), s;
    }
    let g = E(e);
    this.addStyle(f), this.display = e.display, this.delay = e.delay, this.banner = g, this.useSession = e.useSession, this.options = e;
  }
  // (1) inserts css in page
  addStyle(e) {
    const n = document.createElement("link");
    n.setAttribute("rel", "stylesheet"), n.setAttribute("type", "text/css"), n.setAttribute("href", "data:text/css;charset=UTF-8," + encodeURIComponent(e)), n.setAttribute("ml-smart-banner-style", ""), document.head.append(n);
  }
  init() {
    var a;
    const e = window.localStorage.getItem("widgetClosed"), n = this.display, d = this.banner, f = this.delay;
    if (this.unmount(), !w) {
      this.unmount();
      return;
    }
    const p = !!document.querySelector('meta[name="apple-itunes-app"]');
    if (this.isIosSafari && p && p) {
      d.remove(), (a = document.querySelector("link[ml-smart-banner-style]")) == null || a.remove(), window.dispatchEvent(u.APPLE_NATIVE_BANNER_ACTIVE);
      return;
    }
    if (window.dispatchEvent(u.BANNER_MOUNTED), d.setAttribute("initiated", ""), e)
      if (console.log("smartBanner hidden by session"), /* @__PURE__ */ new Date() > new Date(e))
        localStorage.removeItem("widgetClosed");
      else
        return;
    const g = () => {
      let s = 0;
      switch (n) {
        case "onLoad":
          d.classList.add("ml-smartBanner-toggle--visible");
          break;
        case "onScrollDown":
          window.addEventListener("scroll", function() {
            let o = window.scrollY || document.documentElement.scrollTop;
            o < s ? d.classList.remove("ml-smartBanner-toggle--visible") : d.classList.add("ml-smartBanner-toggle--visible"), s = o;
          });
          break;
        case "onScrollUp":
          window.addEventListener("scroll", function() {
            let o = window.scrollY || document.documentElement.scrollTop;
            o > s ? d.classList.remove("ml-smartBanner-toggle--visible") : d.classList.add("ml-smartBanner-toggle--visible"), s = o;
          });
          break;
        default:
          this.button.classList.add("ml-smartBanner-toggle--visible");
          break;
      }
    };
    setTimeout(() => {
      g();
    }, f);
  }
  unmount() {
    let e = document.querySelector(".ml-smartBanner[initiated]"), n = document.querySelector("link[ml-smart-banner-style]");
    e && (window.dispatchEvent(u.BANNER_UNMOUNTED), e == null || e.remove(), n == null || n.remove());
  }
}
const I = {
  os: y,
  isMobile: A,
  isCanvas: L,
  browser: k,
  isIosSafari: T
};
w && function(t) {
  t.SmartBanner = D, t.deviceData = I;
}(window);
export {
  D as SmartBanner,
  I as deviceData
};

var _ = Object.defineProperty;
var v = (n, e, t) => e in n ? _(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var r = (n, e, t) => (v(n, typeof e != "symbol" ? e + "" : e, t), t);
const E = typeof window < "u", f = {
  BANNER_CLOSED: new CustomEvent("BANNER_CLOSED", { bubbles: !0 }),
  BANNER_MOUNTED: new CustomEvent("BANNER_MOUNTED"),
  BANNER_UNMOUNTED: new CustomEvent("BANNER_UNMOUNTED"),
  BANNER_LINK_CLICKED: new CustomEvent("BANNER_LINK_CLICKED", { bubbles: !0 })
};
function x() {
  var n = navigator.userAgent.toLowerCase() || navigator.vendor.toLowerCase() || window.opera;
  return /windows phone/i.test(n) ? "windows" : /android/i.test(n) ? "android" : /ipad|iphone|ipod/.test(n) && !window.MSStream ? "ios" : "desktop";
}
const y = x(), N = !!navigator.userAgent.toLowerCase().match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i), L = navigator.userAgent.toLowerCase().includes("canvas");
class S {
  constructor(e) {
    r(this, "button");
    r(this, "display", "onLoad");
    r(this, "delay");
    r(this, "banner");
    r(this, "isCanvas", navigator.userAgent.toLowerCase().includes("canvas"));
    r(this, "os", x());
    r(this, "isMobile", navigator.userAgent.toLowerCase().match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i));
    r(this, "useSession");
    if (!E)
      return;
    const t = this;
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
    const g = `
    
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
    function b(a, u = "white", i = "black") {
      const o = document.createElement("canvas"), s = o.getContext("2d");
      return o.width = 200, o.height = 200, s.fillStyle = i, s.fillRect(0, 0, o.width, o.height), s.font = `bold 100px ${e.fallbackFontFamily}`, s.fillStyle = u, s.textAlign = "center", s.textBaseline = "middle", s.fillText(a, o.width / 2, o.height / 2), o.toDataURL("image/png");
    }
    function c(a) {
      const u = document.createElement("div");
      u.className = "ml-smartBanner";
      const i = document.createElement("div");
      i.className = "ml-smartBanner__wrapper";
      const o = document.createElement("img");
      o.className = "ml-smartBanner__icon", o.src = a.iconUrl, o.onerror = function() {
        this.src = b(a.appName, a.buttonTextColor, a.buttonColor);
      };
      const s = document.createElement("div");
      s.className = "ml-smartBanner__content";
      const h = document.createElement("h4");
      h.className = "ml-smartBanner__title", h.innerHTML = a.textHeading, s.appendChild(h);
      const w = document.createElement("p");
      w.className = "ml-smartBanner__description", w.innerHTML = a.textDescription, s.appendChild(w);
      const l = document.createElement("a");
      l.id = "ml-smartBanner__button", l.className = "ml-smartBanner__button", l.target = "_blank", l.href = t.os === "android" ? a.linkAndroid : a.linkIos, l.textContent = a.buttonText;
      const p = document.createElement("span");
      return p.id = "ml-smartBanner__closebutton", p.className = "ml-smartBanner__closebutton", p.textContent = "×", l.onclick = function() {
        l.dispatchEvent(f.BANNER_LINK_CLICKED);
      }, p.addEventListener("click", () => {
        if (p.dispatchEvent(f.BANNER_CLOSED), t.unmount(), a.useSession) {
          const C = (/* @__PURE__ */ new Date()).getTime(), B = new Date(C + a.sessionExpire * 60 * 1e3);
          window.localStorage.setItem("widgetClosed", B.toString());
        }
      }), i.appendChild(o), i.appendChild(s), i.appendChild(l), i.appendChild(p), u.appendChild(i), document.body.appendChild(u), u;
    }
    let m = c(e);
    this.addStyle(g), this.display = e.display, this.delay = e.delay, this.banner = m, this.useSession = e.useSession;
  }
  // (1) inserts css in page
  addStyle(e) {
    const t = document.createElement("link");
    t.setAttribute("rel", "stylesheet"), t.setAttribute("type", "text/css"), t.setAttribute("href", "data:text/css;charset=UTF-8," + encodeURIComponent(e)), t.setAttribute("ml-smart-banner-style", ""), document.head.append(t);
  }
  init() {
    const e = window.localStorage.getItem("widgetClosed"), t = this.display, d = this.banner, g = this.delay;
    if (this.useSession, this.unmount(), window.dispatchEvent(f.BANNER_MOUNTED), d.setAttribute("initiated", ""), e)
      if (console.log("smartBanner hidden by session"), /* @__PURE__ */ new Date() > new Date(e))
        localStorage.removeItem("widgetClosed");
      else
        return;
    if (!E) {
      this.unmount();
      return;
    }
    const b = () => {
      let c = 0;
      switch (t) {
        case "onLoad":
          d.classList.add("ml-smartBanner-toggle--visible");
          break;
        case "onScrollDown":
          window.addEventListener("scroll", function() {
            let m = window.scrollY || document.documentElement.scrollTop;
            m < c ? d.classList.remove("ml-smartBanner-toggle--visible") : d.classList.add("ml-smartBanner-toggle--visible"), c = m;
          });
          break;
        case "onScrollUp":
          window.addEventListener("scroll", function() {
            let m = window.scrollY || document.documentElement.scrollTop;
            m > c ? d.classList.remove("ml-smartBanner-toggle--visible") : d.classList.add("ml-smartBanner-toggle--visible"), c = m;
          });
          break;
        default:
          this.button.classList.add("ml-smartBanner-toggle--visible");
          break;
      }
    };
    setTimeout(() => {
      b();
    }, g);
  }
  unmount() {
    let e = document.querySelector(".ml-smartBanner[initiated]"), t = document.querySelector("link[ml-smart-banner-style]");
    e && (window.dispatchEvent(f.BANNER_UNMOUNTED), e == null || e.remove(), t == null || t.remove());
  }
}
const A = {
  os: y,
  isMobile: N,
  isCanvas: L
};
E && function(n) {
  n.SmartBanner = S, n.deviceData = A;
}(window);
export {
  S as SmartBanner,
  A as deviceData
};

var x = Object.defineProperty;
var N = (a, e, t) => e in a ? x(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var r = (a, e, t) => (N(a, typeof e != "symbol" ? e + "" : e, t), t);
const C = typeof window < "u", p = {
  BANNER_CLOSED: new CustomEvent("BANNER_CLOSED", { bubbles: !0 }),
  BANNER_MOUNTED: new CustomEvent("BANNER_MOUNTED"),
  BANNER_UNMOUNTED: new CustomEvent("BANNER_UNMOUNTED"),
  BANNER_LINK_CLICKED: new CustomEvent("BANNER_LINK_CLICKED", { bubbles: !0 })
};
function E() {
  var a = navigator.userAgent.toLowerCase() || navigator.vendor.toLowerCase() || window.opera;
  return /windows phone/i.test(a) ? "windows" : /android/i.test(a) ? "android" : /ipad|iphone|ipod/.test(a) && !window.MSStream ? "ios" : "desktop";
}
const _ = E(), B = !!navigator.userAgent.toLowerCase().match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i), v = navigator.userAgent.toLowerCase().includes("canvas");
class y {
  constructor(e) {
    r(this, "button");
    r(this, "display", "onLoad");
    r(this, "delay");
    r(this, "banner");
    r(this, "isCanvas", navigator.userAgent.toLowerCase().includes("canvas"));
    r(this, "os", E());
    r(this, "isMobile", navigator.userAgent.toLowerCase().match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i));
    r(this, "useSession");
    if (!C)
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
      zindex: 999999
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
    function b(n, m = "white", i = "black") {
      const o = document.createElement("canvas"), s = o.getContext("2d");
      return o.width = 200, o.height = 200, s.fillStyle = i, s.fillRect(0, 0, o.width, o.height), s.font = `bold 100px ${e.fallbackFontFamily}`, s.fillStyle = m, s.textAlign = "center", s.textBaseline = "middle", s.fillText(n, o.width / 2, o.height / 2), o.toDataURL("image/png");
    }
    function h(n) {
      const m = document.createElement("div");
      m.className = "ml-smartBanner";
      const i = document.createElement("div");
      i.className = "ml-smartBanner__wrapper";
      const o = document.createElement("img");
      o.className = "ml-smartBanner__icon", o.src = n.iconUrl, o.onerror = function() {
        this.src = b(n.appName, n.buttonTextColor, n.buttonColor);
      };
      const s = document.createElement("div");
      s.className = "ml-smartBanner__content";
      const g = document.createElement("h4");
      g.className = "ml-smartBanner__title", g.textContent = n.textHeading, s.appendChild(g);
      const w = document.createElement("p");
      w.className = "ml-smartBanner__description", w.textContent = n.textDescription, s.appendChild(w);
      const l = document.createElement("a");
      l.id = "ml-smartBanner__button", l.className = "ml-smartBanner__button", l.target = "_blank", l.href = t.os === "android" ? n.linkAndroid : n.linkIos, l.textContent = n.buttonText;
      const u = document.createElement("span");
      return u.id = "ml-smartBanner__closebutton", u.className = "ml-smartBanner__closebutton", u.textContent = "×", l.onclick = function() {
        l.dispatchEvent(p.BANNER_LINK_CLICKED);
      }, u.addEventListener("click", () => {
        u.dispatchEvent(p.BANNER_CLOSED), t.unmount(), n.useSession && window.sessionStorage.setItem("bannerClosed", "true");
      }), i.appendChild(o), i.appendChild(s), i.appendChild(l), i.appendChild(u), m.appendChild(i), document.body.appendChild(m), m;
    }
    let c = h(e);
    this.addStyle(f), this.display = e.display, this.delay = e.delay, this.banner = c, this.useSession = e.useSession;
  }
  // (1) inserts css in page
  addStyle(e) {
    const t = document.createElement("link");
    t.setAttribute("rel", "stylesheet"), t.setAttribute("type", "text/css"), t.setAttribute("href", "data:text/css;charset=UTF-8," + encodeURIComponent(e)), t.setAttribute("ml-smart-banner-style", ""), document.head.append(t);
  }
  init() {
    const e = window.sessionStorage.getItem("bannerClosed"), t = this.display, d = this.banner, f = this.delay, b = this.useSession;
    if (this.unmount(), window.dispatchEvent(p.BANNER_MOUNTED), d.setAttribute("initiated", ""), !C || JSON.parse(e) && b) {
      this.unmount();
      return;
    }
    const h = () => {
      let c = 0;
      switch (t) {
        case "onLoad":
          d.classList.add("ml-smartBanner-toggle--visible");
          break;
        case "onScrollDown":
          window.addEventListener("scroll", function() {
            let n = window.scrollY || document.documentElement.scrollTop;
            n < c ? d.classList.remove("ml-smartBanner-toggle--visible") : d.classList.add("ml-smartBanner-toggle--visible"), c = n;
          });
          break;
        case "onScrollUp":
          window.addEventListener("scroll", function() {
            let n = window.scrollY || document.documentElement.scrollTop;
            n > c ? d.classList.remove("ml-smartBanner-toggle--visible") : d.classList.add("ml-smartBanner-toggle--visible"), c = n;
          });
          break;
        default:
          this.button.classList.add("ml-smartBanner-toggle--visible");
          break;
      }
    };
    setTimeout(() => {
      h();
    }, f);
  }
  unmount() {
    let e = document.querySelector(".ml-smartBanner[initiated]"), t = document.querySelector("link[ml-smart-banner-style]");
    e && (window.dispatchEvent(p.BANNER_UNMOUNTED), e == null || e.remove(), t == null || t.remove());
  }
}
const S = {
  os: _,
  isMobile: B,
  isCanvas: v
};
C && function(a) {
  a.SmartBanner = y, a.deviceData = S;
}(window);
export {
  y as SmartBanner,
  S as deviceData
};

var y = Object.defineProperty;
var C = (n, e, t) => e in n ? y(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var i = (n, e, t) => (C(n, typeof e != "symbol" ? e + "" : e, t), t);
const w = typeof window < "u";
function x() {
  var n = navigator.userAgent.toLowerCase() || navigator.vendor.toLowerCase() || window.opera;
  return /windows phone/i.test(n) ? "windows" : /android/i.test(n) ? "android" : /ipad|iphone|ipod/.test(n) && !window.MSStream ? "ios" : "desktop";
}
const v = x(), B = !!navigator.userAgent.toLowerCase().match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i), _ = navigator.userAgent.toLowerCase().includes("canvas");
class k {
  constructor(e) {
    i(this, "button");
    i(this, "display", "onLoad");
    i(this, "delay");
    i(this, "banner");
    i(this, "isCanvas", navigator.userAgent.toLowerCase().includes("canvas"));
    i(this, "os", x());
    i(this, "isMobile", navigator.userAgent.toLowerCase().match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i));
    if (!w)
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
      border-radius: ${e.radius}
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
    
    .ml-smartBanner__description {margin: 0}

    .ml-smartBanner__title {font-weight: bold; margin: 0 0 5px 0}
  
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
    function g(o, d = "white", r = "black") {
      const a = document.createElement("canvas"), s = a.getContext("2d");
      return a.width = 200, a.height = 200, s.fillStyle = r, s.fillRect(0, 0, a.width, a.height), s.font = `bold 100px ${e.fallbackFontFamily}`, s.fillStyle = d, s.textAlign = "center", s.textBaseline = "middle", s.fillText(o, a.width / 2, a.height / 2), a.toDataURL("image/png");
    }
    function m(o) {
      const d = document.createElement("div");
      d.className = "ml-smartBanner";
      const r = document.createElement("div");
      r.className = "ml-smartBanner__wrapper";
      const a = document.createElement("img");
      a.className = "ml-smartBanner__icon", a.src = o.iconUrl, a.onerror = function() {
        this.src = g(o.appName, o.buttonTextColor, o.buttonColor);
      };
      const s = document.createElement("div");
      s.className = "ml-smartBanner__content";
      const b = document.createElement("h4");
      b.className = "ml-smartBanner__title", b.textContent = o.textHeading, s.appendChild(b);
      const h = document.createElement("p");
      h.className = "ml-smartBanner__description", h.textContent = o.textDescription, s.appendChild(h);
      const p = document.createElement("a");
      p.id = "ml-smartBanner__button", p.className = "ml-smartBanner__button", p.target = "_blank", p.href = t.os === "android" ? o.linkAndroid : o.linkIos, p.textContent = o.buttonText;
      const u = document.createElement("span");
      return u.id = "ml-smartBanner__closebutton", u.className = "ml-smartBanner__closebutton", u.textContent = "×", u.addEventListener("click", () => {
        d.style.display = "none", o.useSession && window.sessionStorage.setItem("bannerClosed", "true");
      }), r.appendChild(a), r.appendChild(s), r.appendChild(p), r.appendChild(u), d.appendChild(r), document.body.appendChild(d), d;
    }
    let l = m(e);
    this.addStyle(f), this.display = e.display, this.delay = e.delay, this.banner = l;
  }
  // (1) inserts css in page
  addStyle(e) {
    const t = document.createElement("link");
    t.setAttribute("rel", "stylesheet"), t.setAttribute("type", "text/css"), t.setAttribute("href", "data:text/css;charset=UTF-8," + encodeURIComponent(e)), document.head.appendChild(t);
  }
  init() {
    this.isMobile, this.isCanvas;
    const e = window.sessionStorage.getItem("bannerClosed"), t = this.display, c = this.banner, f = this.delay;
    if (!w || JSON.parse(e))
      return;
    const g = () => {
      let m = 0;
      switch (t) {
        case "onLoad":
          c.classList.add("ml-smartBanner-toggle--visible");
          break;
        case "onScrollDown":
          window.addEventListener("scroll", function() {
            let l = window.scrollY || document.documentElement.scrollTop;
            l < m ? c.classList.remove("ml-smartBanner-toggle--visible") : c.classList.add("ml-smartBanner-toggle--visible"), m = l;
          });
          break;
        case "onScrollUp":
          window.addEventListener("scroll", function() {
            let l = window.scrollY || document.documentElement.scrollTop;
            l > m ? c.classList.remove("ml-smartBanner-toggle--visible") : c.classList.add("ml-smartBanner-toggle--visible"), m = l;
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
}
const S = {
  os: v,
  isMobile: B,
  isCanvas: _
};
w && function(n) {
  n.SmartBanner = k, n.deviceData = S;
}(window);
export {
  k as SmartBanner,
  S as deviceData
};

var w = Object.defineProperty;
var x = (r, t, e) => t in r ? w(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var d = (r, t, e) => (x(r, typeof t != "symbol" ? t + "" : t, e), e);
const b = typeof window < "u";
class B {
  constructor(t) {
    d(this, "button");
    d(this, "display", "onLoad");
    d(this, "delay");
    d(this, "os", this.getMobileOS());
    d(this, "banner");
    d(this, "isCanvas", navigator.userAgent.includes("canvas"));
    if (!b)
      return;
    this.os = this.getMobileOS();
    const e = this;
    t = Object.assign({}, {
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
      position: "bottom",
      // Position of the banner, default 'top'. 'top' | 'bottom'
      animation: "fadeIn",
      // Banner animation, default 'fadeIn'. 'fadeIn' | 'scaleUp' | 'slideBottom' | 'slideTop' | 'slideLeft' | 'slideRight' | null,
      display: "onLoad",
      // Display options, default 'onLoad'. 'onLoad' | 'onScrollDown' | 'onScrollUp'
      radius: "0",
      // Banner radius with units
      delay: 0,
      // defines how much time to wait until the element shows up
      shadow: !0
      // If true applies soft shadow, true | false
    }, t);
    const u = `
      
    .ml-smartBanner {
      display:none;
      position: fixed;
      ${t.position === "bottom" ? "bottom: 0" : "top: 0"};
      left: 0;
      width: 100%;
      z-index: 99999;
      background-color: ${t.bannerColor};
      box-shadow: ${t.shadow ? "0 0 4px 1px #00000014" : "none"} ;
      transition: all 0.3ms ease-in-out;
      font-family: ${t.fontFamily};
      animation: ${t.animation + " 0.5s both"};
      font-size: 14px;
      border-radius: ${t.radius}
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
    
    .ml-smartBanner__title {font-weight: bold}
  
    .ml-smartBanner__button {
      background-color: ${t.buttonColor};
      padding: 0.6em 0.8em;
      border-radius: 5px;
      color: ${t.buttonTextColor};
      font-size: 14px;
      margin-left: auto
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
    function c(o, i = "white", s = "black") {
      const n = document.createElement("canvas"), a = n.getContext("2d");
      return n.width = 200, n.height = 200, a.fillStyle = s, a.fillRect(0, 0, n.width, n.height), a.font = `bold 100px ${t.fallbackFontFamily}`, a.fillStyle = i, a.textAlign = "center", a.textBaseline = "middle", a.fillText(o, n.width / 2, n.height / 2), n.toDataURL("image/png");
    }
    function l(o) {
      const i = document.createElement("div");
      i.className = "ml-smartBanner";
      const s = document.createElement("div");
      s.className = "ml-smartBanner__wrapper";
      const n = document.createElement("img");
      n.className = "ml-smartBanner__icon", n.src = o.iconUrl, n.onerror = function() {
        this.src = c(o.appName, o.buttonTextColor, o.buttonColor);
      };
      const a = document.createElement("div");
      a.className = "ml-smartBanner__content";
      const f = document.createElement("h4");
      f.className = "ml-smartBanner__title", f.textContent = o.textHeading, a.appendChild(f);
      const h = document.createElement("p");
      h.className = "ml-smartBanner__description", h.textContent = "Try it now, download today.", a.appendChild(h);
      const m = document.createElement("a");
      m.id = "ml-smartBanner__button", m.className = "ml-smartBanner__button", m.target = "_blank", m.href = e.os === "android" ? o.linkAndroid : o.linkIos, m.textContent = o.buttonText;
      const p = document.createElement("span");
      return p.id = "ml-smartBanner__closebutton", p.className = "ml-smartBanner__closebutton", p.textContent = "×", p.addEventListener("click", () => {
        i.style.display = "none";
      }), s.appendChild(n), s.appendChild(a), s.appendChild(m), s.appendChild(p), i.appendChild(s), document.body.appendChild(i), i;
    }
    let y = l(t);
    this.addStyle(u), this.display = t.display, this.delay = t.delay, this.os = this.getMobileOS(), this.banner = y;
  }
  // (1) inserts css in page
  addStyle(t) {
    const e = document.createElement("link");
    e.setAttribute("rel", "stylesheet"), e.setAttribute("type", "text/css"), e.setAttribute("href", "data:text/css;charset=UTF-8," + encodeURIComponent(t)), document.head.appendChild(e);
  }
  init() {
    if (!b)
      return;
    const t = this.display, e = this.banner, g = this.delay, u = () => {
      let c = 0;
      switch (t) {
        case "onLoad":
          e.classList.add("ml-smartBanner-toggle--visible");
          break;
        case "onScrollDown":
          window.addEventListener("scroll", function() {
            let l = window.scrollY || document.documentElement.scrollTop;
            l < c ? e.classList.remove("ml-smartBanner-toggle--visible") : e.classList.add("ml-smartBanner-toggle--visible"), c = l;
          });
          break;
        case "onScrollUp":
          window.addEventListener("scroll", function() {
            let l = window.scrollY || document.documentElement.scrollTop;
            l > c ? e.classList.remove("ml-smartBanner-toggle--visible") : e.classList.add("ml-smartBanner-toggle--visible"), c = l;
          });
          break;
        default:
          this.button.classList.add("ml-smartBanner-toggle--visible");
          break;
      }
    };
    setTimeout(() => {
      u();
    }, g);
  }
  getMobileOS() {
    var t = navigator.userAgent || navigator.vendor || window.opera;
    if (/windows phone/i.test(t))
      return "windows";
    if (/android/i.test(t))
      return "android";
    if (/iPad|iPhone|iPod/.test(t) && !window.MSStream)
      return "ios";
  }
}
b && function(r) {
  r.SmartBanner = B;
}(window);
export {
  B as default
};

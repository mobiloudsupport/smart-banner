var x = Object.defineProperty;
var y = (r, e, n) => e in r ? x(r, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[e] = n;
var i = (r, e, n) => (y(r, typeof e != "symbol" ? e + "" : e, n), n);
const h = typeof window < "u";
class B {
  constructor(e) {
    i(this, "button");
    i(this, "display", "onLoad");
    i(this, "delay");
    i(this, "banner");
    i(this, "isCanvas", navigator.userAgent.includes("canvas"));
    i(this, "os", this.getMobileOS());
    i(this, "isMobile", navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i));
    if (!h)
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
      useSession: !0
    }, e);
    const p = `
    
    .ml-smartBanner {
      display:none;
      position: fixed;
      ${e.position === "bottom" ? "bottom: 0" : "top: 0"};
      left: 0;
      width: 100%;
      z-index: 99999;
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
    function d(t, a = "white", l = "black") {
      const o = document.createElement("canvas"), s = o.getContext("2d");
      return o.width = 200, o.height = 200, s.fillStyle = l, s.fillRect(0, 0, o.width, o.height), s.font = `bold 100px ${e.fallbackFontFamily}`, s.fillStyle = a, s.textAlign = "center", s.textBaseline = "middle", s.fillText(t, o.width / 2, o.height / 2), o.toDataURL("image/png");
    }
    function u(t) {
      const a = document.createElement("div");
      a.className = "ml-smartBanner";
      const l = document.createElement("div");
      l.className = "ml-smartBanner__wrapper";
      const o = document.createElement("img");
      o.className = "ml-smartBanner__icon", o.src = t.iconUrl, o.onerror = function() {
        this.src = d(t.appName, t.buttonTextColor, t.buttonColor);
      };
      const s = document.createElement("div");
      s.className = "ml-smartBanner__content";
      const b = document.createElement("h4");
      b.className = "ml-smartBanner__title", b.textContent = t.textHeading, s.appendChild(b);
      const g = document.createElement("p");
      g.className = "ml-smartBanner__description", g.textContent = t.textDescription, s.appendChild(g);
      const c = document.createElement("a");
      c.id = "ml-smartBanner__button", c.className = "ml-smartBanner__button", c.target = "_blank", c.href = n.os === "android" ? t.linkAndroid : t.linkIos, c.textContent = t.buttonText;
      const m = document.createElement("span");
      return m.id = "ml-smartBanner__closebutton", m.className = "ml-smartBanner__closebutton", m.textContent = "×", m.addEventListener("click", () => {
        a.style.display = "none", t.useSession && window.sessionStorage.setItem("bannerClosed", "true");
      }), l.appendChild(o), l.appendChild(s), l.appendChild(c), l.appendChild(m), a.appendChild(l), document.body.appendChild(a), a;
    }
    let f = u(e);
    this.addStyle(p), this.display = e.display, this.delay = e.delay, this.banner = f;
  }
  // (1) inserts css in page
  addStyle(e) {
    const n = document.createElement("link");
    n.setAttribute("rel", "stylesheet"), n.setAttribute("type", "text/css"), n.setAttribute("href", "data:text/css;charset=UTF-8," + encodeURIComponent(e)), document.head.appendChild(n);
  }
  init() {
    const e = this.isMobile, n = this.isCanvas, w = window.sessionStorage.getItem("bannerClosed"), p = this.display, d = this.banner, u = this.delay;
    if (!h || !e || n || JSON.parse(w))
      return;
    const f = () => {
      let t = 0;
      switch (p) {
        case "onLoad":
          d.classList.add("ml-smartBanner-toggle--visible");
          break;
        case "onScrollDown":
          window.addEventListener("scroll", function() {
            let a = window.scrollY || document.documentElement.scrollTop;
            a < t ? d.classList.remove("ml-smartBanner-toggle--visible") : d.classList.add("ml-smartBanner-toggle--visible"), t = a;
          });
          break;
        case "onScrollUp":
          window.addEventListener("scroll", function() {
            let a = window.scrollY || document.documentElement.scrollTop;
            a > t ? d.classList.remove("ml-smartBanner-toggle--visible") : d.classList.add("ml-smartBanner-toggle--visible"), t = a;
          });
          break;
        default:
          this.button.classList.add("ml-smartBanner-toggle--visible");
          break;
      }
    };
    setTimeout(() => {
      f();
    }, u);
  }
  getMobileOS() {
    var e = navigator.userAgent || navigator.vendor || window.opera;
    if (/windows phone/i.test(e))
      return "windows";
    if (/android/i.test(e))
      return "android";
    if (/iPad|iPhone|iPod/.test(e) && !window.MSStream)
      return "ios";
  }
}
h && function(r) {
  r.SmartBanner = B;
}(window);
export {
  B as default
};

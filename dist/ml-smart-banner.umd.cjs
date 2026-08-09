(function(o,a){typeof exports=="object"&&typeof module<"u"?a(exports):typeof define=="function"&&define.amd?define(["exports"],a):(o=typeof globalThis<"u"?globalThis:o||self,a(o["ml-smart-banner"]={}))})(this,function(o){"use strict";var k=Object.defineProperty;var I=(o,a,u)=>a in o?k(o,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):o[a]=u;var i=(o,a,u)=>(I(o,typeof a!="symbol"?a+"":a,u),u);const a=typeof window<"u",u={BANNER_CLOSED:new CustomEvent("BANNER_CLOSED",{bubbles:!0}),BANNER_MOUNTED:new CustomEvent("BANNER_MOUNTED"),BANNER_UNMOUNTED:new CustomEvent("BANNER_UNMOUNTED"),BANNER_LINK_CLICKED:new CustomEvent("BANNER_LINK_CLICKED",{bubbles:!0}),APPLE_NATIVE_BANNER_ACTIVE:new CustomEvent("APPLE_NATIVE_BANNER_ACTIVE")};function y(){var t=navigator.userAgent.toLowerCase()||navigator.vendor.toLowerCase()||window.opera;return/windows phone/i.test(t)?"windows":/android/i.test(t)?"android":/ipad|iphone|ipod/.test(t)&&!window.MSStream?"ios":"desktop"}const N=y(),_=!!navigator.userAgent.toLowerCase().match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i),A=navigator.userAgent.toLowerCase().includes("canvas");function S(){const t=navigator.userAgent;return/CriOS|Chrome/i.test(t)&&!/EdgiOS/i.test(t)?"chrome":/FxiOS|Firefox/i.test(t)?"firefox":/Safari/i.test(t)&&!/CriOS|FxiOS|OPiOS|EdgiOS|DuckDuckGo|Brave|Chrome|Firefox/i.test(t)?"safari":"other"}function B(){const t=navigator.userAgent,e=/iPhone|iPad|iPod/i.test(t),s=/Safari/i.test(t),l=!/CriOS|FxiOS|OPiOS|EdgiOS|DuckDuckGo|Brave|Chrome|Firefox/i.test(t);return e&&s&&l}const L=S(),T=B();class C{constructor(e){i(this,"button");i(this,"display","onLoad");i(this,"delay");i(this,"banner");i(this,"options");i(this,"heightStyleElement");i(this,"resizeListenerAttached",!1);i(this,"isCanvas",navigator.userAgent.toLowerCase().includes("canvas"));i(this,"os",y());i(this,"isMobile",navigator.userAgent.toLowerCase().match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i));i(this,"browser",S());i(this,"isIosSafari",B());i(this,"useSession");if(!a)return;const s=this;e=Object.assign({},{fontFamily:'"Source Sans Pro", "Arial", sans-serif',fallbackFontFamily:"sans-serif",appName:"ML",textColor:"#222",headingColor:"#222",buttonColor:"#222",buttonText:"Download",buttonTextColor:"#fff",iconUrl:"",textHeading:"Download now!",textDescription:"Try it now, download today",bannerColor:"#fff",linkIos:"https://itunes.apple.com/",linkAndroid:"https://play.google.com/",animation:"fadeIn",display:"onLoad",radius:"0",delay:0,shadow:!0,useSession:!0,zindex:999999,sessionExpire:1440},e);const f=`
    
    .ml-smartBanner {
      display:none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: ${e.zindex};
      background-color: ${e.bannerColor};
      box-shadow: ${e.shadow?"0 0 4px 1px #00000014":"none"} ;
      transition: all 0.3ms ease-in-out;
      font-family: ${e.fontFamily};
      animation: ${e.animation+" 0.5s both"};
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
    `;function g(n,c="white",r="black"){const d=document.createElement("canvas"),m=d.getContext("2d");return d.width=200,d.height=200,m.fillStyle=r,m.fillRect(0,0,d.width,d.height),m.font=`bold 100px ${e.fallbackFontFamily}`,m.fillStyle=c,m.textAlign="center",m.textBaseline="middle",m.fillText(n,d.width/2,d.height/2),d.toDataURL("image/png")}function x(n){const c=document.createElement("div");c.className="ml-smartBanner";const r=document.createElement("div");r.className="ml-smartBanner__wrapper";const d=document.createElement("img");d.className="ml-smartBanner__icon",d.src=n.iconUrl,d.onerror=function(){this.src=g(n.appName,n.buttonTextColor,n.buttonColor)};const m=document.createElement("div");m.className="ml-smartBanner__content";const b=document.createElement("h4");b.className="ml-smartBanner__title",b.innerHTML=n.textHeading,m.appendChild(b);const w=document.createElement("p");w.className="ml-smartBanner__description",w.innerHTML=n.textDescription,m.appendChild(w);const h=document.createElement("a");h.id="ml-smartBanner__button",h.className="ml-smartBanner__button",h.target="_blank",h.href=s.os==="android"?n.linkAndroid:n.linkIos,h.textContent=n.buttonText;const p=document.createElement("span");return p.id="ml-smartBanner__closebutton",p.className="ml-smartBanner__closebutton",p.textContent="×",h.onclick=function(){h.dispatchEvent(u.BANNER_LINK_CLICKED)},p.addEventListener("click",()=>{if(p.dispatchEvent(u.BANNER_CLOSED),s.unmount(),n.useSession){const D=new Date().getTime(),O=new Date(D+n.sessionExpire*60*1e3);window.localStorage.setItem("widgetClosed",O.toString())}}),r.appendChild(p),r.appendChild(d),r.appendChild(m),r.appendChild(h),c.appendChild(r),document.documentElement.appendChild(c),c}let E=x(e);this.addStyle(f),this.display=e.display,this.delay=e.delay,this.banner=E,this.useSession=e.useSession,this.options=e}updateBannerHeightStyle(){const e=this.banner.getBoundingClientRect().height;(!this.heightStyleElement||!this.heightStyleElement.isConnected)&&(this.heightStyleElement=document.createElement("style"),this.heightStyleElement.setAttribute("ml-smart-banner-height-style",""),document.head.appendChild(this.heightStyleElement)),this.heightStyleElement.textContent=`
      html:has(.ml-smartBanner.ml-smartBanner-toggle--visible) body {
        margin-top: ${e}px;
      }
    `,this.resizeListenerAttached||(this.resizeListenerAttached=!0,window.addEventListener("resize",()=>{this.banner.classList.contains("ml-smartBanner-toggle--visible")&&this.updateBannerHeightStyle()}))}addStyle(e){const s=document.createElement("style");s.setAttribute("ml-smart-banner-style",""),s.textContent=e,document.head.append(s)}init(){var n;const e=window.localStorage.getItem("widgetClosed"),s=this.display,l=this.banner,f=this.delay;if(this.unmount(),!a){this.unmount();return}const g=!!document.querySelector('meta[name="apple-itunes-app"]');if(this.isIosSafari&&g&&g){l.remove(),(n=document.querySelector("style[ml-smart-banner-style]"))==null||n.remove(),window.dispatchEvent(u.APPLE_NATIVE_BANNER_ACTIVE);return}if(window.dispatchEvent(u.BANNER_MOUNTED),l.setAttribute("initiated",""),e)if(console.log("smartBanner hidden by session"),new Date>new Date(e))localStorage.removeItem("widgetClosed");else return;const E=()=>{let c=0;switch(s){case"onLoad":l.classList.add("ml-smartBanner-toggle--visible"),this.updateBannerHeightStyle();break;case"onScrollDown":window.addEventListener("scroll",()=>{let r=window.scrollY||document.documentElement.scrollTop;r<c?l.classList.remove("ml-smartBanner-toggle--visible"):(l.classList.add("ml-smartBanner-toggle--visible"),this.updateBannerHeightStyle()),c=r});break;case"onScrollUp":window.addEventListener("scroll",()=>{let r=window.scrollY||document.documentElement.scrollTop;r>c?l.classList.remove("ml-smartBanner-toggle--visible"):(l.classList.add("ml-smartBanner-toggle--visible"),this.updateBannerHeightStyle()),c=r});break;default:this.button.classList.add("ml-smartBanner-toggle--visible"),this.updateBannerHeightStyle();break}};setTimeout(()=>{E()},f)}unmount(){var l;let e=document.querySelector(".ml-smartBanner[initiated]"),s=document.querySelector("style[ml-smart-banner-style]");e&&(window.dispatchEvent(u.BANNER_UNMOUNTED),e==null||e.remove(),s==null||s.remove(),(l=this.heightStyleElement)==null||l.remove())}}const v={os:N,isMobile:_,isCanvas:A,browser:L,isIosSafari:T};a&&function(t){t.SmartBanner=C,t.deviceData=v}(window),o.SmartBanner=C,o.deviceData=v,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})});

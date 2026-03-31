(function(l,o){typeof exports=="object"&&typeof module<"u"?o(exports):typeof define=="function"&&define.amd?define(["exports"],o):(l=typeof globalThis<"u"?globalThis:l||self,o(l["ml-smart-banner"]={}))})(this,function(l){"use strict";var D=Object.defineProperty;var O=(l,o,c)=>o in l?D(l,o,{enumerable:!0,configurable:!0,writable:!0,value:c}):l[o]=c;var i=(l,o,c)=>(O(l,typeof o!="symbol"?o+"":o,c),c);const o=typeof window<"u",c={BANNER_CLOSED:new CustomEvent("BANNER_CLOSED",{bubbles:!0}),BANNER_MOUNTED:new CustomEvent("BANNER_MOUNTED"),BANNER_UNMOUNTED:new CustomEvent("BANNER_UNMOUNTED"),BANNER_LINK_CLICKED:new CustomEvent("BANNER_LINK_CLICKED",{bubbles:!0}),APPLE_NATIVE_BANNER_ACTIVE:new CustomEvent("APPLE_NATIVE_BANNER_ACTIVE")};function C(){var n=navigator.userAgent.toLowerCase()||navigator.vendor.toLowerCase()||window.opera;return/windows phone/i.test(n)?"windows":/android/i.test(n)?"android":/ipad|iphone|ipod/.test(n)&&!window.MSStream?"ios":"desktop"}const _=C(),S=!!navigator.userAgent.toLowerCase().match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i),y=navigator.userAgent.toLowerCase().includes("canvas");function N(){const n=navigator.userAgent;return/CriOS|Chrome/i.test(n)&&!/EdgiOS/i.test(n)?"chrome":/FxiOS|Firefox/i.test(n)?"firefox":/Safari/i.test(n)&&!/CriOS|FxiOS|OPiOS|EdgiOS|DuckDuckGo|Brave|Chrome|Firefox/i.test(n)?"safari":"other"}function B(){const n=navigator.userAgent,e=/iPhone|iPad|iPod/i.test(n),a=/Safari/i.test(n),m=!/CriOS|FxiOS|OPiOS|EdgiOS|DuckDuckGo|Brave|Chrome|Firefox/i.test(n);return e&&a&&m}const L=N(),T=B();class x{constructor(e){i(this,"button");i(this,"display","onLoad");i(this,"delay");i(this,"banner");i(this,"options");i(this,"useAppleNativeBanner",!1);i(this,"appleAppId","");i(this,"isCanvas",navigator.userAgent.toLowerCase().includes("canvas"));i(this,"os",C());i(this,"isMobile",navigator.userAgent.toLowerCase().match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i));i(this,"browser",N());i(this,"isIosSafari",B());i(this,"useSession");if(!o)return;const a=this;e=Object.assign({},{fontFamily:'"Source Sans Pro", "Arial", sans-serif',fallbackFontFamily:"sans-serif",appName:"ML",textColor:"#222",headingColor:"#222",buttonColor:"#222",buttonText:"Download",buttonTextColor:"#fff",iconUrl:"",textHeading:"Download now!",textDescription:"Try it now, download today",bannerColor:"#fff",linkIos:"https://itunes.apple.com/",linkAndroid:"https://play.google.com/",position:"top",animation:"fadeIn",display:"onLoad",radius:"0",delay:0,shadow:!0,useSession:!0,zindex:999999,sessionExpire:1440,useAppleNativeBanner:!1,appleAppId:"",appleAppArgument:""},e);const h=`
    
    .ml-smartBanner {
      display:none;
      position: fixed;
      ${e.position==="bottom"?"bottom: 0":"top: 0"};
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
    `;function b(s,u="white",r="black"){const t=document.createElement("canvas"),d=t.getContext("2d");return t.width=200,t.height=200,d.fillStyle=r,d.fillRect(0,0,t.width,t.height),d.font=`bold 100px ${e.fallbackFontFamily}`,d.fillStyle=u,d.textAlign="center",d.textBaseline="middle",d.fillText(s,t.width/2,t.height/2),t.toDataURL("image/png")}function g(s){const u=document.createElement("div");u.className="ml-smartBanner";const r=document.createElement("div");r.className="ml-smartBanner__wrapper";const t=document.createElement("img");t.className="ml-smartBanner__icon",t.src=s.iconUrl,t.onerror=function(){this.src=b(s.appName,s.buttonTextColor,s.buttonColor)};const d=document.createElement("div");d.className="ml-smartBanner__content";const E=document.createElement("h4");E.className="ml-smartBanner__title",E.innerHTML=s.textHeading,d.appendChild(E);const v=document.createElement("p");v.className="ml-smartBanner__description",v.innerHTML=s.textDescription,d.appendChild(v);const p=document.createElement("a");p.id="ml-smartBanner__button",p.className="ml-smartBanner__button",p.target="_blank",p.href=a.os==="android"?s.linkAndroid:s.linkIos,p.textContent=s.buttonText;const f=document.createElement("span");return f.id="ml-smartBanner__closebutton",f.className="ml-smartBanner__closebutton",f.textContent="×",p.onclick=function(){p.dispatchEvent(c.BANNER_LINK_CLICKED)},f.addEventListener("click",()=>{if(f.dispatchEvent(c.BANNER_CLOSED),a.unmount(),s.useSession){const I=new Date().getTime(),k=new Date(I+s.sessionExpire*60*1e3);window.localStorage.setItem("widgetClosed",k.toString())}}),r.appendChild(t),r.appendChild(d),r.appendChild(p),r.appendChild(f),u.appendChild(r),document.body.appendChild(u),u}let w=g(e);this.addStyle(h),this.display=e.display,this.delay=e.delay,this.banner=w,this.useSession=e.useSession,this.options=e,this.useAppleNativeBanner=e.useAppleNativeBanner??!1,this.appleAppId=e.appleAppId??""}addStyle(e){const a=document.createElement("link");a.setAttribute("rel","stylesheet"),a.setAttribute("type","text/css"),a.setAttribute("href","data:text/css;charset=UTF-8,"+encodeURIComponent(e)),a.setAttribute("ml-smart-banner-style",""),document.head.append(a)}init(){var u;const e=window.localStorage.getItem("widgetClosed"),a=this.display,m=this.banner,h=this.delay,b=this.options,g=!!document.querySelector('meta[name="apple-itunes-app"]'),w=this.isIosSafari&&(g||b.useAppleNativeBanner===!0);if(this.unmount(),!o){this.unmount();return}if(w&&g){m.remove(),(u=document.querySelector("link[ml-smart-banner-style]"))==null||u.remove(),window.dispatchEvent(c.APPLE_NATIVE_BANNER_ACTIVE);return}if(window.dispatchEvent(c.BANNER_MOUNTED),m.setAttribute("initiated",""),e)if(console.log("smartBanner hidden by session"),new Date>new Date(e))localStorage.removeItem("widgetClosed");else return;const s=()=>{let r=0;switch(a){case"onLoad":m.classList.add("ml-smartBanner-toggle--visible");break;case"onScrollDown":window.addEventListener("scroll",function(){let t=window.scrollY||document.documentElement.scrollTop;t<r?m.classList.remove("ml-smartBanner-toggle--visible"):m.classList.add("ml-smartBanner-toggle--visible"),r=t});break;case"onScrollUp":window.addEventListener("scroll",function(){let t=window.scrollY||document.documentElement.scrollTop;t>r?m.classList.remove("ml-smartBanner-toggle--visible"):m.classList.add("ml-smartBanner-toggle--visible"),r=t});break;default:this.button.classList.add("ml-smartBanner-toggle--visible");break}};setTimeout(()=>{s()},h)}unmount(){let e=document.querySelector(".ml-smartBanner[initiated]"),a=document.querySelector("link[ml-smart-banner-style]");e&&(window.dispatchEvent(c.BANNER_UNMOUNTED),e==null||e.remove(),a==null||a.remove())}}const A={os:_,isMobile:S,isCanvas:y,browser:L,isIosSafari:T};o&&function(n){n.SmartBanner=x,n.deviceData=A}(window),l.SmartBanner=x,l.deviceData=A,Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});

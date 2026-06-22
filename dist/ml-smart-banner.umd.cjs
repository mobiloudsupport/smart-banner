(function(s,o){typeof exports=="object"&&typeof module<"u"?o(exports):typeof define=="function"&&define.amd?define(["exports"],o):(s=typeof globalThis<"u"?globalThis:s||self,o(s["ml-smart-banner"]={}))})(this,function(s){"use strict";var I=Object.defineProperty;var O=(s,o,m)=>o in s?I(s,o,{enumerable:!0,configurable:!0,writable:!0,value:m}):s[o]=m;var c=(s,o,m)=>(O(s,typeof o!="symbol"?o+"":o,m),m);const o=typeof window<"u",m={BANNER_CLOSED:new CustomEvent("BANNER_CLOSED",{bubbles:!0}),BANNER_MOUNTED:new CustomEvent("BANNER_MOUNTED"),BANNER_UNMOUNTED:new CustomEvent("BANNER_UNMOUNTED"),BANNER_LINK_CLICKED:new CustomEvent("BANNER_LINK_CLICKED",{bubbles:!0}),APPLE_NATIVE_BANNER_ACTIVE:new CustomEvent("APPLE_NATIVE_BANNER_ACTIVE")};function C(){var t=navigator.userAgent.toLowerCase()||navigator.vendor.toLowerCase()||window.opera;return/windows phone/i.test(t)?"windows":/android/i.test(t)?"android":/ipad|iphone|ipod/.test(t)&&!window.MSStream?"ios":"desktop"}const S=C(),y=!!navigator.userAgent.toLowerCase().match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i),A=navigator.userAgent.toLowerCase().includes("canvas");function x(){const t=navigator.userAgent;return/CriOS|Chrome/i.test(t)&&!/EdgiOS/i.test(t)?"chrome":/FxiOS|Firefox/i.test(t)?"firefox":/Safari/i.test(t)&&!/CriOS|FxiOS|OPiOS|EdgiOS|DuckDuckGo|Brave|Chrome|Firefox/i.test(t)?"safari":"other"}function v(){const t=navigator.userAgent,e=/iPhone|iPad|iPod/i.test(t),n=/Safari/i.test(t),u=!/CriOS|FxiOS|OPiOS|EdgiOS|DuckDuckGo|Brave|Chrome|Firefox/i.test(t);return e&&n&&u}const L=x(),T=v();class N{constructor(e){c(this,"button");c(this,"display","onLoad");c(this,"delay");c(this,"banner");c(this,"options");c(this,"isCanvas",navigator.userAgent.toLowerCase().includes("canvas"));c(this,"os",C());c(this,"isMobile",navigator.userAgent.toLowerCase().match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i));c(this,"browser",x());c(this,"isIosSafari",v());c(this,"useSession");if(!o)return;const n=this;e=Object.assign({},{fontFamily:'"Source Sans Pro", "Arial", sans-serif',fallbackFontFamily:"sans-serif",appName:"ML",textColor:"#222",headingColor:"#222",buttonColor:"#222",buttonText:"Download",buttonTextColor:"#fff",iconUrl:"",textHeading:"Download now!",textDescription:"Try it now, download today",bannerColor:"#fff",linkIos:"https://itunes.apple.com/",linkAndroid:"https://play.google.com/",position:"top",animation:"fadeIn",display:"onLoad",radius:"0",delay:0,shadow:!0,useSession:!0,zindex:999999,sessionExpire:1440},e);const h=`
    
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
    `;function g(a,l="white",r="black"){const i=document.createElement("canvas"),d=i.getContext("2d");return i.width=200,i.height=200,d.fillStyle=r,d.fillRect(0,0,i.width,i.height),d.font=`bold 100px ${e.fallbackFontFamily}`,d.fillStyle=l,d.textAlign="center",d.textBaseline="middle",d.fillText(a,i.width/2,i.height/2),i.toDataURL("image/png")}function _(a){const l=document.createElement("div");l.className="ml-smartBanner";const r=document.createElement("div");r.className="ml-smartBanner__wrapper";const i=document.createElement("img");i.className="ml-smartBanner__icon",i.src=a.iconUrl,i.onerror=function(){this.src=g(a.appName,a.buttonTextColor,a.buttonColor)};const d=document.createElement("div");d.className="ml-smartBanner__content";const w=document.createElement("h4");w.className="ml-smartBanner__title",w.innerHTML=a.textHeading,d.appendChild(w);const E=document.createElement("p");E.className="ml-smartBanner__description",E.innerHTML=a.textDescription,d.appendChild(E);const p=document.createElement("a");p.id="ml-smartBanner__button",p.className="ml-smartBanner__button",p.target="_blank",p.href=n.os==="android"?a.linkAndroid:a.linkIos,p.textContent=a.buttonText;const f=document.createElement("span");return f.id="ml-smartBanner__closebutton",f.className="ml-smartBanner__closebutton",f.textContent="×",p.onclick=function(){p.dispatchEvent(m.BANNER_LINK_CLICKED)},f.addEventListener("click",()=>{if(f.dispatchEvent(m.BANNER_CLOSED),n.unmount(),a.useSession){const k=new Date().getTime(),D=new Date(k+a.sessionExpire*60*1e3);window.localStorage.setItem("widgetClosed",D.toString())}}),r.appendChild(i),r.appendChild(d),r.appendChild(p),r.appendChild(f),l.appendChild(r),document.body.appendChild(l),l}let b=_(e);this.addStyle(h),this.display=e.display,this.delay=e.delay,this.banner=b,this.useSession=e.useSession,this.options=e}addStyle(e){const n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href","data:text/css;charset=UTF-8,"+encodeURIComponent(e)),n.setAttribute("ml-smart-banner-style",""),document.head.append(n)}init(){var a;const e=window.localStorage.getItem("widgetClosed"),n=this.display,u=this.banner,h=this.delay;if(this.unmount(),!o){this.unmount();return}const g=!!document.querySelector('meta[name="apple-itunes-app"]');if(this.isIosSafari&&g&&g){u.remove(),(a=document.querySelector("link[ml-smart-banner-style]"))==null||a.remove(),window.dispatchEvent(m.APPLE_NATIVE_BANNER_ACTIVE);return}if(window.dispatchEvent(m.BANNER_MOUNTED),u.setAttribute("initiated",""),e)if(console.log("smartBanner hidden by session"),new Date>new Date(e))localStorage.removeItem("widgetClosed");else return;const b=()=>{let l=0;switch(n){case"onLoad":u.classList.add("ml-smartBanner-toggle--visible");break;case"onScrollDown":window.addEventListener("scroll",function(){let r=window.scrollY||document.documentElement.scrollTop;r<l?u.classList.remove("ml-smartBanner-toggle--visible"):u.classList.add("ml-smartBanner-toggle--visible"),l=r});break;case"onScrollUp":window.addEventListener("scroll",function(){let r=window.scrollY||document.documentElement.scrollTop;r>l?u.classList.remove("ml-smartBanner-toggle--visible"):u.classList.add("ml-smartBanner-toggle--visible"),l=r});break;default:this.button.classList.add("ml-smartBanner-toggle--visible");break}};setTimeout(()=>{b()},h)}unmount(){let e=document.querySelector(".ml-smartBanner[initiated]"),n=document.querySelector("link[ml-smart-banner-style]");e&&(window.dispatchEvent(m.BANNER_UNMOUNTED),e==null||e.remove(),n==null||n.remove())}}const B={os:S,isMobile:y,isCanvas:A,browser:L,isIosSafari:T};o&&function(t){t.SmartBanner=N,t.deviceData=B}(window),s.SmartBanner=N,s.deviceData=B,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})});

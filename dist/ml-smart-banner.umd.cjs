(function(o,n){typeof exports=="object"&&typeof module<"u"?n(exports):typeof define=="function"&&define.amd?define(["exports"],n):(o=typeof globalThis<"u"?globalThis:o||self,n(o["ml-smart-banner"]={}))})(this,function(o){"use strict";var S=Object.defineProperty;var L=(o,n,i)=>n in o?S(o,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[n]=i;var l=(o,n,i)=>(L(o,typeof n!="symbol"?n+"":n,i),i);const n=typeof window<"u",i={BANNER_CLOSED:new CustomEvent("BANNER_CLOSED",{bubbles:!0}),BANNER_MOUNTED:new CustomEvent("BANNER_MOUNTED"),BANNER_UNMOUNTED:new CustomEvent("BANNER_UNMOUNTED"),BANNER_LINK_CLICKED:new CustomEvent("BANNER_LINK_CLICKED",{bubbles:!0})};function y(){var m=navigator.userAgent.toLowerCase()||navigator.vendor.toLowerCase()||window.opera;return/windows phone/i.test(m)?"windows":/android/i.test(m)?"android":/ipad|iphone|ipod/.test(m)&&!window.MSStream?"ios":"desktop"}const B=y(),N=!!navigator.userAgent.toLowerCase().match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i),_=navigator.userAgent.toLowerCase().includes("canvas");class x{constructor(e){l(this,"button");l(this,"display","onLoad");l(this,"delay");l(this,"banner");l(this,"isCanvas",navigator.userAgent.toLowerCase().includes("canvas"));l(this,"os",y());l(this,"isMobile",navigator.userAgent.toLowerCase().match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i));l(this,"useSession");if(!n)return;const a=this;e=Object.assign({},{fontFamily:'"Source Sans Pro", "Arial", sans-serif',fallbackFontFamily:"sans-serif",appName:"ML",textColor:"#222",headingColor:"#222",buttonColor:"#222",buttonText:"Download",buttonTextColor:"#fff",iconUrl:"",textHeading:"Download now!",textDescription:"Try it now, download today",bannerColor:"#fff",linkIos:"https://itunes.apple.com/",linkAndroid:"https://play.google.com/",position:"top",animation:"fadeIn",display:"onLoad",radius:"0",delay:0,shadow:!0,useSession:!0,zindex:999999},e);const h=`
    
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
    `;function g(t,f="white",d="black"){const s=document.createElement("canvas"),r=s.getContext("2d");return s.width=200,s.height=200,r.fillStyle=d,r.fillRect(0,0,s.width,s.height),r.font=`bold 100px ${e.fallbackFontFamily}`,r.fillStyle=f,r.textAlign="center",r.textBaseline="middle",r.fillText(t,s.width/2,s.height/2),s.toDataURL("image/png")}function w(t){const f=document.createElement("div");f.className="ml-smartBanner";const d=document.createElement("div");d.className="ml-smartBanner__wrapper";const s=document.createElement("img");s.className="ml-smartBanner__icon",s.src=t.iconUrl,s.onerror=function(){this.src=g(t.appName,t.buttonTextColor,t.buttonColor)};const r=document.createElement("div");r.className="ml-smartBanner__content";const E=document.createElement("h4");E.className="ml-smartBanner__title",E.innerHTML=t.textHeading,r.appendChild(E);const C=document.createElement("p");C.className="ml-smartBanner__description",C.innerHTML=t.textDescription,r.appendChild(C);const c=document.createElement("a");c.id="ml-smartBanner__button",c.className="ml-smartBanner__button",c.target="_blank",c.href=a.os==="android"?t.linkAndroid:t.linkIos,c.textContent=t.buttonText;const b=document.createElement("span");return b.id="ml-smartBanner__closebutton",b.className="ml-smartBanner__closebutton",b.textContent="×",c.onclick=function(){c.dispatchEvent(i.BANNER_LINK_CLICKED)},b.addEventListener("click",()=>{b.dispatchEvent(i.BANNER_CLOSED),a.unmount(),t.useSession&&window.sessionStorage.setItem("bannerClosed","true")}),d.appendChild(s),d.appendChild(r),d.appendChild(c),d.appendChild(b),f.appendChild(d),document.body.appendChild(f),f}let p=w(e);this.addStyle(h),this.display=e.display,this.delay=e.delay,this.banner=p,this.useSession=e.useSession}addStyle(e){const a=document.createElement("link");a.setAttribute("rel","stylesheet"),a.setAttribute("type","text/css"),a.setAttribute("href","data:text/css;charset=UTF-8,"+encodeURIComponent(e)),a.setAttribute("ml-smart-banner-style",""),document.head.append(a)}init(){const e=window.sessionStorage.getItem("bannerClosed"),a=this.display,u=this.banner,h=this.delay,g=this.useSession;if(this.unmount(),window.dispatchEvent(i.BANNER_MOUNTED),u.setAttribute("initiated",""),!n||JSON.parse(e)&&g){this.unmount();return}const w=()=>{let p=0;switch(a){case"onLoad":u.classList.add("ml-smartBanner-toggle--visible");break;case"onScrollDown":window.addEventListener("scroll",function(){let t=window.scrollY||document.documentElement.scrollTop;t<p?u.classList.remove("ml-smartBanner-toggle--visible"):u.classList.add("ml-smartBanner-toggle--visible"),p=t});break;case"onScrollUp":window.addEventListener("scroll",function(){let t=window.scrollY||document.documentElement.scrollTop;t>p?u.classList.remove("ml-smartBanner-toggle--visible"):u.classList.add("ml-smartBanner-toggle--visible"),p=t});break;default:this.button.classList.add("ml-smartBanner-toggle--visible");break}};setTimeout(()=>{w()},h)}unmount(){let e=document.querySelector(".ml-smartBanner[initiated]"),a=document.querySelector("link[ml-smart-banner-style]");e&&(window.dispatchEvent(i.BANNER_UNMOUNTED),e==null||e.remove(),a==null||a.remove())}}const v={os:B,isMobile:N,isCanvas:_};n&&function(m){m.SmartBanner=x,m.deviceData=v}(window),o.SmartBanner=x,o.deviceData=v,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})});

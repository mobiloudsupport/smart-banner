(function(a,t){typeof exports=="object"&&typeof module<"u"?t(exports):typeof define=="function"&&define.amd?define(["exports"],t):(a=typeof globalThis<"u"?globalThis:a||self,t(a["ml-smart-banner"]={}))})(this,function(a){"use strict";var A=Object.defineProperty;var T=(a,t,i)=>t in a?A(a,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[t]=i;var l=(a,t,i)=>(T(a,typeof t!="symbol"?t+"":t,i),i);const t=typeof window<"u",i={BANNER_CLOSED:new CustomEvent("BANNER_CLOSED",{bubbles:!0}),BANNER_MOUNTED:new CustomEvent("BANNER_MOUNTED"),BANNER_UNMOUNTED:new CustomEvent("BANNER_UNMOUNTED"),BANNER_LINK_CLICKED:new CustomEvent("BANNER_LINK_CLICKED",{bubbles:!0})};function C(){var m=navigator.userAgent.toLowerCase()||navigator.vendor.toLowerCase()||window.opera;return/windows phone/i.test(m)?"windows":/android/i.test(m)?"android":/ipad|iphone|ipod/.test(m)&&!window.MSStream?"ios":"desktop"}const B=C(),_=!!navigator.userAgent.toLowerCase().match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i),N=navigator.userAgent.toLowerCase().includes("canvas");class y{constructor(e){l(this,"button");l(this,"display","onLoad");l(this,"delay");l(this,"banner");l(this,"isCanvas",navigator.userAgent.toLowerCase().includes("canvas"));l(this,"os",C());l(this,"isMobile",navigator.userAgent.toLowerCase().match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i));l(this,"useSession");if(!t)return;const n=this;e=Object.assign({},{fontFamily:'"Source Sans Pro", "Arial", sans-serif',fallbackFontFamily:"sans-serif",appName:"ML",textColor:"#222",headingColor:"#222",buttonColor:"#222",buttonText:"Download",buttonTextColor:"#fff",iconUrl:"",textHeading:"Download now!",textDescription:"Try it now, download today",bannerColor:"#fff",linkIos:"https://itunes.apple.com/",linkAndroid:"https://play.google.com/",position:"top",animation:"fadeIn",display:"onLoad",radius:"0",delay:0,shadow:!0,useSession:!0,zindex:999999,sessionExpire:1440},e);const h=`
    
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
    `;function w(o,b="white",d="black"){const s=document.createElement("canvas"),r=s.getContext("2d");return s.width=200,s.height=200,r.fillStyle=d,r.fillRect(0,0,s.width,s.height),r.font=`bold 100px ${e.fallbackFontFamily}`,r.fillStyle=b,r.textAlign="center",r.textBaseline="middle",r.fillText(o,s.width/2,s.height/2),s.toDataURL("image/png")}function p(o){const b=document.createElement("div");b.className="ml-smartBanner";const d=document.createElement("div");d.className="ml-smartBanner__wrapper";const s=document.createElement("img");s.className="ml-smartBanner__icon",s.src=o.iconUrl,s.onerror=function(){this.src=w(o.appName,o.buttonTextColor,o.buttonColor)};const r=document.createElement("div");r.className="ml-smartBanner__content";const E=document.createElement("h4");E.className="ml-smartBanner__title",E.innerHTML=o.textHeading,r.appendChild(E);const x=document.createElement("p");x.className="ml-smartBanner__description",x.innerHTML=o.textDescription,r.appendChild(x);const c=document.createElement("a");c.id="ml-smartBanner__button",c.className="ml-smartBanner__button",c.target="_blank",c.href=n.os==="android"?o.linkAndroid:o.linkIos,c.textContent=o.buttonText;const g=document.createElement("span");return g.id="ml-smartBanner__closebutton",g.className="ml-smartBanner__closebutton",g.textContent="×",c.onclick=function(){c.dispatchEvent(i.BANNER_LINK_CLICKED)},g.addEventListener("click",()=>{if(g.dispatchEvent(i.BANNER_CLOSED),n.unmount(),o.useSession){const S=new Date().getTime(),L=new Date(S+o.sessionExpire*60*1e3);window.localStorage.setItem("widgetClosed",L.toString())}}),d.appendChild(s),d.appendChild(r),d.appendChild(c),d.appendChild(g),b.appendChild(d),document.body.appendChild(b),b}let f=p(e);this.addStyle(h),this.display=e.display,this.delay=e.delay,this.banner=f,this.useSession=e.useSession}addStyle(e){const n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href","data:text/css;charset=UTF-8,"+encodeURIComponent(e)),n.setAttribute("ml-smart-banner-style",""),document.head.append(n)}init(){const e=window.localStorage.getItem("widgetClosed"),n=this.display,u=this.banner,h=this.delay;if(this.useSession,this.unmount(),window.dispatchEvent(i.BANNER_MOUNTED),u.setAttribute("initiated",""),e)if(console.log("smartBanner hidden by session"),new Date>new Date(e))localStorage.removeItem("widgetClosed");else return;if(!t){this.unmount();return}const w=()=>{let p=0;switch(n){case"onLoad":u.classList.add("ml-smartBanner-toggle--visible");break;case"onScrollDown":window.addEventListener("scroll",function(){let f=window.scrollY||document.documentElement.scrollTop;f<p?u.classList.remove("ml-smartBanner-toggle--visible"):u.classList.add("ml-smartBanner-toggle--visible"),p=f});break;case"onScrollUp":window.addEventListener("scroll",function(){let f=window.scrollY||document.documentElement.scrollTop;f>p?u.classList.remove("ml-smartBanner-toggle--visible"):u.classList.add("ml-smartBanner-toggle--visible"),p=f});break;default:this.button.classList.add("ml-smartBanner-toggle--visible");break}};setTimeout(()=>{w()},h)}unmount(){let e=document.querySelector(".ml-smartBanner[initiated]"),n=document.querySelector("link[ml-smart-banner-style]");e&&(window.dispatchEvent(i.BANNER_UNMOUNTED),e==null||e.remove(),n==null||n.remove())}}const v={os:B,isMobile:_,isCanvas:N};t&&function(m){m.SmartBanner=y,m.deviceData=v}(window),a.SmartBanner=y,a.deviceData=v,Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});

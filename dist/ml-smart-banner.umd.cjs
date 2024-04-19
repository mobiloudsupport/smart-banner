(function(n,t){typeof exports=="object"&&typeof module<"u"?t(exports):typeof define=="function"&&define.amd?define(["exports"],t):(n=typeof globalThis<"u"?globalThis:n||self,t(n["ml-smart-banner"]={}))})(this,function(n){"use strict";var k=Object.defineProperty;var L=(n,t,r)=>t in n?k(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r;var d=(n,t,r)=>(L(n,typeof t!="symbol"?t+"":t,r),r);const t=typeof window<"u";function r(){var c=navigator.userAgent.toLowerCase()||navigator.vendor.toLowerCase()||window.opera;return/windows phone/i.test(c)?"windows":/android/i.test(c)?"android":/ipad|iphone|ipod/.test(c)&&!window.MSStream?"ios":"desktop"}const B=r(),_=!!navigator.userAgent.toLowerCase().match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i),S=navigator.userAgent.toLowerCase().includes("canvas");class C{constructor(e){d(this,"button");d(this,"display","onLoad");d(this,"delay");d(this,"banner");d(this,"isCanvas",navigator.userAgent.toLowerCase().includes("canvas"));d(this,"os",r());d(this,"isMobile",navigator.userAgent.toLowerCase().match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i));if(!t)return;const i=this;e=Object.assign({},{fontFamily:'"Source Sans Pro", "Arial", sans-serif',fallbackFontFamily:"sans-serif",appName:"ML",textColor:"#222",buttonColor:"#222",buttonText:"Download",buttonTextColor:"#fff",iconUrl:"",textHeading:"Download now!",textDescription:"Try it now, download today",bannerColor:"#fff",linkIos:"https://itunes.apple.com/",linkAndroid:"https://play.google.com/",position:"top",animation:"fadeIn",display:"onLoad",radius:"0",delay:0,shadow:!0,useSession:!0,zindex:999999},e);const h=`
    
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
    `;function w(o,p="white",l="black"){const a=document.createElement("canvas"),s=a.getContext("2d");return a.width=200,a.height=200,s.fillStyle=l,s.fillRect(0,0,a.width,a.height),s.font=`bold 100px ${e.fallbackFontFamily}`,s.fillStyle=p,s.textAlign="center",s.textBaseline="middle",s.fillText(o,a.width/2,a.height/2),a.toDataURL("image/png")}function f(o){const p=document.createElement("div");p.className="ml-smartBanner";const l=document.createElement("div");l.className="ml-smartBanner__wrapper";const a=document.createElement("img");a.className="ml-smartBanner__icon",a.src=o.iconUrl,a.onerror=function(){this.src=w(o.appName,o.buttonTextColor,o.buttonColor)};const s=document.createElement("div");s.className="ml-smartBanner__content";const y=document.createElement("h4");y.className="ml-smartBanner__title",y.textContent=o.textHeading,s.appendChild(y);const x=document.createElement("p");x.className="ml-smartBanner__description",x.textContent=o.textDescription,s.appendChild(x);const b=document.createElement("a");b.id="ml-smartBanner__button",b.className="ml-smartBanner__button",b.target="_blank",b.href=i.os==="android"?o.linkAndroid:o.linkIos,b.textContent=o.buttonText;const g=document.createElement("span");return g.id="ml-smartBanner__closebutton",g.className="ml-smartBanner__closebutton",g.textContent="×",g.addEventListener("click",()=>{p.style.display="none",o.useSession&&window.sessionStorage.setItem("bannerClosed","true")}),l.appendChild(a),l.appendChild(s),l.appendChild(b),l.appendChild(g),p.appendChild(l),document.body.appendChild(p),p}let m=f(e);this.addStyle(h),this.display=e.display,this.delay=e.delay,this.banner=m}addStyle(e){const i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href","data:text/css;charset=UTF-8,"+encodeURIComponent(e)),document.head.appendChild(i)}init(){this.isMobile,this.isCanvas;const e=window.sessionStorage.getItem("bannerClosed"),i=this.display,u=this.banner,h=this.delay;if(!t||JSON.parse(e))return;const w=()=>{let f=0;switch(i){case"onLoad":u.classList.add("ml-smartBanner-toggle--visible");break;case"onScrollDown":window.addEventListener("scroll",function(){let m=window.scrollY||document.documentElement.scrollTop;m<f?u.classList.remove("ml-smartBanner-toggle--visible"):u.classList.add("ml-smartBanner-toggle--visible"),f=m});break;case"onScrollUp":window.addEventListener("scroll",function(){let m=window.scrollY||document.documentElement.scrollTop;m>f?u.classList.remove("ml-smartBanner-toggle--visible"):u.classList.add("ml-smartBanner-toggle--visible"),f=m});break;default:this.button.classList.add("ml-smartBanner-toggle--visible");break}};setTimeout(()=>{w()},h)}}const v={os:B,isMobile:_,isCanvas:S};t&&function(c){c.SmartBanner=C,c.deviceData=v}(window),n.SmartBanner=C,n.deviceData=v,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});

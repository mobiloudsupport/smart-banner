(function(n,t){typeof exports=="object"&&typeof module<"u"?module.exports=t():typeof define=="function"&&define.amd?define(t):(n=typeof globalThis<"u"?globalThis:n||self,n["ml-smart-banner"]=t())})(this,function(){"use strict";var x=Object.defineProperty;var B=(n,t,l)=>t in n?x(n,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[t]=l;var c=(n,t,l)=>(B(n,typeof t!="symbol"?t+"":t,l),l);const n=typeof window<"u";class t{constructor(e){c(this,"button");c(this,"display","onLoad");c(this,"delay");c(this,"os",this.getMobileOS());c(this,"banner");c(this,"isCanvas",navigator.userAgent.includes("canvas"));if(!n)return;this.os=this.getMobileOS();const o=this;e=Object.assign({},{fontFamily:'"Source Sans Pro", "Arial", sans-serif',fallbackFontFamily:"sans-serif",appName:"ML",textColor:"#222",buttonColor:"#222",buttonText:"Download",buttonTextColor:"#fff",iconUrl:"",textHeading:"Download now!",textDescription:"Try it now, download today",bannerColor:"#fff",linkIos:"https://itunes.apple.com/",linkAndroid:"https://play.google.com/",position:"bottom",animation:"fadeIn",display:"onLoad",radius:"0",delay:0,shadow:!0},e);const h=`
      
    .ml-smartBanner {
      display:none;
      position: fixed;
      ${e.position==="bottom"?"bottom: 0":"top: 0"};
      left: 0;
      width: 100%;
      z-index: 99999;
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
    
    .ml-smartBanner__title {font-weight: bold}
  
    .ml-smartBanner__button {
      background-color: ${e.buttonColor};
      padding: 0.6em 0.8em;
      border-radius: 5px;
      color: ${e.buttonTextColor};
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
    `;function p(s,m="white",i="black"){const a=document.createElement("canvas"),r=a.getContext("2d");return a.width=200,a.height=200,r.fillStyle=i,r.fillRect(0,0,a.width,a.height),r.font=`bold 100px ${e.fallbackFontFamily}`,r.fillStyle=m,r.textAlign="center",r.textBaseline="middle",r.fillText(s,a.width/2,a.height/2),a.toDataURL("image/png")}function d(s){const m=document.createElement("div");m.className="ml-smartBanner";const i=document.createElement("div");i.className="ml-smartBanner__wrapper";const a=document.createElement("img");a.className="ml-smartBanner__icon",a.src=s.iconUrl,a.onerror=function(){this.src=p(s.appName,s.buttonTextColor,s.buttonColor)};const r=document.createElement("div");r.className="ml-smartBanner__content";const b=document.createElement("h4");b.className="ml-smartBanner__title",b.textContent=s.textHeading,r.appendChild(b);const g=document.createElement("p");g.className="ml-smartBanner__description",g.textContent="Try it now, download today.",r.appendChild(g);const u=document.createElement("a");u.id="ml-smartBanner__button",u.className="ml-smartBanner__button",u.target="_blank",u.href=o.os==="android"?s.linkAndroid:s.linkIos,u.textContent=s.buttonText;const f=document.createElement("span");return f.id="ml-smartBanner__closebutton",f.className="ml-smartBanner__closebutton",f.textContent="×",f.addEventListener("click",()=>{m.style.display="none"}),i.appendChild(a),i.appendChild(r),i.appendChild(u),i.appendChild(f),m.appendChild(i),document.body.appendChild(m),m}let w=d(e);this.addStyle(h),this.display=e.display,this.delay=e.delay,this.os=this.getMobileOS(),this.banner=w}addStyle(e){const o=document.createElement("link");o.setAttribute("rel","stylesheet"),o.setAttribute("type","text/css"),o.setAttribute("href","data:text/css;charset=UTF-8,"+encodeURIComponent(e)),document.head.appendChild(o)}init(){if(!n)return;const e=this.display,o=this.banner,y=this.delay,h=()=>{let p=0;switch(e){case"onLoad":o.classList.add("ml-smartBanner-toggle--visible");break;case"onScrollDown":window.addEventListener("scroll",function(){let d=window.scrollY||document.documentElement.scrollTop;d<p?o.classList.remove("ml-smartBanner-toggle--visible"):o.classList.add("ml-smartBanner-toggle--visible"),p=d});break;case"onScrollUp":window.addEventListener("scroll",function(){let d=window.scrollY||document.documentElement.scrollTop;d>p?o.classList.remove("ml-smartBanner-toggle--visible"):o.classList.add("ml-smartBanner-toggle--visible"),p=d});break;default:this.button.classList.add("ml-smartBanner-toggle--visible");break}};setTimeout(()=>{h()},y)}getMobileOS(){var e=navigator.userAgent||navigator.vendor||window.opera;if(/windows phone/i.test(e))return"windows";if(/android/i.test(e))return"android";if(/iPad|iPhone|iPod/.test(e)&&!window.MSStream)return"ios"}}return n&&function(l){l.SmartBanner=t}(window),t});

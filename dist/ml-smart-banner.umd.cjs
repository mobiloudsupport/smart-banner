(function(a,n){typeof exports=="object"&&typeof module<"u"?module.exports=n():typeof define=="function"&&define.amd?define(n):(a=typeof globalThis<"u"?globalThis:a||self,a["ml-smart-banner"]=n())})(this,function(){"use strict";var y=Object.defineProperty;var B=(a,n,i)=>n in a?y(a,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[n]=i;var c=(a,n,i)=>(B(a,typeof n!="symbol"?n+"":n,i),i);const a=typeof window<"u";class n{constructor(e){c(this,"button");c(this,"display","onLoad");c(this,"delay");c(this,"banner");c(this,"isCanvas",navigator.userAgent.includes("canvas"));c(this,"os",this.getMobileOS());c(this,"isMobile",navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i));if(!a)return;const l=this;e=Object.assign({},{fontFamily:'"Source Sans Pro", "Arial", sans-serif',fallbackFontFamily:"sans-serif",appName:"ML",textColor:"#222",buttonColor:"#222",buttonText:"Download",buttonTextColor:"#fff",iconUrl:"",textHeading:"Download now!",textDescription:"Try it now, download today",bannerColor:"#fff",linkIos:"https://itunes.apple.com/",linkAndroid:"https://play.google.com/",position:"top",animation:"fadeIn",display:"onLoad",radius:"0",delay:0,shadow:!0,useSession:!0,zindex:999999},e);const f=`
    
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
    `;function m(t,o="white",d="black"){const s=document.createElement("canvas"),r=s.getContext("2d");return s.width=200,s.height=200,r.fillStyle=d,r.fillRect(0,0,s.width,s.height),r.font=`bold 100px ${e.fallbackFontFamily}`,r.fillStyle=o,r.textAlign="center",r.textBaseline="middle",r.fillText(t,s.width/2,s.height/2),s.toDataURL("image/png")}function b(t){const o=document.createElement("div");o.className="ml-smartBanner";const d=document.createElement("div");d.className="ml-smartBanner__wrapper";const s=document.createElement("img");s.className="ml-smartBanner__icon",s.src=t.iconUrl,s.onerror=function(){this.src=m(t.appName,t.buttonTextColor,t.buttonColor)};const r=document.createElement("div");r.className="ml-smartBanner__content";const g=document.createElement("h4");g.className="ml-smartBanner__title",g.textContent=t.textHeading,r.appendChild(g);const x=document.createElement("p");x.className="ml-smartBanner__description",x.textContent=t.textDescription,r.appendChild(x);const p=document.createElement("a");p.id="ml-smartBanner__button",p.className="ml-smartBanner__button",p.target="_blank",p.href=l.os==="android"?t.linkAndroid:t.linkIos,p.textContent=t.buttonText;const u=document.createElement("span");return u.id="ml-smartBanner__closebutton",u.className="ml-smartBanner__closebutton",u.textContent="×",u.addEventListener("click",()=>{o.style.display="none",t.useSession&&window.sessionStorage.setItem("bannerClosed","true")}),d.appendChild(s),d.appendChild(r),d.appendChild(p),d.appendChild(u),o.appendChild(d),document.body.appendChild(o),o}let h=b(e);this.addStyle(f),this.display=e.display,this.delay=e.delay,this.banner=h}addStyle(e){const l=document.createElement("link");l.setAttribute("rel","stylesheet"),l.setAttribute("type","text/css"),l.setAttribute("href","data:text/css;charset=UTF-8,"+encodeURIComponent(e)),document.head.appendChild(l)}init(){const e=this.isMobile,l=this.isCanvas,w=window.sessionStorage.getItem("bannerClosed"),f=this.display,m=this.banner,b=this.delay;if(!a||!e||l||JSON.parse(w))return;const h=()=>{let t=0;switch(f){case"onLoad":m.classList.add("ml-smartBanner-toggle--visible");break;case"onScrollDown":window.addEventListener("scroll",function(){let o=window.scrollY||document.documentElement.scrollTop;o<t?m.classList.remove("ml-smartBanner-toggle--visible"):m.classList.add("ml-smartBanner-toggle--visible"),t=o});break;case"onScrollUp":window.addEventListener("scroll",function(){let o=window.scrollY||document.documentElement.scrollTop;o>t?m.classList.remove("ml-smartBanner-toggle--visible"):m.classList.add("ml-smartBanner-toggle--visible"),t=o});break;default:this.button.classList.add("ml-smartBanner-toggle--visible");break}};setTimeout(()=>{h()},b)}getMobileOS(){var e=navigator.userAgent||navigator.vendor||window.opera;if(/windows phone/i.test(e))return"windows";if(/android/i.test(e))return"android";if(/iPad|iPhone|iPod/.test(e)&&!window.MSStream)return"ios"}}return a&&function(i){i.SmartBanner=n}(window),n});

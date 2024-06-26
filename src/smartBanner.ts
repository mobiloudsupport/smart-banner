
///<reference path="smartBanner.d.ts" />
export const IS_BROWSER = typeof window !== 'undefined';
const eventBannerClosed = new CustomEvent("BANNER_CLOSED");
const bannerEvents = {
  BANNER_CLOSED: new CustomEvent("BANNER_CLOSED", {bubbles: true}),
  BANNER_MOUNTED: new CustomEvent("BANNER_MOUNTED"),
  BANNER_UNMOUNTED: new CustomEvent("BANNER_UNMOUNTED"),
  BANNER_LINK_CLICKED: new CustomEvent("BANNER_LINK_CLICKED",  {bubbles: true})
}
export function getMobileOS(): Platform {
	var userAgent =
	navigator.userAgent.toLowerCase() ||
	navigator.vendor.toLowerCase() ||
	window.opera;
	
	// Windows Phone must come first because its UA also contains "Android"
	if (/windows phone/i.test(userAgent)) {
		return "windows";
	}
	
	if (/android/i.test(userAgent)) {
		return "android";
	}
	
	// iOS detection from: http://stackoverflow.com/a/9039885/177710
	if (/ipad|iphone|ipod/.test(userAgent) && !window.MSStream) {
		return "ios";
	}
	
	return "desktop";
}	

export const os: Platform = getMobileOS();
export const isMobile: boolean | null = navigator.userAgent.toLowerCase().match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i) ? true : false;	
export const isCanvas = navigator.userAgent.toLowerCase().includes("canvas");
export class SmartBanner {

  private button!: HTMLButtonElement;
  private display: SmartBannerOptions['display'] = 'onLoad';
  private delay!: SmartBannerOptions['delay'];
  private banner!: HTMLDivElement;
  public isCanvas = navigator.userAgent.toLowerCase().includes("canvas");
  public os: Platform = getMobileOS();
  public isMobile: RegExpMatchArray | null = navigator.userAgent.toLowerCase().match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i);
  useSession!: boolean;
  
  constructor(options: SmartBannerOptions) {

    if (!IS_BROWSER) {
      return;
    }
    const self = this;

    const defaultOptions: SmartBannerOptions = {
      fontFamily: `"Source Sans Pro", "Arial", sans-serif`, // Font family for banner texts, defaults to system safe fonts
      fallbackFontFamily: 'sans-serif', // Font family for fallback icon, safe options are serif and sans-serif
      appName: 'ML', // Initials for fallback icon.  Reccommended 2 characters. Fallback Image uses button text and bg color
      textColor: '#222', // Banner texts color (any color property value)
      headingColor: '#222', // Heading color
      buttonColor: '#222', // Button color (any background property value)
      buttonText: 'Download', // Button text
      buttonTextColor: '#fff', // Button Text Color (any color property value)
      iconUrl: '', // Icon url, defaults to avatar with appName
      textHeading: 'Download now!', // Heading Text
      textDescription: 'Try it now, download today', // Description text
      bannerColor: '#fff', // Banner BG color
      linkIos: 'https://itunes.apple.com/', // Link for iOS 
      linkAndroid: 'https://play.google.com/', // Link for Android 
      position: 'top', // Position of the banner, default 'top'. 'top' | 'bottom'
      animation: 'fadeIn', // Banner animation, default 'fadeIn'. 'fadeIn' | 'scaleUp' | 'slideBottom' | 'slideTop' | 'slideLeft' | 'slideRight' | null,
      display: 'onLoad', // Display options, default 'onLoad'. 'onLoad' | 'onScrollDown' | 'onScrollUp'
      radius: '0', // Banner radius with units
      delay: 0, // defines how much time to wait until the element shows up
      shadow: true, // If true applies soft shadow, true | false
      useSession: true,
      zindex: 999999
    };

    options = Object.assign({}, defaultOptions, options);

    const css = `
    
    .ml-smartBanner {
      display:none;
      position: fixed;
      ${options.position === 'bottom' ? 'bottom: 0' : 'top: 0'};
      left: 0;
      width: 100%;
      z-index: ${options.zindex};
      background-color: ${options.bannerColor};
      box-shadow: ${options.shadow ? '0 0 4px 1px #00000014' : 'none'} ;
      transition: all 0.3ms ease-in-out;
      font-family: ${options.fontFamily};
      animation: ${options.animation + ' ' + '0.5s both'};
      font-size: 14px;
      border-radius: ${options.radius},
      color: ${options.textColor}
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
      color: ${options.headingColor};
      font-size: 14px
    }
  
    .ml-smartBanner__button {
      background-color: ${options.buttonColor};
      padding: 0.6em 0.8em;
      border-radius: 5px;
      color: ${options.buttonTextColor};
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

    function generateIcon(
      text: string,
      foregroundColor = "white",
      backgroundColor = "black"
    ) {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      canvas.width = 200;
      canvas.height = 200;

      // Draw background
      context!.fillStyle = backgroundColor;
      context!.fillRect(0, 0, canvas.width, canvas.height);

      // Draw text
      context!.font = `bold 100px ${options.fallbackFontFamily}`;
      context!.fillStyle = foregroundColor;
      context!.textAlign = "center";
      context!.textBaseline = "middle";
      context!.fillText(text, canvas.width / 2, canvas.height / 2);

      return canvas.toDataURL("image/png");
    }

    function createAppBanner(options: SmartBannerOptions): HTMLDivElement {
      // Create the main container div
      const appBanner = document.createElement('div');
      appBanner.className = 'ml-smartBanner';

      // Create the wrapper div
      const wrapper = document.createElement('div');
      wrapper.className = 'ml-smartBanner__wrapper';

      // Create the image element
      const icon = document.createElement('img');
      icon.className = 'ml-smartBanner__icon'
      icon.src = options.iconUrl;
      icon.onerror = function () { this.src = generateIcon(options.appName, options.buttonTextColor, options.buttonColor) }
      // Create the content div
      const content = document.createElement('div');
      content.className = 'ml-smartBanner__content';

      // Create and append h4 element
      const heading = document.createElement('h4');
      heading.className = 'ml-smartBanner__title';
      heading.innerHTML = options.textHeading;
      content.appendChild(heading);

      // Create and append p element
      const description = document.createElement('p');
      description.className = 'ml-smartBanner__description';
      description.innerHTML = options.textDescription;
      content.appendChild(description);

      // Create the download button
      const downloadButton = document.createElement('a');
      downloadButton.id = 'ml-smartBanner__button';
      downloadButton.className = 'ml-smartBanner__button';
      downloadButton.target = '_blank';
      downloadButton.href = self.os === 'android' ? options.linkAndroid : options.linkIos;
      downloadButton.textContent = options.buttonText;

      // Create the close button
      const closeButton = document.createElement('span');
      closeButton.id = 'ml-smartBanner__closebutton';
      closeButton.className = 'ml-smartBanner__closebutton';
      closeButton.textContent = '×';
      downloadButton.onclick = function(){ downloadButton.dispatchEvent(bannerEvents.BANNER_LINK_CLICKED) };
      closeButton.addEventListener('click', () => {
        closeButton.dispatchEvent(bannerEvents.BANNER_CLOSED);
        self.unmount();     
        // If session param is true, banner is not shown again on refresh
        if (options.useSession) {
          window.sessionStorage.setItem('bannerClosed', 'true');
        }

      });
      // Append elements to the wrapper
      wrapper.appendChild(icon);
      wrapper.appendChild(content);
      wrapper.appendChild(downloadButton);
      wrapper.appendChild(closeButton);

      // Append the wrapper to the main container
      appBanner.appendChild(wrapper);

      // Append the main container to the body of the document
      document.body.appendChild(appBanner);

      return appBanner
    }

    let banner = createAppBanner(options)
    // with 'this' refers to the fn addStyle below (1)
    this.addStyle(css);

    this.display = options.display;
    this.delay = options.delay;
    this.banner = banner;
    this.useSession = options.useSession;
  }
  // (1) inserts css in page
  addStyle(css: string) {
    const linkElement = document.createElement('link');

    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('type', 'text/css');
    linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(css));
    linkElement.setAttribute('ml-smart-banner-style', "");
    document.head.append(linkElement);
  }

  init() {
    
    
    const bannerClosed = window.sessionStorage.getItem('bannerClosed');
    const display = this.display;
    const banner = this.banner;
    const delay = this.delay;
    const useSession = this.useSession
    this.unmount();
    window.dispatchEvent(bannerEvents.BANNER_MOUNTED);
    banner.setAttribute('initiated', "");
    
    if (!IS_BROWSER || JSON.parse(bannerClosed!) && useSession) {
      this.unmount();
      return;
    }
    
    const displayMode = () => {
      let lastScrollTop = 0;
      switch (display) {
        case 'onLoad':
          banner.classList.add('ml-smartBanner-toggle--visible');
          break;
        case 'onScrollDown':

          window.addEventListener('scroll', function () {
            let scrollTop = window.scrollY || document.documentElement.scrollTop;

            if (scrollTop < lastScrollTop) {
              // Scrolling down, hide the element
              banner.classList.remove('ml-smartBanner-toggle--visible');
            } else {
              // Scrolling up, show the element
              banner.classList.add('ml-smartBanner-toggle--visible');
            }

            lastScrollTop = scrollTop;
          });
          break;
        case 'onScrollUp':

          window.addEventListener('scroll', function () {
            let scrollTop = window.scrollY || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
              // Scrolling down, hide the element
              banner.classList.remove('ml-smartBanner-toggle--visible');
            } else {
              // Scrolling up, show the element
              banner.classList.add('ml-smartBanner-toggle--visible');
            }

            lastScrollTop = scrollTop;
          });
          break;
        default:
          this.button.classList.add('ml-smartBanner-toggle--visible')
          break;
      }
    }
    setTimeout(() => {
      displayMode()
    }, delay)
  }
  unmount() {
    let smartBanner = document.querySelector('.ml-smartBanner[initiated]');
    let smartBannerStyles = document.querySelector('link[ml-smart-banner-style]')

    if(smartBanner){
      window.dispatchEvent(bannerEvents.BANNER_UNMOUNTED);
      smartBanner?.remove()
      smartBannerStyles?.remove()
    }
  }
}


export const deviceData = {
	os: os,
	isMobile: isMobile ,
	isCanvas: isCanvas
}
	
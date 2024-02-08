
export const IS_BROWSER = typeof window !== 'undefined';
type SmartBannerOptions = {
  time?: string;
  textColor?: string;
  fillColor?: string;
  buttonColorPrimary?: string;
  buttonColorLight?: string;
  label?: string ;
  autoMatchOsTheme?: boolean;
  position?: 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right';
  animation?: 'fadeIn' | 'scaleUp' | 'slideBottom' | 'slideTop' | 'slideLeft' | 'slideRight' | null;
  display?: 'onLoad' | 'onScrollDown' | 'onScrollUp';
  hideMode?: 'none'; // not used for now
  scrollHeight?: number; // in px, not used now
  radius?: string; // Any css unit, 50% gives a rounded btn if same height/width
  width?: string;
  padding?: string;
  delay?: number; // defines how much time to wait until the element shows up
  backBehavior?: 'javascript'; // for now, javascript only
  containerSelector?: string | null; // if not null, button is injected into a container, it uses any html selectors '.class' '#id'
  containerOrder?: 'first' | 'last'; // 'inline-first', 'inline-last' | If container selector activated, it places the button before or after other elements
  textAlign?: 'center' | 'start' | 'end';
  shadow?: boolean; // If true applies soft shadow
  replaceElement?: string | null; // if a selector is placed here, this element would be replaced with the back button
};



/*
interface AppBannerOptions {
  imageUrl: string;
  altText: string;
  buttonText: string;
  buttonLink: string;
}

function createAppBanner(options: AppBannerOptions): void {
  // Create the main container div
  const appBanner = document.createElement('div');
  appBanner.className = 'appBanner';

  // Create the wrapper div
  const wrapper = document.createElement('div');
  wrapper.className = 'appBanner-wrapper';

  // Create the image element
  const image = document.createElement('img');
  image.src = options.imageUrl;
  image.alt = options.altText;

  // Create the content div
  const content = document.createElement('div');
  content.className = 'appBanner-content';

  // Create and append h4 element
  const h4 = document.createElement('h4');
  h4.textContent = 'Download now!';
  content.appendChild(h4);

  // Create and append p element
  const p = document.createElement('p');
  p.textContent = 'Try it now, download today.';
  content.appendChild(p);

  // Create the download button
  const downloadButton = document.createElement('a');
  downloadButton.id = 'appBanner-button';
  downloadButton.className = 'appBanner-button';
  downloadButton.target = '_blank';
  downloadButton.href = options.buttonLink;
  downloadButton.textContent = options.buttonText;

  // Create the close button
  const closeButton = document.createElement('span');
  closeButton.id = 'appBanner-closebutton';
  closeButton.className = 'appBanner-closebutton';
  closeButton.textContent = '×';

  // Append elements to the wrapper
  wrapper.appendChild(image);
  wrapper.appendChild(content);
  wrapper.appendChild(downloadButton);
  wrapper.appendChild(closeButton);

  // Append the wrapper to the main container
  appBanner.appendChild(wrapper);

  // Append the main container to the body of the document
  document.body.appendChild(appBanner);
}

// Example usage:
const bannerOptions: AppBannerOptions = {
  imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/e5/6b/2a/e56b2a13-9e28-1c8e-a76f-34b4d73882d7/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1024x1024bb.png',
  altText: 'Image description',
  buttonText: 'Download',
  buttonLink: 'https://www.your-link.com',
};

createAppBanner(bannerOptions);
*/

export default class SmartBanner {
 
  private button!: HTMLButtonElement;
  private display: SmartBannerOptions['display'] = 'onLoad';
  private hideMode: SmartBannerOptions['hideMode'] = 'none';
  private time: SmartBannerOptions['time'] = '0.3s';
  private scrollHeight: SmartBannerOptions['scrollHeight'] = 300;
  private delay!: SmartBannerOptions['delay'] ;
  private backBehavior: SmartBannerOptions['backBehavior'] = 'javascript';
  private containerSelector: SmartBannerOptions['containerSelector'] = '.backBtn';
  private containerOrder: SmartBannerOptions['containerOrder'] = 'first';
  private replaceElement: SmartBannerOptions['replaceElement'] = null;

  
  
  constructor(options: SmartBannerOptions) {
 
    if (!IS_BROWSER) {
      return;
    }
    const defaultOptions:SmartBannerOptions = {
      time: '0.3s',
      textColor: 'white',
      fillColor: 'white',
      buttonColorPrimary: '#000', // bg color
      buttonColorLight: '#fff', //not used, but could be used if darkMode is added
      label: '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>',
      autoMatchOsTheme: true, //not used, but could be used if darkMode is added
      position: 'top-left' , // top-right | top-left | bottom-left | bottom-right
      animation: null, // fadeIn | scaleUp | slideBottom | slideTop | slideleft | slideRight
      display: 'onLoad', // onLoad | onScrollDown | onScrollUp
      hideMode: 'none', // not used for now
      scrollHeight: 300, //in px, not used now
      radius: '5px', // Any css unit, 50% gives a rounded btn if same height/width
      width: '3em',
      padding: '1em',
      delay: 0, // defines how much time to wait until the element shows up
      backBehavior: 'javascript', // for now, javascript only
      containerSelector: '.backBtn', // if not null, button is injected into a container, it uses any html selectors '.class' '#id' 
      containerOrder: 'first', // 'inline-first', 'inline-last' | If container selector activated, it places the button before or after other elements
      textAlign: 'center', // center | start | end 
      shadow: false,// If true applies soft shadow
      replaceElement:  null // if a selector is placed here, this element would be replaced with the back button
    };

    options = Object.assign({}, defaultOptions, options);
    let positionValues = {right: 'unset', left: 'unset', bottom: 'unset', top: 'unset'}

   
      switch (options.position) {
        case 'bottom-right':
          positionValues.right = '32px';
          positionValues.bottom =  '32px';
          break;
        case 'bottom-left':
          positionValues.left = '32px';
          positionValues.bottom =  '32px';
          break;
        case 'top-right':
          positionValues.top = '32px';
          positionValues.right =  '32px';
          break; 
        case 'top-left':
          positionValues.top = '32px';
          positionValues.left =  '32px';
          break; 
        default:
          positionValues.right = '32px';
          positionValues.bottom =  '32px';
      }

    const css = `
      
      /* BTN CLASSES */
      .smartBanner-toggle {
        background: ${options.buttonColorPrimary};
        width: ${options.width};
        aspect-ratio: 1;
        padding: ${options.padding};
        position: ${options.containerSelector == null ? 'fixed' : 'inline-block' };
        border-radius: ${options.radius};
        border:none;
        right: ${positionValues.right};
        bottom: ${positionValues.bottom};
        left: ${positionValues.left};
        top: ${positionValues.top};
        cursor: pointer;
        transition: all 0.5s ease;
        display: none;
        justify-content: ${options.textAlign};
        align-items: center;
        z-index: 999999;
        color: ${options.textColor};
        fill: ${options.fillColor};
        animation: ${options.animation + ' ' + '0.5s both'};
        box-shadow: ${options.shadow ? '0px 3px 15px rgba(0,0,0,0.2);' : 'none'}
        
      }

      .smartBanner-toggle--white {
        background: ${options.buttonColorLight};
      }

      .smartBanner-toggle--inactive {
        display: none;
      }

      .smartBanner-toggle--visible {
        display: inline-flex
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
    
    // keep btn
    const button = document.createElement('button');
    button.innerHTML = options.label || ""; //adds txt

    // with 'this' refers to the fn addStyle below (1)
    this.addStyle(css);

    this.button = button;
    this.display = options.display;
    this.hideMode = options.hideMode;
    this.time = options.time;
    this.scrollHeight = options.scrollHeight;
    this.delay = options.delay;
    this.backBehavior = options.backBehavior;
    this.containerSelector = options.containerSelector;
    this.containerOrder = options.containerOrder;
    this.replaceElement = options.replaceElement;
  }
 // (1) inserts css in page
  addStyle(css: string) {
    const linkElement = document.createElement('link');

    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('type', 'text/css');
    linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(css));
    document.head.appendChild(linkElement);
  }


  init() {
    if (!IS_BROWSER || window.history.length <= 1 || window.location.pathname == '/') {
          return;
    }
    let backBehavior = this.backBehavior;
    const containerSelector = this.containerSelector;
    const containerOrder = this.containerOrder;
    const button = this.button;
    const display = this.display;
    const replaceElement = this.replaceElement  
    if(replaceElement) {
      let element = document.querySelector(replaceElement)
      if(element){
        element.replaceWith(button);
      } else{ console.log('not element to replace')}
    } 
    else {
      if(containerSelector  == null ) {
        document.body.insertBefore(button, document.body.firstChild);
      } else {
        let container: HTMLElement | null = document.querySelector(containerSelector);
        switch (containerOrder) {
          case 'first':
            container ? container.insertBefore(button, container.firstChild) : console.log('Not a container to insert') ;
            break;
            case 'last':
            container ? container.appendChild(button) : console.log('Not a container to insert');
            break;
          default: 
            container ? container.appendChild(button) : console.log('Not a container to insert')
        } 
      }
    }
    const delay = this.delay
    const  displayMode = () => {
      let lastScrollTop = 0;
      switch (display) {
        case 'onLoad':
            this.button.classList.add('SmartBanner-toggle--visible');          
          break;
        case 'onScrollDown':
          
        window.addEventListener('scroll', function() {
          let scrollTop = window.scrollY || document.documentElement.scrollTop;
  
          if (scrollTop < lastScrollTop) {
            // Scrolling down, hide the element
            button.style.display = 'none';
          } else {
            // Scrolling up, show the element
            button.style.display = 'inline-flex';
          }
  
          lastScrollTop = scrollTop;
        });
          break;
        case 'onScrollUp':
          
          window.addEventListener('scroll', function() {
            let scrollTop = window.scrollY || document.documentElement.scrollTop;
    
            if (scrollTop > lastScrollTop) {
              // Scrolling down, hide the element
              button.style.display = 'none';
            } else {
              // Scrolling up, show the element
              button.style.display = 'inline-flex';
            }
    
            lastScrollTop = scrollTop;
          });
          break; 
        default:
          this.button.classList.add('smartBanner-toggle--visible')
          break;
      }
     
    }
    // Triggers displayMode after X MilliSeconds
    setTimeout(() => {
      displayMode()
    }, delay )

    button.classList.add('smartBanner-toggle');
    button.setAttribute('aria-label', 'Go back');

    button.addEventListener('click', () => {

      // HERE GOES THE BACK FUNCTIONS
      if(backBehavior === 'javascript') {  
        if(window.history.length > 1) {
          history.back()
        } // if user for some reason enters site not in homepage, on click go to homepage
        if(window.history.length === 1) {
          window.location.replace(window.location.origin)
        }
    }
    });

    //window.localStorage.setItem('history', history.lenght);
  }

  // PROGRAMATIC GO BACK
  trigger() {
    if (!IS_BROWSER) {
      return;
    }
    const button = this.button;
    history.back();
    //window.localStorage.setItem('darkmode', history.length);
  }
  
}

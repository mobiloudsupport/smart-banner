

interface Window {
      MSStream?: any;
      opera: any
    }

type SmartBannerOptions = {
    appName: string,
    fontFamily: string,
    fallbackFontFamily: 'serif' | 'sans-serif',
    headingColor?: string,
    textColor?: string,
    buttonColor?: string,
    buttonText: string,
    buttonTextColor?: string,
    iconUrl: string,
    textHeading: string ,
    textDescription: string,
    bannerColor?: string,
    linkIos: string,
    linkAndroid: string,
    position?: 'top' | 'bottom',
    animation?: 'fadeIn' | 'scaleUp' | 'slideBottom' | 'slideTop' | 'slideLeft' | 'slideRight' | null,
    display?: 'onLoad' | 'onScrollDown' | 'onScrollUp',
    radius?: string | null, // Any css unit, 50% gives a rounded btn if same height/width
    delay?: number, // defines how much time to wait until the element shows up
    shadow?: boolean, // If true applies soft shadow
    useSession: boolean,
    zindex: number
  };
  
type Platform = "windows" | "android" | "ios" | "unknown" | "desktop";
  

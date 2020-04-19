/**
 * Declare SCSS extension
 */
declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

/**
 * Decalera image extension
 */
declare module '*.png';
declare module '*.jpg';
declare module '*.svg';

/**
 * Declare environment
 */
declare let ELECTRON: string;
declare let WEB_BASE_PATH: string;

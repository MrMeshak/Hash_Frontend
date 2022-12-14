export interface IColorTheme {
  primary: string;
  primaryHover: string;
  secondary: string;
  secondaryHover: string;
  tertiary: string;
  tertiaryHover: string;
  tertiaryVarient: string;
  surface: string;
  background: string;
  input: string;
  headings: string;
  paragraph: string;
  primaryAccent: string;
  secondaryAccent: string;
  tertiaryAccent: string;
  error: string;
  errorHover: string;
  textOnDark: string;
  textOnLight: string;
  textGreyedOut: string;
  seperationLine: string;
}

interface IButtonTheme {
  primary: string;
  primaryHover: string;
  secondary: string;
  secondaryHover: string;
  tertiary: string;
  tertiaryHover: string;
  error: string;
  errorHover: string;
  textOnDark: string;
  textOnTransparent: string;
}

interface IInteractiveTheme {
  default: string;
  hover: string;
  active: string;
  headingText: string;
  headingHighlightText: string;
  activeText: string;
  textOnLight: string;
}

interface IFormTheme {
  primary: string;
  default: string;
  active: string;
  error: string;
  defaultText: string;
}

export interface IDevice {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  tablet: string;
  laptop: string;
  laptopL: string;
  desktop: string;
  desktopL: string;
}

export interface ITheme {
  colors: IColorTheme;
  button: IButtonTheme;
  interactive: IInteractiveTheme;
  form: IFormTheme;
  device: IDevice;
}

export const colortheme: IColorTheme = {
  primary: '#ad1fea',
  primaryHover: '#c75af6',
  secondary: '#4661e6',
  secondaryHover: '#7C91F9',
  tertiary: '#373f68',
  tertiaryHover: '#656EA3',
  tertiaryVarient: '#3a4374',
  surface: '#ffffff',
  background: '#f2f4ff',
  input: '#f7f8fd',
  headings: '#3A4374',
  paragraph: '#647196',
  primaryAccent: '#f49f85',
  secondaryAccent: '#62BCFA',
  tertiaryAccent: '#e84d70',
  error: '#d73737',
  errorHover: '#e98888',
  textOnDark: '#f2f4ff',
  textOnLight: '#647196',
  textGreyedOut: '#979797',
  seperationLine: '#8C92B3'
};

export const buttonTheme: IButtonTheme = {
  primary: colortheme.primary,
  primaryHover: colortheme.primaryHover,
  secondary: colortheme.secondary,
  secondaryHover: colortheme.secondaryHover,
  tertiary: colortheme.tertiary,
  tertiaryHover: colortheme.tertiaryHover,

  error: colortheme.error,
  errorHover: colortheme.errorHover,
  textOnDark: colortheme.textOnDark,
  textOnTransparent: colortheme.paragraph
};

export const interactiveTheme: IInteractiveTheme = {
  default: colortheme.background,
  hover: '#CFD7FF',
  active: colortheme.secondary,
  headingText: colortheme.tertiaryVarient,
  headingHighlightText: colortheme.secondary,
  activeText: colortheme.textOnDark,
  textOnLight: colortheme.textOnLight
};

export const formTheme: IFormTheme = {
  primary: colortheme.primary,
  default: colortheme.input,
  active: colortheme.secondary,
  error: colortheme.error,
  defaultText: colortheme.tertiaryVarient
};

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

export const theme: ITheme = {
  colors: colortheme,
  button: buttonTheme,
  interactive: interactiveTheme,
  form: formTheme,
  device: device
};

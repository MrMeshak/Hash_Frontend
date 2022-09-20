import { ITheme } from "../styles/theme"; // Import type from above file

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {} // extends the global DefaultTheme with our ThemeType.
}

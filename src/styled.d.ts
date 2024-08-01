import 'styled-components';
import { ThemeObject } from './utils/themes';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeObject {}
}

import { ThemeProvider } from 'styled-components';
import { ThemeObject } from '../utils/themes';

type ThemeProps = {
  children: React.ReactNode;
  theme: ThemeObject;
};

export default function Theme({ children, theme }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

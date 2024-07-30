import { ThemeProvider } from 'styled-components';

// Make autocomplete work when used in styled components
export type ThemeObject = typeof darkTheme;

const darkTheme = {
  colours: {
    background: '#27374D',
    primary: '#DDE6ED',
    secondary: '#9DB2BF',
    tertiary: '#526D82',
  },
  fontSizes: {
    small: '0.8rem',
    standard: '1.0rem',
    medium: '1.2rem',
    large: '1.5rem',
    extraLarge: '2rem',
  },
  fonts: {
    primary: '"Ubuntu", sans-serif',
    secondary: '"Poppins", sans-serif',
    tertiary: '"Bebas Neue", sans-serif',
  },
  mobile: '768px',
  tabletMin: '769px',
  tabletMax: '1024px',
};

type ThemeProps = {
  children: React.ReactNode;
};

export default function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
}

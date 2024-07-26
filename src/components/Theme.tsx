import { ThemeProvider } from 'styled-components';

const darkTheme = {
  colours: {
    background: '#0C0C0C',
    primary: '#F2613F',
    secondary: '#9B3922',
    tertiary: '#481E14',
  },
  fontSizes: {
    small: '0.8rem',
    standard: '1.0rem',
    medium: '1.2rem',
    large: '1.5rem',
    extraLarge: '2rem',
  },
  fonts: {
    primary: '',
    secondary: '',
  },
  mobile: '768px',
};

type ThemeProps = {
  children: React.ReactNode;
};

export default function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
}

// Make autocomplete work when used in styled components
export type ThemeObject = typeof darkTheme;

export const darkTheme = {
  type: 'dark',
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
  tablet: '1024px',
};

export const lightThemeCandidate1: ThemeObject = {
  ...darkTheme,
  type: 'light',
  colours: {
    background: '#DEF9C4',
    primary: '#468585',
    secondary: '#50B498',
    tertiary: '#9CDBA6',
  },
};

export const lightThemeCandidate2: ThemeObject = {
  ...darkTheme,
  type: 'light',
  colours: {
    background: '#F8EDED',
    primary: '#173B45',
    secondary: '#B43F3F',
    tertiary: '#FF8225',
  },
};

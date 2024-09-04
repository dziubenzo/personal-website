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
    primary: '"Poppins", sans-serif',
    secondary: '"Bebas Neue", sans-serif',
  },
  mobile: '768px',
  tablet: '1024px',
  boxShadowTile:
    'rgba(131, 127, 160, 0.35) 0px 6px 12px -2px, rgba(176, 173, 197, 0.2) 0px 3px 7px -3px;',
};

export const lightTheme: ThemeObject = {
  ...darkTheme,
  type: 'light',
  colours: {
    background: '#F8EDED',
    primary: '#173B45',
    secondary: '#B43F3F',
    tertiary: '#FF8225',
  },
  boxShadowTile:
    'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;',
};

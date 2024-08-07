import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colours.background};
    color: ${(props) => props.theme.colours.primary};
    font-family: ${(props) => props.theme.fonts.primary};
    font-style: normal;
  }

  *:focus-visible {
    outline: 2px solid ${(props) => props.theme.colours.secondary}
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    display: flex;
    justify-content: center;
  }
  
  #root {
    display: grid;
    grid-template-rows: min-content auto min-content;
    place-items: center;
    min-height: 100lvh;
    max-width: 1000px;
    width: 100%;
  }

  header,
  main,
  footer {
    height: 100%;
    width: inherit;
    padding: 1em;
  }
`;

export default GlobalStyle;

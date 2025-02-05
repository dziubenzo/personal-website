import { createGlobalStyle } from 'styled-components';

type GlobalStyleProps = {
  $headerHeight: number;
};

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colours.background};
    color: ${(props) => props.theme.colours.primary};
    font-family: ${(props) => props.theme.fonts.primary};
    font-style: normal;

    *:focus-visible {
      outline: 2px solid ${(props) => props.theme.colours.secondary}
    }

    @supports (scrollbar-width: auto) {
      scrollbar-color: ${(props) => props.theme.colours.tertiary} ${(props) => props.theme.colours.background};
      scrollbar-width: thin;
    }

    @supports selector(::-webkit-scrollbar) {
      &::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.colours.tertiary}
      }

      &::-webkit-scrollbar-track {
        background: ${(props) => props.theme.colours.background}
      }
    }
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: ${(props) => props.$headerHeight || 0}px;
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

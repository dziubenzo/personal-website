import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;

  @media (width >= ${(props) => props.theme.mobile}) and (width < ${(props) =>
      props.theme.tablet}) {
    flex-direction: column;
    gap: 16px;
  }

  @media (width < ${(props) => props.theme.mobile}) {
    justify-content: space-around;
    gap: 16px;
    text-align: center;
  }

  // Revert sticky header if a probable mobile device is in landscape mode
  // Use a lower pixel value for mobile devices compared to that in the theme to prevent triggering the media query when the DevTools are opened on the bottom of a desktop screen
  @media (height < 600px) and (orientation: landscape) {
    position: revert;
  }
`;

export const StyledDevHeadings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  a {
    text-decoration: none;
  }

  * {
    font-family: ${(props) => props.theme.fonts.secondary};
    letter-spacing: 1px;
  }
`;

export const StyledNavBar = styled.nav`
  margin-left: auto;
  text-align: center;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    gap: 16px;

    li {
      a {
        padding: 1em;
        text-decoration: none;
      }
    }
  }

  @media (hover: hover) {
    ul {
      li {
        a {
          border-radius: 8px;

          &:hover {
            transition: background-color 0.15s ease-in-out;
            background-color: ${(props) => props.theme.colours.tertiary};
          }
        }
      }
    }
  }

  @media (width >= ${(props) => props.theme.mobile}) and (width < ${(props) =>
      props.theme.tablet}) {
    margin-left: revert;

    ul {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      place-items: center;

      li {
        a {
          padding: revert;
        }
      }
    }
  }

  @media (width < ${(props) => props.theme.mobile}) {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 0;
    top: 0;
    width: 30%;
    height: calc(50% - 2em);
    margin-left: revert;
    outline: 3px solid ${(props) => props.theme.colours.secondary};
    border-radius: 0 20% 20% 0;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    z-index: 1;

    &.slide-in {
      visibility: visible;
      transform: translate(0%, 50%);
    }

    &.slide-out {
      visibility: hidden;
      transform: translate(-100%, 50%);
    }

    ul {
      display: grid;
      grid-template-rows: repeat(5, 1fr);
      height: 100%;
      justify-content: center;
      align-items: center;
      gap: 4px;

      li {
        display: flex;
        align-items: center;
        justify-content: center;

        a {
          padding: revert;
          text-decoration: revert;
          text-decoration-color: ${(props) => props.theme.colours.secondary};
          text-underline-offset: 0.3em;
          font-size: ${(props) => props.theme.fontSizes.small};
          width: 80%;
        }
      }
    }
  }
`;

import styled from 'styled-components';

export const StyledProjects = styled.section``;

export const StyledProject = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;

  .selector-wrapper {
    position: absolute;
    height: 100%;
    width: calc(100% / 3 * 2); // 2fr
    background: none;
    pointer-events: none;
  }

  .screenshots-wrapper {
    overflow-x: hidden;

    .horizontal-scroll-wrapper {
      display: flex;
      width: fit-content;

      a {
        min-width: 100%;

        img {
          display: block;
          width: 100%;
          border-radius: 8px;
        }
      }
    }
  }

  @media (hover: hover) {
    .screenshots-wrapper {
      transition: box-shadow 0.3s ease-in-out;

      &:hover {
        box-shadow: ${(props) => props.theme.boxShadowTile};
      }
    }
  }
`;

export const StyledScreenshotSelector = styled.div`
  position: absolute;
  left: 50%;
  top: 90%;
  transform: translate(-50%, -50%);
  background: transparent;
  pointer-events: auto;

  button {
    font-size: ${(props) => props.theme.fontSizes.extraLarge};
    width: 3ch;
    border: none;
    color: white;
    background-color: black;
    cursor: pointer;

    &.active {
      color: black;
      background-color: white;
    }
  }

  button:first-of-type {
    border-radius: 16px 0 0 16px;
  }

  button:last-of-type {
    border-radius: 0 16px 16px 0;
  }

  @media (hover: hover) {
    button {
      transition: all 0.15s ease-in-out;

      &:hover {
        color: black;
        background-color: white;
      }
    }
  }
`;

export const StyledProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colours.tertiary};
  padding: 1em;

  * {
    background: inherit;
  }

  .project-title,
  .frontend-icons-heading,
  .backend-icons-heading {
    font-size: ${(props) => props.theme.fontSizes.extraLarge};
    font-family: ${(props) => props.theme.fonts.secondary};
    letter-spacing: 2px;
    text-align: center;
  }

  .project-icons-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 32px;

    .frontend-icons,
    .backend-icons {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 8px;

      svg {
        height: 36px;
        width: 36px;
      }
    }
  }

  .project-links-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    text-align: center;
    margin-top: auto;

    a {
      height: 48px;
      width: 48px;

      svg {
        height: 100%;
        width: 100%;
      }
    }

    a:nth-of-type(even) {
      height: 64px;
      width: 64px;
    }
  }

  @media (hover: hover) {
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
      box-shadow: ${(props) => props.theme.boxShadowTile};
    }

    .project-icons-wrapper {
      svg {
        transition: transform 0.3s ease-in-out;
      }
    }

    .project-icons-wrapper {
      svg:nth-of-type(odd) {
        transform: translateX(-10px);
      }
    }

    .project-icons-wrapper {
      svg:nth-of-type(even) {
        transform: translateX(10px);
      }
    }

    .frontend-icons:hover,
    .backend-icons:hover {
      svg {
        transform: translateX(0px);
      }
    }

    .project-links-wrapper {
      a {
        svg {
          transition: fill 0.15s ease-in-out;

          &:hover {
            fill: ${(props) => props.theme.colours.background};
          }
        }
      }
    }
  }
`;

import styled from 'styled-components';

export const StyledProjects = styled.section`
  .projects-wrapper {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  @media (width >= ${(props) => props.theme.mobile}) and (width < ${(props) =>
      props.theme.tablet}) {
    .projects-wrapper {
      gap: 16px;
    }
  }

  @media (width < ${(props) => props.theme.mobile}) {
    .projects-wrapper {
      gap: 16px;
    }
  }
`;

export const StyledProject = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;

  .selector-wrapper {
    position: absolute;
    height: 100%;
    width: calc(100% / 3 * 2 - 22px); // 2fr, including grid gap
    background: none;
    pointer-events: none;
  }

  .screenshots-wrapper {
    border-radius: 8px;

    .horizontal-scroll-wrapper {
      display: flex;
      width: fit-content;
      overflow-x: hidden;
      border-radius: 8px;

      a {
        min-width: 100%;
        background-color: ${(props) => props.theme.colours.tertiary};
        border-radius: 8px;

        img {
          display: block;
          width: 100%;
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

  @media (width >= ${(props) => props.theme.mobile}) and (width < ${(props) =>
      props.theme.tablet}) {
    grid-template-columns: 1fr;
    gap: 16px;

    .selector-wrapper {
      height: 100%;
      width: 100%;
    }

    .screenshots-wrapper {
      border: 5em solid ${(props) => props.theme.colours.tertiary};

      .horizontal-scroll-wrapper {
        border-radius: revert;
      }
    }
  }

  @media (width < ${(props) => props.theme.mobile}) {
    grid-template-columns: 1fr;
    gap: 16px;

    .selector-wrapper {
      height: 100%;
      width: 100%;
    }
  }
`;

export const StyledProjectReverse = styled(StyledProject)`
  grid-template-columns: 1fr 2fr;

  .selector-wrapper {
    right: 0;
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
    opacity: 75%;

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

  @media (width >= ${(props) => props.theme.mobile}) and (width < ${(props) =>
      props.theme.tablet}) {
    top: 3%;

    button {
      opacity: 100%;
    }
  }

  @media (width < ${(props) => props.theme.mobile}) {
    top: 5%;
    width: 100%;
    display: flex;
    justify-content: center;

    button {
      font-size: ${(props) => props.theme.fontSizes.large};
      width: 4ch;
    }
  }
`;

export const StyledProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colours.tertiary};
  padding: 1em;

  * {
    background: inherit;
  }

  .project-title,
  .frontend-icons-heading,
  .backend-icons-heading {
    font-family: ${(props) => props.theme.fonts.secondary};
    letter-spacing: 2px;
    text-align: center;
  }

  .project-title {
    font-size: 2.5em;
  }

  .frontend-icons-heading,
  .backend-icons-heading {
    font-size: ${(props) => props.theme.fontSizes.large};
    margin-bottom: 0.75em;
  }

  .project-icons-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    margin-top: auto;

    .frontend-icons-wrapper,
    .backend-icons-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 16px;

      svg {
        height: 34px;
        width: 34px;
      }
    }
  }

  hr {
    border: 1px solid ${(props) => props.theme.colours.primary};
    margin-top: auto;
  }

  .project-links-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: auto;
    gap: 8px;

    a:nth-of-type(odd) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      text-underline-offset: 0.2em;
      text-decoration-color: ${(props) => props.theme.colours.secondary};

      svg {
        height: 32px;
        width: 32px;
      }

      p {
        font-size: ${(props) => props.theme.fontSizes.small};
      }
    }

    a:nth-of-type(even) {
      height: 64px;
      width: 64px;

      svg {
        height: 100%;
        width: 100%;
      }
    }
  }

  @media (hover: hover) {
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
      box-shadow: ${(props) => props.theme.boxShadowTile};
    }

    .project-icons-wrapper {
      svg {
        background: transparent;
        transition: transform 0.3s ease-in-out;
      }
    }

    .backend-icons-wrapper {
      svg:nth-of-type(odd) {
        transform: translateY(-5px);
      }

      svg:nth-of-type(even) {
        transform: translateY(5px);
      }
    }

    .frontend-icons-wrapper {
      svg:nth-of-type(odd) {
        transform: translateY(5px);
      }

      svg:nth-of-type(even) {
        transform: translateY(-5px);
      }
    }

    .frontend-icons:hover,
    .backend-icons:hover {
      svg {
        transform: translateY(0px);
      }
    }

    .project-icons-wrapper {
      transition: transform 0.15s ease-in-out;

      svg:hover {
        transform: scale(1.2);
        filter: contrast(200%);
      }
    }

    .project-links-wrapper {
      a {
        text-decoration: none;
        background: transparent;

        p,
        svg {
          transition: all 0.15s ease-in-out;
        }

        &:hover {
          filter: contrast(200%);
        }

        &:hover svg {
          transform: scale(1.15);
        }
      }
    }
  }

  @media (width >= ${(props) => props.theme.mobile}) and (width < ${(props) =>
      props.theme.tablet}) {
    gap: 32px;

    .project-title {
      font-size: 5em;
    }

    .project-description {
      text-align: center;
    }

    .project-icons-wrapper {
      flex-direction: revert;
      gap: 128px;

      .frontend-icons-heading,
      .backend-icons-heading {
        font-size: ${(props) => props.theme.fontSizes.extraLarge};
      }
    }

    .project-links-wrapper {
      gap: 48px;

      a:nth-of-type(odd) {
        gap: 8px;

        p {
          font-size: ${(props) => props.theme.fontSizes.standard};
        }

        svg {
          height: 48px;
          width: 48px;
        }
      }
    }
  }

  @media (width < ${(props) => props.theme.mobile}) {
    gap: 16px;

    .project-title {
      font-size: 3.5em;
    }

    .project-description {
      text-align: center;
    }

    .project-icons-wrapper {
      flex-direction: column;
      gap: 32px;

      .frontend-icons-wrapper,
      .backend-icons-wrapper {
        flex-wrap: wrap;
      }

      .frontend-icons-heading,
      .backend-icons-heading {
        font-size: ${(props) => props.theme.fontSizes.large};
      }
    }

    .project-links-wrapper {
      gap: 16px;
    }
  }
`;

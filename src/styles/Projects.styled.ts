import styled from 'styled-components';

export const StyledProjects = styled.section``;

export const StyledProject = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 16px;

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
          width: 100%;
          border-radius: 8px;
        }
      }
    }
  }

  .project-name-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;

    h1 {
      font-size: ${(props) => props.theme.fontSizes.extraLarge};
      font-family: ${(props) => props.theme.fonts.secondary};
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

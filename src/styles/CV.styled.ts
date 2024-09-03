import styled from 'styled-components';

export const StyledCV = styled.section`
  .cv-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colours.tertiary};
    border-radius: 8px;
    gap: 92px;
    padding: 1em;

    * {
      background: inherit;
    }

    .download-cv-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;

      .download-cv-heading {
        text-align: center;
      }

      a {
        height: 64px;
        width: 64px;

        svg {
          height: 100%;
          width: 100%;
        }
      }
    }
  }

  @media (hover: hover) {
    .cv-wrapper {
      transition: box-shadow 0.3s ease-in-out;

      &:hover {
        box-shadow: ${(props) => props.theme.boxShadowTile};
      }
    }

    .download-cv-wrapper {
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

  @media (width < ${(props) => props.theme.mobile}) {
    .cv-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0;
      justify-content: space-around;

      .download-cv-wrapper {
        a {
          height: 48px;
          width: 48px;
        }
      }
    }
  }
`;

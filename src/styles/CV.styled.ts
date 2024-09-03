import styled from 'styled-components';

export const StyledCV = styled.section`
  .cv-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    place-items: center;
    border-radius: 8px;
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
    .download-cv-wrapper {
      a {
        svg {
          transition: transform 0.15s ease-in-out;

          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }
  }

  @media (width < ${(props) => props.theme.mobile}) {
    .cv-wrapper {
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

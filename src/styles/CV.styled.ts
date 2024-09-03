import styled from 'styled-components';

export const StyledCV = styled.section`
  .cv-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colours.tertiary};
    border-radius: 8px;
    gap: 64px;
    padding: 1em;

    * {
      background: inherit;
    }

    .download-cv-heading {
      text-align: center;
    }

    .download-cv-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;

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
`;

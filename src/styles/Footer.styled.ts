import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;

  button {
    cursor: pointer;
  }

  .copyright {
    align-self: end;
    text-align: center;
  }

  @media (width < ${(props) => props.theme.mobile}) {
    .copyright {
      align-self: revert;
    }
  }
`;

export const StyledLanguagePicker = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 8px;

  .language-buttons-wrapper {
    display: flex;
    gap: 32px;
    justify-content: center;

    button {
      height: 28px;
      aspect-ratio: 1/1;
      border: none;

      svg {
        height: 100%;
        width: 100%;
      }
    }
  }

  @media (hover: hover) {
    .language-buttons-wrapper {
      button {
        transition: all 0.15s ease-in-out;

        &:hover {
          transform: scale(1.3);
        }
      }
    }
  }

  @media (width < ${(props) => props.theme.mobile}) {
    gap: 6px;
    font-size: ${(props) => props.theme.fontSizes.small};

    .language-buttons-wrapper {
      gap: 16px;

      button {
        height: 24px;
        width: 24px;
      }
    }
  }
`;

export const StyledThemePicker = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 8px;

  .theme-buttons-wrapper {
    display: flex;
    justify-content: center;
  }

  @media (hover: hover) {
    .theme-buttons-wrapper {
      button {
        transition: all 0.15s ease-in-out;

        &:hover {
          transform: scale(1.3);
        }
      }
    }
  }

  @media (width < ${(props) => props.theme.mobile}) {
    gap: 6px;
    font-size: ${(props) => props.theme.fontSizes.small};

    .theme-buttons-wrapper {
      button,
      button > svg {
        height: 24px;
        width: 24px;
      }
    }
  }
`;

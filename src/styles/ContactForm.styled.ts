import styled from 'styled-components';

export const StyledContactForm = styled.section`
  form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    background-color: ${(props) => props.theme.colours.tertiary};
    border-radius: 8px;
    padding: 1em;

    * {
      background: inherit;
    }

    .email-wrapper {
      align-items: center;
    }

    .email-wrapper,
    .message-wrapper {
      display: flex;
      flex-direction: column;
      text-align: center;
      gap: 16px;
    }

    input,
    textarea {
      font-size: ${(props) => props.theme.fontSizes.standard};
      padding: 0.75em;
      border-radius: 8px;
      border: none;
      background-color: ${(props) => props.theme.colours.background};
      resize: vertical;

      &::placeholder {
        color: ${(props) => props.theme.colours.secondary};
      }
    }

    label {
      width: max-content;
      align-self: center;
      cursor: pointer;
      font-size: ${(props) => props.theme.fontSizes.medium};
      font-weight: 600;
    }

    button {
      justify-self: flex-end;
      width: max-content;
      padding: 0.25em 1em;
      font-size: ${(props) => props.theme.fontSizes.large};
      border-radius: 8px;
      border: none;
      cursor: pointer;
      background-color: ${(props) => props.theme.colours.background};
    }
  }

  @media (hover: hover) {
    form {
      button:hover {
        transition: all 0.15s ease-in-out;
        background-color: ${(props) => props.theme.colours.primary};
        color: ${(props) => props.theme.colours.background};
      }
    }
  }

  @media (width < ${(props) => props.theme.mobile}) {
    form {
      input,
      textarea {
        width: 100%;
      }

      textarea {
        height: 18em;
      }

      button {
        font-size: ${(props) => props.theme.fontSizes.medium};
      }
    }
  }
`;

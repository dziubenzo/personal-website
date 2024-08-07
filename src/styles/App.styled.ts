import styled from 'styled-components';

type IconButtonProps = {
  $size: number;
};

export const StyledIconButton = styled.button<IconButtonProps>`
  background-color: transparent;
  border: none;
  height: ${(props) => props.$size || 16}px;
  width: ${(props) => props.$size || 16}px;
  cursor: pointer;

  svg {
    height: 100%;
    width: 100%;
  }
`;

export const StyledHeading = styled.h1`
  padding: 0.5em;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colours.tertiary};
  font-size: ${(props) => props.theme.fontSizes.extraLarge};
  text-align: center;
`;

export const StyledMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 32px;
  overflow-x: auto;

  section {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  @media (width < ${(props) => props.theme.mobile}) {
    gap: 16px;

    section {
      gap: 16px;
    }
  }

  @media (width >= ${(props) => props.theme.mobile}) and (width < ${(props) =>
      props.theme.tablet}) {
    gap: 16px;

    section {
      gap: 16px;
    }
  }
`;

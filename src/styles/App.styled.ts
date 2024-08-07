import styled from 'styled-components';

type IconButtonProps = {
  $size: number;
};

export const StyledIconButton = styled.button<IconButtonProps>`
  background-color: transparent;
  border: none;

  svg {
    height: ${(props) => props.$size || 16}px;
    width: ${(props) => props.$size || 16}px;
  }
`;

export const StyledHeading = styled.h1`
  padding: 0.5em;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colours.tertiary};
  font-size: ${(props) => props.theme.fontSizes.extraLarge};
  text-align: center;
`;

export const StyledMainContainer = styled.main``;

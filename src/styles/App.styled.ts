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

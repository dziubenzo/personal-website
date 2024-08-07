import styled from 'styled-components';

type ContactLinksProps = {
  $size: number;
};

export const StyledAbout = styled.section`
  .about-wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 32px;
  }

  // Tile box shadow on hover
  @media (hover: hover) {
    .about-wrapper > div {
      transition: box-shadow 0.3s ease-in-out;

      &:hover {
        box-shadow: ${(props) => props.theme.boxShadowTile};
      }
    }
  }

  @media (width >= ${(props) => props.theme.mobile}) and (width < ${(props) =>
      props.theme.tablet}) {
    .about-wrapper {
      gap: 16px;
    }
  }

  @media (width < ${(props) => props.theme.mobile}) {
    .about-wrapper {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
`;

export const StyledDevPhoto = styled.div`
  padding: 1em;
  border-radius: 8px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colours.tertiary};

  img {
    max-width: 80%;
    max-height: 75vh;
    border-radius: 8px;
  }

  @media (width < ${(props) => props.theme.mobile}) {
    img {
      max-height: 50vh;
    }
  }
`;

export const StyledDevInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 1em;
  background-color: ${(props) => props.theme.colours.tertiary};
  border-radius: 8px;

  .about-heading {
    border-radius: 8px;
    padding: 0.5em;
  }

  p {
    background: inherit;
    padding: 0.25em 0.5em;
    font-family: ${(props) => props.theme.fonts.primary};
  }

  .email-wrapper {
    background: inherit;
    display: flex;
    align-items: center;

    * {
      background: inherit;
    }
  }

  @media (width < ${(props) => props.theme.mobile}) {
    .about-heading,
    p {
      text-align: center;
    }

    .email-wrapper {
      justify-content: center;
    }
  }
`;

export const StyledContactLinks = styled.div<ContactLinksProps>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  margin-top: 1em;

  &,
  * {
    background: inherit;
  }

  a {
    height: ${(props) => props.$size || 16}px;
    width: ${(props) => props.$size || 16}px;

    svg {
      height: 100%;
      width: 100%;
    }
  }

  @media (hover: hover) {
    a {
      svg {
        transition: fill 0.15s ease-in-out;

        &:hover {
          fill: ${(props) => props.theme.colours.background};
        }
      }
    }
  }

  @media (width < ${(props) => props.theme.mobile}) {
    a {
      height: 32px;
      width: 32px;
    }
  }
`;

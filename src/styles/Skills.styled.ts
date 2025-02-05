import styled, { keyframes } from 'styled-components';

const animateLTR = keyframes`
  from {
    transform: translateX(2%);
  }
  to {
    transform: translateX(-72%);
  }
`;

export const StyledSkills = styled.section`
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const StyledSkillsSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 8px;

  label {
    font-size: ${(props) => props.theme.fontSizes.standard};
  }

  input {
    accent-color: ${(props) => props.theme.colours.secondary};
    height: 18px;
    width: 18px;
  }

  label,
  input {
    cursor: pointer;
  }

  @media (width < ${(props) => props.theme.mobile}) {
    justify-content: center;
  }
`;

export const StyledSkillsCarousel = styled.div`
  padding: 0.5em 0;
  overflow-x: hidden;

  .horizontal-scroll-wrapper {
    display: flex;
    gap: 64px;
    width: fit-content;

    &.animate-ltr {
      animation: ${animateLTR} 30s linear infinite alternate;
    }

    .skill-icon {
      height: 64px;
      width: 64px;
    }
  }

  @media (hover: hover) {
    .horizontal-scroll-wrapper {
      &.animate-ltr:hover {
        animation: ${animateLTR} 30s linear infinite alternate paused;
      }

      .skill-icon {
        background: transparent;
        transition: transform 0.2s ease-in-out;

        &:hover {
          filter: contrast(200%);
          transform: scale(1.2);
        }
      }
    }
  }

  @media (width < ${(props) => props.theme.mobile}) {
    padding: 0;
    overflow-x: revert;

    .horizontal-scroll-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 32px;
      width: revert;

      &.animate-ltr {
        animation: revert;
      }

      .skill-icon {
        height: 32px;
        width: 32px;
      }
    }
  }
`;

export const StyledTextSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 16px;

  .category {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .category-title {
      font-size: ${(props) => props.theme.fontSizes.large};
    }

    .skill {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;

      svg {
        opacity: 0.2;
      }
    }
  }

  @media (hover: hover) {
    .category {
      .skill {
        svg {
          transition: all 0.3s ease-in-out;
        }
        &:hover {
          svg {
            opacity: 1;
            transform: rotate(360deg) scale(1.2);
          }
        }
      }
    }
  }

  @media (width >= ${(props) => props.theme.mobile}) and (width < ${(props) =>
      props.theme.tablet}) {
    gap: 0;

    .category {
      align-items: center;
      text-align: center;
    }
  }

  @media (width < ${(props) => props.theme.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: revert;

    .category {
      align-items: center;
      text-align: center;

      .skill {
        svg {
          display: none;
        }
      }
    }
  }
`;

import styled, { keyframes } from 'styled-components';

const animateLTR = keyframes`
from {
  transform: translateX(2%);
}
to {
  transform: translateX(-72%);
}`;

export const StyledSkills = styled.section`
  .skills-wrapper {
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
  }

  @media (hover: hover) {
    .horizontal-scroll-wrapper {
      &.animate-ltr:hover {
        animation: ${animateLTR} 30s linear infinite alternate paused;
      }

      .skill-icon {
        transition: transform 0.2s ease-in-out;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }

  @media (width < ${(props) => props.theme.mobile}) {
    .skills-wrapper {
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
  }
`;

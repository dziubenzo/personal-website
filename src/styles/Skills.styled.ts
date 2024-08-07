import styled from 'styled-components';

export const StyledSkills = styled.section`
  .skills-wrapper {
    overflow-x: auto;

    .horizontal-scroll-wrapper {
      display: flex;
      gap: 64px;
      width: fit-content;

      .skill-icon {
        height: 64px;
        width: 64px;
      }
    }
  }
`;

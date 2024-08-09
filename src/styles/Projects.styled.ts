import styled from 'styled-components';

export const StyledProjects = styled.section``;

export const StyledProject = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  
  .screenshots-wrapper {
    overflow-x: auto;

    .horizontal-scroll-wrapper {
      display: flex;
      width: fit-content;

      a {
        min-width: 100%;

        img {
          width: 100%;
          border-radius: 8px;
        }
      }
    }
  }
`;

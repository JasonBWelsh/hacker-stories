import styled from 'styled-components';

export const StyledListContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 468px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

export const StyledItem = styled.div`
  margin: 0.5rem;
  border: 1px solid #fff;
  padding: 0.5rem;
  width: 200px;
  display: flex;
  flex-direction: column;
`;

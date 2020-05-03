import styled from 'styled-components';

export const StyledListContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 468px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: stretch; // keeps items sized correctly
  }
`;

export const StyledItem = styled.div`
  margin: 0.5rem;
  border: 1px solid #fff;
  padding: 0.5rem;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;

  a {
    transition: all 0.3s ease;

    &:hover,
    &:focus {
      background: #fff;
      color: #123;
    }
  }

  span {
    margin-bottom: 0.5rem;
  }

  button {
    height: 30px;
    width: 30px;
    border: 1px solid #fff;
    padding: 0.5rem;
    background: transparent;
    position: absolute;
    bottom: 5px;
    right: 5px;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  }
`;

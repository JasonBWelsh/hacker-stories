import styled from 'styled-components';

export const StyledForm = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 300px;

  .search-input-container,
  .sort-input-container {
    margin: 0.5rem 0;
    display: flex;
    flex-direction: column;

    @media (min-width: 468px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      input,
      select {
        margin-left: 0.5rem;
        margin-right: 3px;
      }
    }
  }

  .sort-input-container {
    @media (min-width: 468px) {
      width: 100%;
      justify-content: flex-start;
    }
    select {
      border: 1px solid #000;
      padding: 0.5rem;
      margin-top: 5px;
    }
  }
`;

export const StyledSearchButton = styled.button`
  margin-top: 5px;
  width: 72px;
  border: 1px solid #ffa3ce;
  padding: 0.5rem 1rem;
  background: transparent;
  color: #ffa3ce;
  background: #323232;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-right: 1px solid #fff;
  }

  @media (min-width: 468px) {
    margin: 0;
  }
`;

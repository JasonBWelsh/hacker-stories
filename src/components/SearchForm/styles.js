import styled from 'styled-components';

export const StyledForm = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 300px;

  @media (min-width: 468px) {
    flex-direction: row;
    justify-content: space-around;
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

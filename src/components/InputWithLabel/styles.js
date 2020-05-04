import styled from 'styled-components';

export const StyledInput = styled.input`
  margin-top: 5px;
  width: 150px;
  border: 1px solid #fff;
  padding: 0.5rem;
  background: transparent;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    background: #323232;
  }

  &:focus {
    border: 1px solid #fff;
  }

  @media (min-width: 468px) {
    margin-top: 0;
  }
`;

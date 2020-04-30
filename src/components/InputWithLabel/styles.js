import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 150px;
  border-top: 1px transparent;
  border-right: none;
  border-bottom: 1px solid #fff;
  border-left: 1px solid #fff;
  // border-radius: 5px;
  padding: 0.5rem;
  // background: rgba(50, 50, 50, 0.75);
  background: none;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    width: 200px;
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
  }
`;

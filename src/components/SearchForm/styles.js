import styled from 'styled-components';

export const StyledForm = styled.form`
  margin: 0 auto;
  border: 1px solid #fff;
  // border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 300px;
`;

export const StyledSearchButton = styled.button`
  width: 72px;
  // border: none;
  // border-radius: 5px;
  border-top: none;
  border-bottom: none;
  border-left: 1px solid #fff;
  border-right: none;
  padding: 0.5rem 1rem;
  // background: #000;
  background: transparent;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-right: 1px solid #fff;
  }
`;

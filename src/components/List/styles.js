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
  // border: 1px solid #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  padding: 0.5rem;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.3);
  }

  a {
    transition: all 0.3s ease;

    &:hover,
    &:focus {
      background: #fff;
      color: #123;
    }
  }

  .item-info-container {
    display: flex;
    flex-direction: column;

    span {
      margin-bottom: 0.5rem;
    }

    .item-text-highlight {
      color: #ffa3ce;
    }
  }

  button {
    border: none;
    background: transparent;
    position: absolute;
    bottom: -5px;
    right: -5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    svg {
      transition: all 0.3s ease;
    }

    &:hover svg {
      transform: scale(1.1) rotate(-45deg);
    }
  }
`;

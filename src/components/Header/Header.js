import React from 'react';
import { StyledHeader } from './styles';
import SearchForm from '../SearchForm/SearchForm.js';

const Header = ({ searchTerm, handleSearchInput, handleSearchSubmit }) => {
  return (
    <StyledHeader>
      <h1>Hacker News Stories</h1>
      <SearchForm
        handleSearchSubmit={handleSearchSubmit}
        searchTerm={searchTerm}
        handleSearchInput={handleSearchInput}
      />
    </StyledHeader>
  );
};

export default Header;

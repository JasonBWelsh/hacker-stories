import React from 'react';
import { StyledHeader, MainHeading } from './styles';
import SearchForm from '../SearchForm/SearchForm.js';

const Header = ({ searchTerm, handleSearchInput, handleSearchSubmit }) => {
  return (
    <StyledHeader>
      <MainHeading>Hacker News Search</MainHeading>
      <SearchForm
        handleSearchSubmit={handleSearchSubmit}
        searchTerm={searchTerm}
        handleSearchInput={handleSearchInput}
      />
    </StyledHeader>
  );
};

export default Header;

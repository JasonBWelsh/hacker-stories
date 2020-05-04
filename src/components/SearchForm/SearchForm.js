import React from 'react';
import InputWithLabel from '../InputWithLabel/InputWithLabel.js';
import { StyledForm, StyledSearchButton } from './styles.js';

const SearchForm = ({ searchTerm, handleSearchInput, handleSearchSubmit }) => {
  return (
    <StyledForm onSubmit={handleSearchSubmit}>
      <InputWithLabel
        id="search"
        value={searchTerm}
        isFocused
        onInputChange={handleSearchInput}
      >
        Topic:{' '}
      </InputWithLabel>

      <StyledSearchButton type="submit" disabled={!searchTerm}>
        search
      </StyledSearchButton>
    </StyledForm>
  );
};

export default SearchForm;

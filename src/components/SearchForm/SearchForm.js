import React from 'react';
import InputWithLabel from '../InputWithLabel/InputWithLabel.js';

const SearchForm = ({ searchTerm, handleSearchInput, handleSearchSubmit }) => {
  return (
    <form onSubmit={handleSearchSubmit}>
      <InputWithLabel
        id="search"
        value={searchTerm}
        isFocused
        onInputChange={handleSearchInput}
      >
        <strong>Search:</strong>
      </InputWithLabel>

      <button type="submit" disabled={!searchTerm}>
        search
      </button>
    </form>
  );
};

export default SearchForm;

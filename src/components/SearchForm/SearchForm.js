import React from 'react';
import InputWithLabel from '../InputWithLabel/InputWithLabel.js';
import { StyledForm, StyledSearchButton } from './styles.js';

const SearchForm = ({
  searchTerm,
  handleSearchInput,
  handleSearchSubmit,
  handleSort,
  sortValue,
}) => {
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
      <label>
        Sort by:
        <select value={sortValue} onChange={handleSort}>
          <option value="most_recent">Most recent</option>
          <option value="oldest">Oldest</option>
          <option value="most_points">Most points</option>
          <option value="least_points">Least points</option>
          <option value="most_comments">Most comments</option>
          <option value="least_comments">Least comments</option>
        </select>
      </label>
    </StyledForm>
  );
};

export default SearchForm;

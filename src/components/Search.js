import React from 'react';

const Search = ({ search, onSearch }) => {
  const handleChange = (event) => {
    onSearch(event);
  };

  return (
    <>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" value={search} onChange={handleChange} />
    </>
  );
};

export default Search;

import React from 'react';
import { StyledPage } from './styles.js';
import List from '../List/List.js';

const Page = ({ list, isLoading, isError, onRemoveItem }) => {
  return (
    <StyledPage>
      {isError && <p>Something went wrong...</p>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <List list={list} onRemoveItem={onRemoveItem} />
      )}
    </StyledPage>
  );
};

export default Page;

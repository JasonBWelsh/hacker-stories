import React from 'react';
import { StyledPage } from './styles.js';

const Page = ({ list, isLoading, isError, onRemoveItem }) => {
  return (
    <StyledPage>
      {isError && <p>Something went wrong...</p>}
      {isLoading ? <div>Loading...</div> : <div>List component here</div>}
    </StyledPage>
  );
};

export default Page;

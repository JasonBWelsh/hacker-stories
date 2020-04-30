import React, { useState, useEffect, useReducer, useCallback } from 'react';
import axios from 'axios';
import Header from '../Header/Header.js';
import Page from '../Page/Page.js';
// import List from './components/List';
import useSemiPersistentState from '../../hooks/useSemiPersistantState';
import storiesReducer from '../../reducers/storiesReducer';
import { StyledContainer } from './styles';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

const Container = () => {
  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React');

  const [url, setUrl] = useState(`${API_ENDPOINT}${searchTerm}`);

  const [stories, dispatchStories] = useReducer(storiesReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  const handleFetchStories = useCallback(() => {
    dispatchStories({ type: 'STORIES_FETCH_INIT' });

    const fetchStories = async () => {
      try {
        const response = await axios.get(url);
        console.log(response);
        dispatchStories({
          type: 'STORIES_FETCH_SUCCESS',
          payload: response.data.hits,
        });
      } catch {
        dispatchStories({ type: 'STORIES_FETCH_FAILURE' });
      }
    };
    fetchStories();
  }, [url]);

  useEffect(() => {
    handleFetchStories();
  }, [handleFetchStories]);

  const handleRemoveStory = (item) => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item,
    });
  };

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    setUrl(`${API_ENDPOINT}${searchTerm}`);
  };

  return (
    <StyledContainer>
      <Header
        handleSearchSubmit={handleSearchSubmit}
        searchTerm={searchTerm}
        handleSearchInput={handleSearchInput}
      />
      <Page
        list={stories.data}
        isLoading={stories.isLoading}
        isError={stories.isError}
        onRemoveItem={handleRemoveStory}
      />
    </StyledContainer>
  );
};

export default Container;

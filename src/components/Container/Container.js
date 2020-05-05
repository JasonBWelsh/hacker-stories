import React, { useState, useEffect, useReducer, useCallback } from 'react';
import axios from 'axios';
import Header from '../Header/Header.js';
import Page from '../Page/Page.js';
import useSemiPersistentState from '../../hooks/useSemiPersistantState';
import storiesReducer from '../../reducers/storiesReducer';
import sortReducer from '../../reducers/sortReducer';
import { StyledContainer } from './styles';
import sortBy from 'lodash/sortBy';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

const Container = () => {
  const [searchTerm, setSearchTerm] = useSemiPersistentState(
    'search',
    'JavaScript'
  );

  const [url, setUrl] = useState(`${API_ENDPOINT}${searchTerm}`);

  const [stories, dispatchStories] = useReducer(storiesReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  const [sortValue, setSortValue] = useState('most_recent');

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

  const handleSort = (event) => {
    console.log('DRD sort handler log target value -', event.target.value);
    setSortValue(event.target.value);

    switch (event.target.value) {
      case 'most_recent':
        dispatchStories({ type: 'SORT_MOST_RECENT' });
        break;
      case 'oldest':
        dispatchStories({ type: 'SORT_OLDEST' });
        break;
      default:
        break;
    }
  };

  const sortTest = sortBy(stories.data, 'created_at').reverse();
  console.log('DRD sortBy test --', sortTest);
  console.log('DRD5 - inside `Container` log `stories.data:::', stories.data);

  return (
    <StyledContainer>
      <Header
        handleSearchSubmit={handleSearchSubmit}
        searchTerm={searchTerm}
        handleSearchInput={handleSearchInput}
        handleSort={handleSort}
        sortValue={sortValue}
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

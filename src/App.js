import React, { useState, useEffect } from 'react';
import List from './components/List';
import InputWithLabel from './components/InputWithLabel';
import './App.css';

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

function App() {
  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React');

  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    console.log('!!!', event.target.value);
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <h1>Hacker News Stories</h1>

      {/* <Search search={searchTerm} onSearch={handleSearch} /> */}
      <InputWithLabel
        id="search"
        label="search"
        value={searchTerm}
        onInputChange={handleSearch}
      />

      <hr />

      <List list={searchedStories} />
    </>
  );
}

export default App;

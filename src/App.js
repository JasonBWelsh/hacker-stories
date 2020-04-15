import React, { useState } from 'react';
import List from './components/List';
import Search from './components/Search';
import './App.css';

function App() {
  const [searchTerm, setSetSearchTerm] = useState('React');

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
    setSetSearchTerm(event.target.value);
  };

  return (
    <>
      <h1>Hacker News Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch} />

      <hr />

      <List list={searchedStories} />
    </>
  );
}

export default App;

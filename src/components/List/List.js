import React from 'react';
import { StyledListContainer, StyledItem } from './styles.js';

const List = ({ list, onRemoveItem }) => {
  return (
    <StyledListContainer>
      {list.map((item) => (
        <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </StyledListContainer>
  );
};

const Item = ({ item, onRemoveItem }) => {
  const handleRemoveItem = () => onRemoveItem(item);

  return (
    <StyledItem>
      <a href={item.url}>
        <h3>{item.title}</h3>
        <span>author: {item.author}</span>
        <span>comments: {item.num_comments}</span>
        <span>points: {item.points}</span>
        <button type="button" onClick={handleRemoveItem}>
          x
        </button>
      </a>
    </StyledItem>
  );
};

export default List;

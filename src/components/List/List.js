import React from 'react';
import { StyledListContainer, StyledItem } from './styles.js';
import { ReactComponent as Cross } from '../../icons/cross.svg';

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
      <a href={item.url} target="_blank" rel="noreferrer noopener">
        <h3>{item.title}</h3>
      </a>
      <div className="item-info-container">
        <span>
          author: <span className="item-text-highlight">{item.author}</span>
        </span>
        <span>
          comments:{' '}
          <span className="item-text-highlight">{item.num_comments}</span>
        </span>
        <span>
          points: <span className="item-text-highlight">{item.points}</span>
        </span>
      </div>

      <button type="button" onClick={handleRemoveItem}>
        <Cross height="20px" width="20px" />
      </button>
    </StyledItem>
  );
};

export default List;

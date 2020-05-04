import React from 'react';
import { StyledListContainer, StyledItem } from './styles.js';
import { ReactComponent as Cross } from '../../icons/cross.svg';
import DateTime from 'luxon/src/datetime.js';

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
  // const formattedDate = DateTime.fromISO(item.created_at);
  const formattedDate = String(new Date(item.created_at))
    .split(' ')
    .slice(1, 4)
    .join(' ');
  console.log('DRD 1812 ---', formattedDate);

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
        <span className="item-text-highlight">{formattedDate}</span>
      </div>

      <button type="button" onClick={handleRemoveItem}>
        <Cross height="15px" width="15px" />
      </button>
    </StyledItem>
  );
};

export default List;

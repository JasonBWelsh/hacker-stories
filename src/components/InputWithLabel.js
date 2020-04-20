import React from 'react';

const InputWithLabel = ({ id, label, value, type = 'text', onInputChange }) => {
  return (
    <>
      <label htmlFor={id}>{label} </label>
      &nbsp;
      <input id={id} type="text" value={value} onChange={onInputChange} />
    </>
  );
};

export default InputWithLabel;

import React, { useEffect, useRef } from 'react';
import { StyledInput } from './styles.js';

const InputWithLabel = ({
  id,
  value,
  type = 'text',
  onInputChange,
  isFocused,
  children,
}) => {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      <StyledInput
        id={id}
        type="text"
        value={value}
        autoFocus={isFocused}
        ref={inputRef}
        onChange={onInputChange}
      />
    </>
  );
};

export default InputWithLabel;

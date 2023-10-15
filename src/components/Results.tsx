import React from 'react';

const Results: React.FC = () => {
  // You can set the initial input value here
  const inputValue = 'This is read-only text';

  return (
    <input
      type="text"
      value={inputValue}
      readOnly // This attribute makes the input read-only
    />
  );
};

export default Results;

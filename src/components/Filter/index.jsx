import React from 'react';

import './filter.scss';

const Filter = ({ onChange }) => {
  return (
    <select className="filter" onChange={onChange}>
      <option value="all">All</option>
      <option value="completed">Done</option>
      <option value="incomplete">Undone</option>
    </select>
  );
};

export default Filter;

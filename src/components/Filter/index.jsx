import React from 'react';

import './filter.scss';

const Filter = () => {
  return (
    <select className="filter">
      <option value="all">All</option>
      <option value="completed">Done</option>
      <option value="incomplete">Undone</option>
    </select>
  );
};

export default Filter;

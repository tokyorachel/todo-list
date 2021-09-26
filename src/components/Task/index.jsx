import React, { useState } from 'react';

import ContextMenu from '@/components/ContextMenu';

import styles from './task.scss';

const Task = ({ id, desc, completed }) => {
  const [checked, setChecked] = useState(completed);

  const handleChange = (e) => {
    setChecked((s) => !s.checked);
  };

  return (
    <li className="task">
      <span>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <label>{desc}</label>
      </span>
      <ContextMenu id={id} />
    </li>
  );
};

export default Task;

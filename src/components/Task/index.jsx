import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import ContextMenu from '@/components/ContextMenu';

import styles from './task.scss';

const Task = ({ id, desc, completed, update }) => {
  const handleChange = (e) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: !completed }),
    })
      .then((response) => response.json())
      .then((data) => {
        update({ ...data, completed: data.completed === true });
      });
  };

  return (
    <li className="task">
      <span>
        <input type="checkbox" checked={completed} onChange={handleChange} />
        <label>{desc}</label>
      </span>
      <ContextMenu id={id} />
    </li>
  );
};

export default Task;

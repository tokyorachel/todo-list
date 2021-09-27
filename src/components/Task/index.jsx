import React, { useState } from 'react';

import ContextMenu from '@/components/ContextMenu';

import styles from './task.scss';

const Task = ({ id, desc, completed, update }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(desc);

  const handleChange = () => {
    const action = 'UPDATE';
    const payload = { completed: !completed };
    update({ id, payload, action });
  };

  const handleSubmit = (value) => {
    const action = 'UPDATE';
    const payload = { title: value };
    update({ id, payload, action });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.target.blur();
      handleSubmit(e.target.value);
      setIsEditing(false);
      setValue(e.target.value);
    }
  };

  return (
    <li className="task">
      {isEditing ? (
        <input
          autoFocus
          aria-label="Edit task title"
          className="task-edit"
          type="text"
          name="title"
          onKeyDown={handleKeyPress}
          defaultValue={value}
        />
      ) : (
        <span>
          <input
            aria-label="Task completed"
            type="checkbox"
            checked={completed}
            onChange={handleChange}
          />
          <p className={completed ? 'label completed' : 'label'}>{desc}</p>
        </span>
      )}
      <ContextMenu id={id} update={update} toggleEdit={setIsEditing} />
    </li>
  );
};

export default Task;

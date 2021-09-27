import React, { useState } from 'react';

import './context-menu.scss';

const ContextMenu = ({ id, update, toggleEdit }) => {
  const [expanded, setExpanded] = useState(false);

  const handleTrigger = () => {
    setExpanded(!expanded);
  };

  const handleEdit = (e) => {
    setExpanded(!expanded);
    toggleEdit((s) => !s);
  };

  const handleDelete = (e) => {
    setExpanded(!expanded);
    const action = 'DELETE';
    update({ id, action });
  };

  return (
    <div className="context-menu">
      <button className="context-trigger" onClick={handleTrigger} type="button">
        &hellip;
      </button>
      {expanded && (
        <div className="context-expanded">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ContextMenu;

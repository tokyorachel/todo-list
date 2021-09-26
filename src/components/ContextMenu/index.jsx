import React, { useState } from 'react';

import './context-menu.scss';

const ContextMenu = ({ id }) => {
  const [expanded, setExpanded] = useState(false);

  const handleTrigger = (e) => {
    setExpanded(!expanded);
  };

  const handleEdit = (e) => {
    // TODO: id
  };

  const handleDelete = (e) => {
    // TODO: id
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

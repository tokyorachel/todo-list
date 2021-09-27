import React from 'react';

import './add-task.scss';

const AddTask = ({ update }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const action = 'CREATE';
    const form = e.target;
    const formData = new FormData(form);
    formData.append('completed', false);
    const payload = Object.fromEntries(formData.entries());
    update({ payload, action });
    form.reset();
  };

  return (
    <form className="add-task" onSubmit={handleSubmit}>
      <input type="text" id="title" name="title" placeholder="Add your todo" />
    </form>
  );
};

export default AddTask;

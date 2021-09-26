import React from 'react';

import './add-task.scss';

const AddTask = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    formData.append('completed', false);
    const data = Object.fromEntries(formData.entries());

    fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        //TODO: update state
        form.reset();
      });
  };

  return (
    <form className="add-task" onSubmit={handleSubmit}>
      <input type="text" id="title" name="title" placeholder="Add your todo" />
    </form>
  );
};

export default AddTask;

import React from 'react';

import Task from '@/components/Task';

import styles from './task-list.scss';

const TaskList = ({ tasks = [] }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          desc={task.title}
          completed={task.completed}
        />
      ))}
    </ul>
  );
};

export default TaskList;

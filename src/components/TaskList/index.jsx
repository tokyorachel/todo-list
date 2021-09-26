import React from 'react';

import AddTask from '@/components/AddTask';
import Filter from '@/components/Filter';
import Progress from '@/components/Progress';
import Task from '@/components/Task';

import styles from './task-list.scss';

const TaskList = ({ tasks, update }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          desc={task.title}
          completed={task.completed}
          update={update}
        />
      ))}
    </ul>
  );
};

export default TaskList;

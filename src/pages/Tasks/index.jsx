import React, { useEffect, useState } from 'react';

import Filter from '@/components/Filter';
import Progress from '@/components/Progress';
import TaskList from '@/components/TaskList';
import AddTask from '@/components/AddTask';

import styles from './tasks.scss';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [list, setList] = useState(0);

  useEffect(() => {
    // TODO: move to app store
    fetch('http://localhost:3001/todos')
      .then((response) => response.json())
      .then((data) => {
        const sanitize = data.map((item) => {
          return { ...item, completed: item.completed === true };
        });
        const completed = sanitize.filter((task) => task.completed).length;
        setTasks(sanitize);
        setList(completed);
      });
  }, []);

  return (
    <div className="tasks-page">
      <Progress total={tasks.length} completed={list} />
      <header className="tasks-header">
        <h1>Tasks</h1>
        <Filter />
      </header>
      <TaskList tasks={tasks} />
      <AddTask />
    </div>
  );
};

export default Tasks;

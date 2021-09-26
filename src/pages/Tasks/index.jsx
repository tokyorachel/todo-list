import React, { useEffect, useState } from 'react';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

import Filter from '@/components/Filter';
import Progress from '@/components/Progress';
import TaskList from '@/components/TaskList';
import AddTask from '@/components/AddTask';

import styles from './tasks.scss';

const tasksState = atom({
  key: 'tasksState',
  default: [],
});

export { tasksState };

const filterState = atom({
  key: 'tasksFilterState',
  default: 'all',
});

const filteredTasksState = selector({
  key: 'filteredTasksState',
  get: ({ get }) => {
    const filter = get(filterState);
    const list = get(tasksState);

    switch (filter) {
      case 'completed':
        return list.filter((item) => item.completed);
      case 'incomplete':
        return list.filter((item) => !item.completed);
      default:
        return list;
    }
  },
});

const tasksInfo = selector({
  key: 'tasksInfo',
  get: ({ get }) => {
    const list = get(tasksState);
    const total = list.length;
    const completed = list.filter((task) => task.completed).length;

    return {
      total,
      completed,
    };
  },
});

const replaceItemAtIndex = (arr, index, newValue) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const Tasks = () => {
  const [tasks, setTasks] = useRecoilState(tasksState);
  const [filter, setFilter] = useRecoilState(filterState);
  const [filtered, setFiltered] = useRecoilState(filteredTasksState);
  const { total, completed } = useRecoilValue(tasksInfo);

  useEffect(() => {
    fetch('http://localhost:3001/todos')
      .then((response) => response.json())
      .then((data) => {
        const sanitized = data.map((item) => {
          return { ...item, completed: item.completed === true };
        });
        setTasks(sanitized);
      });
  }, []);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const addTask = (task) => {
    setTasks((prev) => {
      return [...prev, task];
    });
  };

  const updateTask = (task) => {
    const index = tasks.findIndex((tasksItem) => tasksItem.id === task.id);
    const newList = replaceItemAtIndex(tasks, index, task);
    setTasks(newList);
  };

  return (
    <div className="tasks-page">
      <Progress total={total} completed={completed} />
      <header className="tasks-header">
        <h1>Tasks</h1>
        <Filter onChange={updateFilter} />
      </header>
      <TaskList tasks={filtered} update={updateTask} />
      <AddTask update={addTask} />
    </div>
  );
};

export default Tasks;

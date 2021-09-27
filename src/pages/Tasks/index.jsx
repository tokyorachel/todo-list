import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import {
  tasksState,
  filterState,
  filteredTasksState,
  tasksInfo,
} from './store';

import Filter from '@/components/Filter';
import Progress from '@/components/Progress';
import TaskList from '@/components/TaskList';
import AddTask from '@/components/AddTask';

import styles from './tasks.scss';

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

  const constructQuery = ({ action, id, payload }) => {
    switch (action) {
      case 'DELETE':
        return {
          endpoint: `http://localhost:3001/todos/${id}`,
          method: 'DELETE',
          payload: { id },
          callback: remove,
          id,
        };
      case 'UPDATE':
        return {
          endpoint: `http://localhost:3001/todos/${id}`,
          method: 'PATCH',
          payload: payload,
          callback: update,
        };
      default:
        return {
          endpoint: `http://localhost:3001/todos`,
          method: 'POST',
          payload: payload,
          callback: update,
        };
    }
  };

  const dispatch = ({ action, id = null, payload = null }) => {
    const queryParams = constructQuery({ id, action, payload });
    updateTask(queryParams);
  };

  const updateTask = ({ endpoint, method, payload, callback }) => {
    fetch(endpoint, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.hasOwnProperty('id')) {
          callback({ ...data, completed: data.completed === true });
        } else {
          callback(payload.id);
        }
      });
  };

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const addTask = (task) => {
    setTasks((prev) => {
      return [...prev, task];
    });
  };

  const update = (task) => {
    const index = tasks.findIndex((tasksItem) => tasksItem.id === task.id);
    const newList =
      index >= 0
        ? [...tasks.slice(0, index), task, ...tasks.slice(index + 1)]
        : [...tasks, task];
    setTasks(newList);
  };

  const remove = (id) => {
    const index = tasks.findIndex((tasksItem) => tasksItem.id === id);
    const newList = [...tasks.slice(0, index), ...tasks.slice(index + 1)];
    setTasks(newList);
  };

  return (
    <div className="tasks-page">
      <Progress total={total} completed={completed} />
      <header className="tasks-header">
        <h1>Tasks</h1>
        <Filter onChange={updateFilter} />
      </header>
      <TaskList tasks={filtered} update={dispatch} />
      <AddTask update={dispatch} />
    </div>
  );
};

export default Tasks;

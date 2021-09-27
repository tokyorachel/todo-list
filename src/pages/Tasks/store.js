import { atom, selector } from 'recoil';

const tasksState = atom({
  key: 'tasksState',
  default: [],
});

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

export { tasksState, filterState, filteredTasksState, tasksInfo };

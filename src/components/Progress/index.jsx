import React, { useState, useEffect } from 'react';

import './progress.scss';

const Progress = ({ total = 0, completed = 0 }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (total) {
      const calculate = Math.round((completed / total) * 100);
      setPercent(calculate);
    }
  }, [total, completed]);

  return (
    <section className="progress">
      <h2 htmlFor="tasks-progress">Progress</h2>
      <progress id="tasks-progress" max="100" value={percent}>
        {percent}%
      </progress>
      <label>{completed} completed</label>
    </section>
  );
};

export default Progress;

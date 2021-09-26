import React from 'react';
import ReactDOM from 'react-dom';

import Tasks from '@/pages/Tasks';

import 'normalize.css';
import './scss/styles.scss';

class App extends React.Component {
  render() {
    return (
      <main className="page">
        <Tasks />
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

import Tasks from '@/pages/Tasks';

import 'normalize.css';
import './scss/styles.scss';

class App extends React.Component {
  render() {
    return (
      <main className="page">
        <RecoilRoot>
          <Tasks />
        </RecoilRoot>
      </main>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

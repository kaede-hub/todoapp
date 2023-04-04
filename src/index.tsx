import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/styles.scss'; //基本となるstyles.scssを読み込み

import App from './App'; //App.tsxの読み込み

ReactDOM.render(
  <React.StrictMode>
    <App /> {/*  App.tsxを読み込んでいる */}
  </React.StrictMode>,
  document.getElementById('root')
);

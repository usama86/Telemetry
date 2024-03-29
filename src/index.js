import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as indexapp from './indexApp';
import { runWithAdal } from 'react-adal';
import { authContext } from './adalConfig';
 
const DO_NOT_LOGIN = true;  //make it false if you want verification to work
 
runWithAdal(authContext, () => {
 
  // eslint-disable-next-line
  require('./indexApp.js');
 
},DO_NOT_LOGIN);

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './signIn/';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SignIn />, document.getElementById('signInRoot'));
registerServiceWorker();

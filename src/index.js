import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from './redux/store'
import App from './App'
import './App.css';

import registerServiceWorker from './registerServiceWorker';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';


const store = configureStore();

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,  document.getElementById('root'));
registerServiceWorker();

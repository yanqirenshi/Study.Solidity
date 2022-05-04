import React from 'react';
import ReactDOM from 'react-dom';

import store from './store'
import { Provider } from 'react-redux'

import { BrowserRouter } from "react-router-dom";

import App from './App.js';

import * as serviceWorkerRegistration from './js/serviceWorkerRegistration.js';
import reportWebVitals from './js/reportWebVitals.js';

import './index.css';

ReactDOM.render(
    <React.StrictMode>
 	<Provider store={store}>
	    <BrowserRouter>
		<App />
	    </BrowserRouter>
	</Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

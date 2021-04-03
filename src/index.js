import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 


import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer/reducer";
import thunk from "redux-thunk";
import Navigate from './Navigate';
import Registration from './Registration';
import Home from './Home';




const store=createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Navigate/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

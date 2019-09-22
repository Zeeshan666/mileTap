import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,compose} from 'redux';
import {Provider } from 'react-redux';
import rootReducer from './Reducer/RootReducer'
import thunk from 'redux-thunk';

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer,  initialState,compose(
    applyMiddleware(...middleware)
  ));

ReactDOM.render(<Provider store={store}><App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

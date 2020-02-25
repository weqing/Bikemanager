/**
 * 引入createStore创建Store
 */
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './../reducer';
//import { composeWithDevools } from 'redux-devtools-extension';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
    applyMiddleware()
));

export default store;
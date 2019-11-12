import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import skillsReducer from '../reducers/skillsReducer'
import createSagaMiddleware from 'redux-saga';
import saga from '../saga/saga';

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({ skillsStore: skillsReducer });

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

export default store;

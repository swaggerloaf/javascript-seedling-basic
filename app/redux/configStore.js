import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers/index';
import thunk from 'redux-thunk';
import * as actions from '../redux/actions/todoActions';
//import createSagaMiddleware from 'redux-saga';
//import { helloSaga } from './sagas/helloSaga';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
//store.dispatch(actions.loadAllTodos());
//sagaMiddleware.run(helloSaga);

export default store;

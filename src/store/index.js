import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';


const SagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(SagaMiddleware));
SagaMiddleware.run(rootSaga);

const store = createStore(rootReducer);

export default store;

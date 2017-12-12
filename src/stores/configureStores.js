import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = (preloadedState) => {
    if (!preloadedState) {
        preloadedState = window.__PRELOADED_STATE__;
        delete window.__PRELOADED_STATE__;
    }
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(
            rootReducer,
            preloadedState,
            applyMiddleware(sagaMiddleware)
        ),
        runSaga: sagaMiddleware.run(rootSaga)
    };
};

export default configureStore;

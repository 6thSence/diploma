import createLogger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux'

import DevTools from '../containers/DevTools/DevTools';
import rootReducer from '../reducers'
import { updatePoints } from '../middleware/updatePoints';

export default function configureStore(initialState) {
    const logger = createLogger();
    const enhancers = compose(
        applyMiddleware(logger,
            updatePoints),
        DevTools.instrument()
    );
    const store = createStore(
        rootReducer,
        initialState,
        enhancers);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store;
}
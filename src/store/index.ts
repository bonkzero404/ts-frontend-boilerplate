import { createHashHistory, createBrowserHistory, History } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

let hst: History;
let nodeEnv: string;

/**
 * Error handling env for unit test
 */
try {
  nodeEnv = NODE_ENV;
  hst = ELECTRON
    ? createHashHistory()
    : createBrowserHistory({ basename: WEB_BASE_PATH });
} catch (err) {
  hst = createBrowserHistory();
  nodeEnv = 'production';
}

export const history = hst;

export default function configureStore(preloadedState?: any) {
  const composeEnhancer: typeof compose =
    nodeEnv === 'development'
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      : compose;

  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(applyMiddleware(thunk, routerMiddleware(history)))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createRootReducer(history));
    });
  }

  return store;
}

import { createHashHistory, createBrowserHistory, History } from 'history';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

export const envHistory = () => {
  let tmpHistory: History;
  let nodeEnv: string;

  /**
   * Error handling env for unit test
   */
  try {
    nodeEnv = NODE_ENV;
    tmpHistory = ELECTRON
      ? createHashHistory()
      : createBrowserHistory({ basename: WEB_BASE_PATH });
  } catch (err) {
    tmpHistory = createBrowserHistory();
    nodeEnv = 'production';
  }

  return { tmpHistory, nodeEnv };
};

export const history = envHistory().tmpHistory;

export const moduleHotAccept = (mod: any, store: Store) => {
  if (mod.hot) {
    // Enable Webpack hot module replacement for reducers
    mod.hot.accept('./reducers', () => {
      store.replaceReducer(createRootReducer(history));
    });
  }
};

export default function configureStore(preloadedState?: any) {
  const composeEnhancer: typeof compose =
    envHistory().nodeEnv === 'development'
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      : compose;

  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(applyMiddleware(thunk, routerMiddleware(history)))
  );

  moduleHotAccept(module, store);

  return store;
}

import { createHashHistory, createBrowserHistory, History } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

let hst: History;

try {
  hst = ELECTRON
    ? createHashHistory()
    : createBrowserHistory({ basename: `/${WEB_BASE_PATH}` });
} catch (err) {
  hst = createBrowserHistory();
}

export const history = hst;

export default function configureStore(preloadedState?: any) {
  const composeEnhancer: typeof compose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
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

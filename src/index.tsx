import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import configureStore, { history } from './store';
import App from './App';

OfflinePluginRuntime.install();

const store = configureStore();

// eslint-disable-next-line import/prefer-default-export
export const MainApp = () => {
  return (
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>
  );
};

const render = () => {
  ReactDOM.render(<MainApp />, document.getElementById('app'));
};

if (module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
}

render();

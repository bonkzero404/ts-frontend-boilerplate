import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import configureStore, { history } from './store';
import App from './App';

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
  document.getElementById('app'));
}

if (module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
}

render();

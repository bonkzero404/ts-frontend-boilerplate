import * as React from 'react';
import { mount } from '../setup/test-setup';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import * as ReactTestRenderer from 'react-test-renderer';
import { Switch } from 'react-router-dom';
import configureStore, { history } from '../../src/store';

const mockStore = configureStore();

const mockDispatchfn = jest.fn();

const Comps = (Child: any, props: any) =>
  <Provider store={mockStore}>
    <ConnectedRouter history={history}>
      <Switch>
        <Child {...props} dispatch={mockDispatchfn} />
      </Switch>
    </ConnectedRouter>
  </Provider>

export const mountComponent = (Component: any, props: any) => mount(Comps(Component, props));

export const rendererComponent = (Component: any, props: any) => ReactTestRenderer.create(
  <Comps {...Component} {...props} />
)



import { createHashHistory, createBrowserHistory } from 'history';
import dotenv from 'dotenv';
import configureStore, { moduleHotAccept, envHistory } from '../../src/store';
import createRootReducer from '../../src/store/reducers';

dotenv.config();

describe('store', () => {
  it('hot module reducer', () => {
    const accept = jest.fn();
    const mockModule = { hot: { accept } };
    moduleHotAccept(mockModule, configureStore());

    expect(accept).toHaveBeenCalled();
  });
});

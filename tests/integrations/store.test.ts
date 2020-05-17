import configureStore, { moduleHotAccept } from '../../src/store';

describe('store', () => {
  it('hot module reducer', () => {
    const accept = jest.fn();
    const mockModule = { hot: { accept } };
    moduleHotAccept(mockModule, configureStore());

    expect(accept).toHaveBeenCalled();
  });
});

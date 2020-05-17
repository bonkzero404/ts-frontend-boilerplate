import reducer from '../../../src/store/counter/reducers';
import {
  IStateCount,
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
} from '../../../src/store/counter/types';

const initialState: IStateCount = {
  count: 5,
};

describe('Counter reducer', () => {
  it('Counter increment', () => {
    expect(
      reducer(initialState, {
        type: COUNTER_INCREMENT,
      })
    ).toEqual({
      count: 6,
    });
  });

  it('Counter decrement', () => {
    expect(
      reducer(initialState, {
        type: COUNTER_DECREMENT,
      })
    ).toEqual({
      count: 4,
    });
  });
});

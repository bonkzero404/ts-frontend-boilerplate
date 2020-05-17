import * as actions from '../../../src/store/counter/actions';
import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  IActionAdd,
  IActionMin,
} from '../../../src/store/counter/types';

describe('actions', () => {
  it('increment counter', () => {
    const expectedAction: IActionAdd = {
      type: COUNTER_INCREMENT,
    };

    expect(actions.counterIncrement()).toEqual(expectedAction);
  });

  it('decrement counter', () => {
    const expectedAction: IActionMin = {
      type: COUNTER_DECREMENT,
    };

    expect(actions.counterDecrement()).toEqual(expectedAction);
  });
});

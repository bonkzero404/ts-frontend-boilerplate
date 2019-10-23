import { COUNTER_INCREMENT, COUNTER_DECREMENT, IStateCount, CounterActions } from './types';

const initialState: IStateCount = {
  count: 0
};

export default function counterReducer(state = initialState, action: CounterActions): IStateCount {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case COUNTER_DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    default:
        return state;
  }
}

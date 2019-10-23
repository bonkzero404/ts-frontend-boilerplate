import { COUNTER_INCREMENT, COUNTER_DECREMENT, IActionAdd, IActionMin } from './types';

export function counterIncrement(): IActionAdd {
  return { type: COUNTER_INCREMENT };
}

export function counterDecrement(): IActionMin {
  return { type: COUNTER_DECREMENT };
}

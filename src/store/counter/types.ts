import { Action } from 'redux';

export const COUNTER_INCREMENT: string = '@@COUNTER/INCREMENT';
export const COUNTER_DECREMENT: string = '@@COUNTER/DECREMENT';

/**
 * State
 */
export interface IStateCount {
  count: number;
}

/**
 * Action
 */
export interface IActionAdd extends Action {
  type: typeof COUNTER_INCREMENT;
}

export interface IActionMin extends Action {
  type: typeof COUNTER_DECREMENT;
}


export type CounterActions = IActionAdd | IActionMin;





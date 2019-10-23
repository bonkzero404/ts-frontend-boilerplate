import { combineReducers } from 'redux';
import { History } from 'history';
import { RouterState, connectRouter } from 'connected-react-router';
import { IStateCount } from './counter/types';
import counterReducer from './counter/reducers';

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  counter: counterReducer
});

export interface State {
  router: RouterState;
  counter: IStateCount;
};

export default rootReducer;

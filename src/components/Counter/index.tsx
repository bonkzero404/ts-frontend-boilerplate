import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { State } from '../../store/reducers';
import { counterIncrement, counterDecrement } from '../../store/counter/actions';
import * as Style from './Style.scss';

type TProps =
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const Counter: React.FunctionComponent<TProps> = (props) => {
  return (
    <div className={Style.container}>
      <div className={Style.box}>
        <h1 className={Style.countText}>{props.counter}</h1>
        <button className={Style.btnCount} onClick={props.counterIncrement}>+</button>
        <button className={Style.btnCount} onClick={props.counterDecrement}>-</button>
        <p>Go to <Link to="/">Home</Link> for now</p>
        <p>You are here : {props.pathname}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state: State) => ({
  pathname: state.router.location.pathname,
  counter: state.counter.count
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    counterIncrement,
    counterDecrement
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { State } from '../../store/reducers';
import * as Style from './Common.scss';

type TProps = ReturnType<typeof mapStateToProps>;

const Common: React.FunctionComponent<TProps> = (props) =>
  <div className={Style.container}>
    <div className={Style.box}>
      <img className={Style.logo} src={require('../../../public/logo192.png')} />
      <h1 className={Style.headText}>React JS</h1>
      <p>Horay <Link to="/counter">Click Me</Link> to play counter</p>
      <p>You are here : {props.pathname}</p>
    </div>
  </div>;

const mapStateToProps = (state: State) => ({
  pathname: state.router.location.pathname,
});

export default connect(
  mapStateToProps,
  {}
)(Common);

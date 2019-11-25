import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { State } from '../../store/reducers';
import * as Style from './Style.scss';
import ImageLogo from '../../assets/images/logo.png';

type TProps = ReturnType<typeof mapStateToProps>;

const Common: React.FunctionComponent<TProps> = (props) => {
  return (
    <div className={Style.container}>
      <div className={Style.box}>
        <img className={Style.logo} src={ImageLogo} />
        <h1 className={Style.headText}>React JS</h1>
        <p>Horay <Link to="/counter">Click Me</Link> to play counter</p>
        <p>You are here : {props.pathname}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  pathname: state.router.location.pathname,
});

export default hot(connect(
  mapStateToProps,
  {}
)(Common));

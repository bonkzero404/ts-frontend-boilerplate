import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { State } from '../../store/reducers';
import * as Style from './Style.scss';
import ImageLogo from '../../assets/images/logo.png';

const mapStateToProps = (state: State) => ({
  pathname: state.router.location.pathname,
});

type TProps = ReturnType<typeof mapStateToProps>;

const Common: React.FunctionComponent<TProps> = (props: TProps) => {
  return (
    <div className={Style.container}>
      <div className={Style.box}>
        <LazyLoadImage className={Style.logo} src={ImageLogo} alt="Logo" />
        <h1 className={Style.headText}>React JS</h1>
        <p>
          Horay <Link to="/counter">Click Me</Link> to play counter
        </p>
        <p>You are here :{props.pathname}</p>
      </div>
    </div>
  );
};

export default hot(connect(mapStateToProps, {})(Common));

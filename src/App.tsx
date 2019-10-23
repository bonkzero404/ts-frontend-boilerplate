import * as React from 'react';
import { History } from 'history'
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Common from './components/Common';
import Counter from './components/Counter';
import './scss/app.scss';

interface AppProps {
  history: History;
}

const App = ({ history }: AppProps) =>  (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Common} />
      <Route path="/counter" component={Counter} />
    </Switch>
  </ConnectedRouter>
);

export default App;


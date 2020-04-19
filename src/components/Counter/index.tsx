import React, { Suspense, FunctionComponent, lazy } from 'react';

const LoadableComponent = lazy(() =>
  import(/* webpackPrefetch: true */ './Counter')
);

const Loading = () => <div>Loading</div>;

const Counter: FunctionComponent<{}> = () => (
  <Suspense fallback={<Loading />}>
    <LoadableComponent />
  </Suspense>
);

export default Counter;

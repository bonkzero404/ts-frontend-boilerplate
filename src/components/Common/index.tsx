import React, { Suspense, FunctionComponent, lazy } from 'react';

const LoadableComponent = lazy(() =>
  import(/* webpackPrefetch: true */ './Common')
);

const Loading = () => <div>Loading</div>;

const Common: FunctionComponent<{}> = () => (
  <Suspense fallback={<Loading />}>
    <LoadableComponent />
  </Suspense>
);

export default Common;

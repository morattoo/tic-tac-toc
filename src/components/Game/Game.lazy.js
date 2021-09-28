import React, { lazy, Suspense } from 'react';

const LazyGame = lazy(() => import('./Game'));

const Game = props => (
  <Suspense fallback={null}>
    <LazyGame {...props} />
  </Suspense>
);

export default Game;

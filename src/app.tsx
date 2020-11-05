import { h, FunctionComponent, Fragment } from 'preact';

import AsyncRoute from './components/asyncRoute';
import Redirect from './components/redirect';
import AnimatedRouter from './components/animatedRouter';
import Home from './views/home';

const App: FunctionComponent = () => {
  return (
    <Fragment>
      <div style="padding: 0.5rem 2rem; background: #292a2c">
        NAV <a href="/home">home</a> <a href="/home2">home2</a>
      </div>
      <div style="overflow-x: hidden; padding: 2rem">
        <AnimatedRouter
          routes={[
            <AsyncRoute
              path="/home"
              component={() => import(/*webpackChunkName: "HomeView"*/ './views/home')}
            />,
            <AsyncRoute
              path="/home2"
              component={() => import(/*webpackChunkName: "HomeView2"*/ './views/home2')}
            />,
          ]}
        >
          <Redirect to="/home" path="/"></Redirect>
          <div default>
            Error <a href="/home">home</a>
          </div>
        </AnimatedRouter>
      </div>
    </Fragment>
  );
};

export default App;

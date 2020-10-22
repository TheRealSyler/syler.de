import { h, FunctionComponent, JSX, ComponentChildren, Fragment } from 'preact';
import Router, { Route } from 'preact-router';
import { useState } from 'preact/hooks';
import AsyncRoute from './components/asyncRoute';
import Redirect from './components/redirect';
import MainLayout from './layouts/main';

const routes = [
  <AsyncRoute
    path="/home"
    component={() => import(/*webpackChunkName: "HomeView"*/ './views/home')}
  />,
  <AsyncRoute
    path="/home2"
    component={() => import(/*webpackChunkName: "HomeView"*/ './views/home')}
  />,
].map((route) => wrapRoute(route));

function wrapRoute(route: h.JSX.Element): h.JSX.Element {
  return (
    <div path={route.props.path} class="in page" key={route.props.path}>
      {route}
    </div>
  );
}

const App: FunctionComponent = () => {
  const [previousEl, setPreviousEl] = useState<ComponentChildren | null>(null);
  const [outEl, setOutEl] = useState<JSX.Element | null>(null);

  return (
    <Fragment>
      <div style="background: #333; padding: 4rem;">NAV</div>
      <div style="position: relative">
        <Router
          onChange={(e) => {
            if (previousEl) {
              setOutEl(
                <div class="out page" key={e.previous} onAnimationEnd={() => setOutEl(null)}>
                  {previousEl}
                </div>
              );
            }
            if (e.current) {
              setPreviousEl(e.current.props.children);
            }
          }}
        >
          {routes}
          <Redirect to="/home" path="/"></Redirect>
          <div path="*" default>
            ERROR TODO <a href="/home">home</a>
          </div>
        </Router>
        {outEl}
      </div>
    </Fragment>
  );
};

export default App;

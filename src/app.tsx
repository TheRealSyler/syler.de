import { h, FunctionComponent } from 'preact';
import Router from 'preact-router';

import AsyncRoute from './components/asyncRoute';
import Redirect from './components/redirect';
import MainLayout from './layouts/main';

const App: FunctionComponent = () => {
  return (
    <Router>
      <AsyncRoute
        path="/home"
        layout={MainLayout}
        component={() => import(/*webpackChunkName: "HomeView"*/ './views/home')}
      />

      <Redirect to="/home" path="/"></Redirect>
    </Router>
  );
};

export default App;

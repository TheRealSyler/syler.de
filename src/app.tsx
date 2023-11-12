import { Fragment, type FunctionComponent } from 'preact'
import logo from './assets/logo.jpg'
import AnimatedRouter from './components/animatedRouter'
import AsyncRoute from './components/asyncRoute'
import Redirect from './components/redirect'

const App: FunctionComponent = () => (
  <Fragment>
    <div class='nav' style="padding: 0.5rem 1rem; display: flex; align-items: center; gap: 1rem;">
      <img alt='logo' src={logo} style="width: 50px; border-radius: 50%"></img>
      <a href="/home">home</a>
      <a href="/home2">home2</a>
    </div>
    <div style="overflow-x: hidden; padding: 2rem">
      <AnimatedRouter
        animation="bot"
        routes={[
          <AsyncRoute
            path="/home"
            component={() => import('./views/home')}
          />,
          <AsyncRoute
            path="/home2"
            component={() => import('./views/home2')}
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
)
export default App

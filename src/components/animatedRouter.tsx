import { h, FunctionComponent, ComponentChildren } from 'preact';
import Router from 'preact-router';
import { useState } from 'preact/hooks';
import './animatedRouter.sass';

export type PageTransitionAnimation = 'bot' | 'top' | 'left' | 'right' | 'fade';

interface AnimatedRouterProps {
  layout?: FunctionComponent;
  routes: h.JSX.Element[];
  animation?: PageTransitionAnimation;
}

function wrapRoute(
  route: h.JSX.Element,
  animation: NonNullable<AnimatedRouterProps['animation']>
): h.JSX.Element {
  return (
    <div path={route.props.path} class={`a-router-in-${animation}`} key={route.props.path}>
      {route}
    </div>
  );
}

const AnimatedRouter: FunctionComponent<AnimatedRouterProps> = (props) => {
  const { children, layout: Layout, routes, animation = 'left' } = props;
  const [previousEl, setPreviousEl] = useState<ComponentChildren | null>(null);
  const [outEl, setOutEl] = useState<h.JSX.Element | null>(null);

  const page = (
    <div style="position: relative; overflow: hidden">
      <Router
        onChange={(e) => {
          if (previousEl) {
            setOutEl(
              <div
                class={`a-router-out-${animation}`}
                key={e.previous}
                onAnimationEnd={() => setOutEl(null)}
              >
                {previousEl}
              </div>
            );
          }
          if (e.current) {
            setPreviousEl(e.current.props.children);
          }
        }}
      >
        {routes.map((route) => wrapRoute(route, animation))}
        {children}
      </Router>
      {outEl}
    </div>
  );

  if (Layout) {
    return <Layout>{page}</Layout>;
  }
  return page;
};

export default AnimatedRouter;

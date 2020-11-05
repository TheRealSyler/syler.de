import { h, FunctionComponent } from 'preact';
import { Suspense, lazy } from 'preact/compat';

interface AsyncRouteProps {
  component: () => Promise<{ default: any }>; // TODO: (low priority), find the type for any
}

const AsyncRoute: FunctionComponent<AsyncRouteProps> = (props) => {
  const { component } = props;
  const Component = lazy(component);

  return (
    <Suspense fallback={<div></div>}>
      <Component {...props} />
    </Suspense>
  );
};

export default AsyncRoute;

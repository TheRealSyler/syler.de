import { h, FunctionComponent } from 'preact';
import { Suspense, lazy } from 'preact/compat';

interface AsyncRouteProps {
  layout?: FunctionComponent;
  component: () => Promise<{ default: any }>; // TODO: (low priority), find the type for any
}

const AsyncRoute: FunctionComponent<AsyncRouteProps> = (props) => {
  const { component, layout: Layout } = props;
  const Component = lazy(component);
  if (Layout) {
    return (
      <Layout>
        <Suspense fallback={<div></div>}>
          <Component {...props} />
        </Suspense>
      </Layout>
    );
  }
  return (
    <Suspense fallback={<div></div>}>
      <Component {...props} />
    </Suspense>
  );
};

export default AsyncRoute;

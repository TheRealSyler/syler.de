import type { FunctionComponent } from 'preact'
import { Suspense, lazy } from 'preact/compat'

type AsyncRouteProps = {
  path: string
  component: () => Promise<{ default: FunctionComponent }>
}

const AsyncRoute: FunctionComponent<AsyncRouteProps> = (props) => {
  const { component } = props
  const Component = lazy(component)

  return (
    <Suspense fallback={<div></div>}>
      <Component {...props} />
    </Suspense>
  )
}

export default AsyncRoute

import { FunctionComponent } from 'preact';
import { route } from 'preact-router';

interface RedirectProps {
  to: string;
}

const Redirect: FunctionComponent<RedirectProps> = (props) => {
  const { to } = props;
  route(to, true);
  return null;
};

export default Redirect;

import { h, FunctionComponent } from 'preact';

const Home: FunctionComponent = () => {
  return (
    <div>
      <a href="/error">error</a>
      <br />
      <a href="/home">home</a>
      <br />

      <a href="/home2">home 2 </a>
    </div>
  );
};

export default Home;

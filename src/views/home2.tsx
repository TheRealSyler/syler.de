import { h, FunctionComponent } from 'preact';

const Home2: FunctionComponent = () => {
  return <div>
    Wow Another page
    <br />
    <div style="display: flex; gap: 0.5rem; flex-direction: column">

      <span style="padding: 2rem; border-radius: 10px; background-color: var(--primary-color-100)">--primary-color-100</span>
      <span style="padding: 2rem; border-radius: 10px; background-color: var(--primary-color-80)">--primary-color-80</span>
      <span style="padding: 2rem; border-radius: 10px; background-color: var(--primary-color-60)">--primary-color-60</span>
      <span style="padding: 2rem; border-radius: 10px; background-color: var(--primary-color-40)">--primary-color-40</span>
      <span style="padding: 2rem; border-radius: 10px; background-color: var(--primary-color-20)">--primary-color-20</span>
      <span style="padding: 2rem; border-radius: 10px; background-color: var(--primary-color-10)">--primary-color-10</span>

    </div>
  </div>;
};

export default Home2;

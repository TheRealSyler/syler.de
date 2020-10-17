import { h, FunctionComponent } from 'preact';

const MainLayout: FunctionComponent = (props) => {
  const { children } = props;
  return (
    <div>
      <header style="height: 40px; background: #444"></header>
      <div style="display: flex">
        <div style="width: 200px; background: #333; height: calc(100vh - 40px)"></div>
        <main style="padding: 2rem">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;

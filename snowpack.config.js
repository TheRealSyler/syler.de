
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@prefresh/snowpack',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    "@snowpack/plugin-sass",
    "./snowpack-plugin-add-import.js"
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    open: 'none'
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};

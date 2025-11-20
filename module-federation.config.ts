export const mfConfig = {
  name: "vue_app",
  fileName: "remoteEntry.js",
  remotes: {
    dashboard: "dashboard@http://localhost:3000/remoteEntry.js"
  },
  exposes: {},
  shared: ["vue","react", "react-dom"],
};

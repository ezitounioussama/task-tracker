const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
<<<<<<< HEAD
=======

module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:5000/",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};
>>>>>>> 3cf7662 (Changing the whole app to A crud app with json-server)

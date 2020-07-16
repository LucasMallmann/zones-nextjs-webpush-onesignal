const withPWA = require("next-pwa");

module.exports = withPWA({
  assetPrefix: "/",
  env: {
    ASSET_PREFIX: "/",
  },

  pwa: {
    dest: "public",
  },
});

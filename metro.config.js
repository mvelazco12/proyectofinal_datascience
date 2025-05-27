const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);
  config.resolver.blockList = [
    /backend\/.*/, // Ignora todo dentro de la carpeta backend
  ];
  return config;
})();
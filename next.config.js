// next.config.js
module.exports = {
    reactStrictMode: true,
    pageExtensions: ['tsx', 'ts', 'jsx', 'js'], // Optional if you want to specify extensions
    webpack(config) {
      config.resolve.modules.push(__dirname + '/src'); // Ensures the pages directory inside src is resolved
      return config;
    },
  };
  
  
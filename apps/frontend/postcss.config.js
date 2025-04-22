// postcss.config.js
module.exports = {
    plugins: [
      require('@tailwindcss/postcss7-compat'), // Use the new plugin package
      require('autoprefixer'),
    ]
  };
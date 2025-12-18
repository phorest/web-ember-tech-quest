'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-cli-babel': { enableTypeScriptTransform: true },
    autoImport: {
      watchDependencies: ['ember-truth-helpers'],
    },
    emberData: {
      deprecations: {
        DEPRECATE_STORE_EXTENDS_EMBER_OBJECT: false,
      },
    },
    postcssOptions: {
      compile: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  });

  return app.toTree();
};

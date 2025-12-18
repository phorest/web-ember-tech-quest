/* eslint-env node */

'use strict';

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'web-ember-tech-quest',
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: {
      FEATURES: {},
      EXTEND_PROTOTYPES: false,
    },

    APP: {},
  };

  if (environment === 'development') {
    ENV['ember-cli-mirage'] = {
      enabled: true,
    };
  }

  if (environment === 'test') {
    ENV.locationType = 'none';
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // production-specific configuration
  }

  return ENV;
};

/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    minifyJS: {
      enabled: false
    },
    jsdoc:{
      configFile:".jsdoc",
      generateOnBuild: true
    },
    snippetPaths: ['tests/dummy/snippets'],
    snippetSearchPaths: ['app', 'tests/dummy/app', 'addon'],

    emberCliFontAwesome: {
      useScss: true
    },

    babel: {
      includePolyfill: true
    }
  });

  /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  app.import('vendor/dummy-deps/rx.js');

  return app.toTree();
};

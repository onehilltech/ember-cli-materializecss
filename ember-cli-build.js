/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    sassOptions: {
      includePaths: [
        'bower_components/materialize/sass'
      ]
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  app.import ({
    development: 'bower_components/materialize/dist/css/materialize.css',
    production: 'bower_components/materialize/dist/css/materialize.min.css'
  });

  app.import ({
    development: 'bower_components/materialize/dist/js/materialize.js',
    production: 'bower_components/materialize/dist/js/materialize.min.js'
  });

  app.import ('bower_components/materialize/fonts/roboto/Roboto-Bold.woff', {destDir: 'fonts/roboto'});
  app.import ('bower_components/materialize/fonts/roboto/Roboto-Bold.woff2', {destDir: 'fonts/roboto'});
  app.import ('bower_components/materialize/fonts/roboto/Roboto-Light.woff', {destDir: 'fonts/roboto'});
  app.import ('bower_components/materialize/fonts/roboto/Roboto-Light.woff2', {destDir: 'fonts/roboto'});
  app.import ('bower_components/materialize/fonts/roboto/Roboto-Medium.woff', {destDir: 'fonts/roboto'});
  app.import ('bower_components/materialize/fonts/roboto/Roboto-Medium.woff2', {destDir: 'fonts/roboto'});
  app.import ('bower_components/materialize/fonts/roboto/Roboto-Regular.woff', {destDir: 'fonts/roboto'});
  app.import ('bower_components/materialize/fonts/roboto/Roboto-Regular.woff2', {destDir: 'fonts/roboto'});
  app.import ('bower_components/materialize/fonts/roboto/Roboto-Thin.woff', {destDir: 'fonts/roboto'});
  app.import ('bower_components/materialize/fonts/roboto/Roboto-Thin.woff2', {destDir: 'fonts/roboto'});

  return app.toTree();
};

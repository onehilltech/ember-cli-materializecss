/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-materializecss',

  included: function(app) {
    this._super.included.apply (this, arguments);

    // assets
    app.import (app.bowerDirectory + '/materialize/dist/js/materialize.min.js');
    app.import (app.bowerDirectory + '/materialize/dist/css/materialize.min.css');

    // fonts
    app.import (app.bowerDirectory + '/materialize/fonts/roboto/Roboto-Bold.woff', {destDir: 'fonts/roboto'});
    app.import (app.bowerDirectory + '/materialize/fonts/roboto/Roboto-Bold.woff2', {destDir: 'fonts/roboto'});
    app.import (app.bowerDirectory + '/materialize/fonts/roboto/Roboto-Light.woff', {destDir: 'fonts/roboto'});
    app.import (app.bowerDirectory + '/materialize/fonts/roboto/Roboto-Light.woff2', {destDir: 'fonts/roboto'});
    app.import (app.bowerDirectory + '/materialize/fonts/roboto/Roboto-Medium.woff', {destDir: 'fonts/roboto'});
    app.import (app.bowerDirectory + '/materialize/fonts/roboto/Roboto-Medium.woff2', {destDir: 'fonts/roboto'});
    app.import (app.bowerDirectory + '/materialize/fonts/roboto/Roboto-Regular.woff', {destDir: 'fonts/roboto'});
    app.import (app.bowerDirectory + '/materialize/fonts/roboto/Roboto-Regular.woff2', {destDir: 'fonts/roboto'});
    app.import (app.bowerDirectory + '/materialize/fonts/roboto/Roboto-Thin.woff', {destDir: 'fonts/roboto'});
    app.import (app.bowerDirectory + '/materialize/fonts/roboto/Roboto-Thin.woff2', {destDir: 'fonts/roboto'});
  }
};


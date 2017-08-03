/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-materializecss',

  included: function (app) {
    this._super.included.apply (this, arguments);

    // assets
    app.import ({
      development: app.bowerDirectory + '/materialize/dist/js/materialize.js',
      production:  app.bowerDirectory + '/materialize/dist/js/materialize.min.js'
    });

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

    app.import (app.bowerDirectory + '/material-design-icons/iconfont/MaterialIcons-Regular.eot', {destDir: 'fonts/material-design-icons'});
    app.import (app.bowerDirectory + '/material-design-icons/iconfont/MaterialIcons-Regular.tff', {destDir: 'fonts/material-design-icons'});
    app.import (app.bowerDirectory + '/material-design-icons/iconfont/MaterialIcons-Regular.woff', {destDir: 'fonts/material-design-icons'});
    app.import (app.bowerDirectory + '/material-design-icons/iconfont/MaterialIcons-Regular.woff2', {destDir: 'fonts/material-design-icons'});
  },

  contentFor (type, config) {
    let materialize = config.APP.materialize;
    let embedFonts = materialize && materialize.embedIconFont

    if (type === 'head-footer' && !embedFonts) {
      return '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />';
    }
  }
};


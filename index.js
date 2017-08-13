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

    app.import (app.bowerDirectory + '/material-design-icons/iconfont/MaterialIcons-Regular.eot', {destDir: 'assets/fonts/material-design-icons'});
    app.import (app.bowerDirectory + '/material-design-icons/iconfont/MaterialIcons-Regular.tff', {destDir: 'assets/fonts/material-design-icons'});
    app.import (app.bowerDirectory + '/material-design-icons/iconfont/MaterialIcons-Regular.woff', {destDir: 'assets/fonts/material-design-icons'});
    app.import (app.bowerDirectory + '/material-design-icons/iconfont/MaterialIcons-Regular.woff2', {destDir: 'assets/fonts/material-design-icons'});
  },

  contentFor (type, config) {
    if (type === 'head-footer') {
      let materialize = config.materialize;
      let embedFonts = materialize && materialize.embedIconFonts;

      if (!embedFonts) {
        this.ui.writeLine ('Linking materialize icon fonts');
        return '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />';
      }
      else {
        this.ui.writeLine ('Embedding materialize icon fonts');
      }
    }
  }
};

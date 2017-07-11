module.exports = {
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  afterInstall: function() {
    return this.addBowerPackagesToProject ([
      {name: 'materialize', target: '0.99.0'}
    ]).then (() => {
      // Add npm packages to package.json
      return this.addPackagesToProject([
        {name: 'ember-cli-sass'}
      ]);
    })
  }
};

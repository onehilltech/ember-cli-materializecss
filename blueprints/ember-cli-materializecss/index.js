module.exports = {
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  afterInstall: function() {
    return this.addBowerPackagesToProject ([
      {name: 'materialize', target: '0.99.0'}
    ]).then (() => {
      return this.addAddonsToProject({
        packages: [
          {name: 'ember-cli-sass'}
        ]
      })
    })
  }
};

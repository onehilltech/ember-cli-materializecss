import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('materialize-breadcrumbs', 'Integration | Component | materialize breadcrumbs', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{materialize-breadcrumbs}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#materialize-breadcrumbs}}
      template block text
    {{/materialize-breadcrumbs}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

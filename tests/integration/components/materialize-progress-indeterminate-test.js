import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('materialize-progress-indeterminate', 'Integration | Component | materialize progress indeterminate', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{materialize-progress-indeterminate}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#materialize-progress-indeterminate}}
      template block text
    {{/materialize-progress-indeterminate}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

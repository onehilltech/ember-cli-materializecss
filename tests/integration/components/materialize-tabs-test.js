import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('materialize-tabs', 'Integration | Component | materialize tabs', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{materialize-tabs}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#materialize-tabs}}
      template block text
    {{/materialize-tabs}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

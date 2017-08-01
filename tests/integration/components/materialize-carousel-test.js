import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('materialize-carousel', 'Integration | Component | materialize carousel', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{materialize-carousel}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#materialize-carousel}}
      template block text
    {{/materialize-carousel}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

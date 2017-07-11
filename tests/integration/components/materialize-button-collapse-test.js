import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('materialize-button-collapse', 'Integration | Component | materialize button collapse', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{materialize-button-collapse}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#materialize-button-collapse}}
      template block text
    {{/materialize-button-collapse}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

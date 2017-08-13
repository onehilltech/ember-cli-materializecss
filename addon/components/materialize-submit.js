import Ember from 'ember';
import layout from '../templates/components/materialize-submit';

export default Ember.Component.extend({
  tagName: 'input',

  layout: layout,

  attributeBindings: ['disabled', 'type', 'value'],

  type: 'submit',

  value: 'Submit'
});

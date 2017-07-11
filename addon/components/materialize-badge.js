import Ember from 'ember';
import layout from '../templates/components/materialize-badge';

export default Ember.Component.extend({
  layout,
  tagName: 'span',
  classNames: ['badge'],
  classNameBindings: ['showBackground:new'],
  attributeBindings: ['caption:data-badge-caption']
});

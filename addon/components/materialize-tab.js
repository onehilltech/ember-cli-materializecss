import Ember from 'ember';
import layout from '../templates/components/materialize-tab';

export default Ember.Component.extend({
  layout,

  tagName: 'li',
  classNames: ['tab'],
});

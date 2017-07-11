import Ember from 'ember';
import layout from '../templates/components/materialize-breadcrumbs';

export default Ember.Component.extend({
  layout,
  tagName: 'a',
  classNames: ['breadcrumb'],
  attributeBindings: ['href']
});

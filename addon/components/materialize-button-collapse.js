import Ember from 'ember';
import layout from '../templates/components/materialize-button-collapse';

export default Ember.Component.extend({
  layout,

  tagName: 'a',

  classNames: ['button-collapse'],

  attributeBindings: ['activates:data-activates'],

  didInsertElement () {
    this._super (...arguments);

    this.$ (this.element).sideNav ({
      closeOnClick: true
    });
  }
});

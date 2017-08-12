import Ember from 'ember';
import layout from '../templates/components/materialize-textfield';
import TextFieldMixin from '../-private/mixins/text-field';

export default Ember.TextField.extend (TextFieldMixin, {
  layout,

  classNames: ['materialize-input'],

  classNameBindings: ['validate'],

  validate: true,

  type: 'text',

  init () {
    this._super (...arguments);
    this.set ('_initValue', this.get ('value'));
  },

  didUpdateAttrs () {
    this._super (...arguments);
    this._didUpdateAttrs (...arguments);
  },

  didInsertElement () {
    this._super (...arguments);
    this._didInsertElement (...arguments);
  },
});

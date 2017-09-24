import Ember from 'ember';
import layout from '../templates/components/materialize-textfield';
import InputFieldMixin from '../-private/mixins/input-field';
import TextInputFieldMixin from '../-private/mixins/text-input-field';

export default Ember.TextField.extend (InputFieldMixin, TextInputFieldMixin, {
  layout,

  classNames: ['materialize-input'],

  validate: true,

  type: 'text',

  init () {
    this._super (...arguments);
    this.set ('_initValue', this.get ('value'));
  },

  didUpdate () {
    this._super (...arguments);
    this._renderLabel ();
  },

  didInsertElement () {
    this._super (...arguments);
    this._didInsertElement (...arguments);
  },
});

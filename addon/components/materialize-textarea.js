import Ember from 'ember';
import layout from '../templates/components/materialize-textarea';
import InputFieldMixin from '../-private/mixins/input-field';
import TextInputFieldMixin from '../-private/mixins/text-input-field';

export default Ember.TextArea.extend (InputFieldMixin, TextInputFieldMixin, {
  layout,

  tagName: 'textarea',

  classNames: ['materialize-textarea'],

  init () {
    this._super (...arguments);
    this.set ('_initValue', this.get ('value'));
  },

  didUpdateAttrs () {
    this._super (...arguments);
    this._didUpdateAttrs (...arguments);

    this.$ ().trigger ('autoresize');
  },

  didInsertElement () {
    this._super (...arguments);
    this._didInsertElement (...arguments);
  },
});

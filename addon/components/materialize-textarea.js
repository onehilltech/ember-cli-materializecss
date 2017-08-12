import Ember from 'ember';
import layout from '../templates/components/materialize-textarea';
import TextFieldMixin from '../-private/mixins/text-field';

export default Ember.TextArea.extend (TextFieldMixin, {
  layout,

  tagName: 'textarea',

  classNames: ['materialize-textarea'],
  classNameBindings: ['validate'],

  validate: true,

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

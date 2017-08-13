import Ember from 'ember';
import layout from '../templates/components/materialize-select';
import InputFieldMixin from '../-private/mixins/input-field';
import TextInputFieldMixin from '../-private/mixins/text-input-field';

const VALIDATION_ERROR_TYPE = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'rangeOverflow',
  'rangeUnderflow',
  'stepMismatch',
  'tooLong'
];

export default Ember.Component.extend (InputFieldMixin, TextInputFieldMixin, {
  layout,

  tagName: 'select',

  classNames: ['materialize-input'],

  didUpdateAttrs (attrs) {
    this._super (...arguments);

    if (Ember.isPresent (attrs.newAttrs.options)) {
      this.$ ().material_select ();
    }
  },

  didInsertElement () {
    this._super (...arguments);
    this._didInsertElement ();
    this.$ ().material_select ();
  },

  willDestroyElement () {
    this._super (...arguments);
    this.$ ().material_select ('destroy');
  },

  doValidate () {
    if (this.$ ().hasClass ('browser-default')) {
      this.element.checkValidity ();
    }
    else {
      // This is the custom drawn select from materialize. We therefore
      // have to perform a custom validation by checking if any of the
      // children in the ul are active and selected.
      if (this.element.required && !this.$().siblings ('ul').children ().hasClass ('active selected')) {
        this._setCustomError ('This field is required');
      }
      else {
        this._setCustomError ('');
      }
    }

    this._updateValidState ();
  }
});

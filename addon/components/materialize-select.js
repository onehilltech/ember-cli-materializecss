import Ember from 'ember';
import layout from '../templates/components/materialize-select';
import initInputLabel from '../utils/init-input-label';

const VALIDATION_ERROR_TYPE = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'rangeOverflow',
  'rangeUnderflow',
  'stepMismatch',
  'tooLong'
];

export default Ember.Component.extend({
  layout,

  tagName: 'select',

  classNames: ['materialize-input'],

  attributeBindings: ['required'],

  didUpdateAttrs (attrs) {
    this._super (...arguments);

    if (Ember.isPresent (attrs.newAttrs.options)) {
      this.$ ().material_select ();
    }
  },

  didInsertElement () {
    this._super (...arguments);

    // Set the for attribute for the label to this input.
    initInputLabel (this);

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
        this.element.setCustomValidity ('This field is required');
      }
      else {
        this.element.setCustomValidity ('');
      }

    }

    if (!this.element.validity.valid) {
      let $this = this.$ (this.element);
      let $label = $this.siblings ('label');

      const customError = this.get ('customError');

      if (Ember.isPresent (customError)) {
        // We are going to attempt to show a custom error message. This is only
        // possible if we have defined a error message that corresponds to the
        // failed validation type.

        for (let i = 0, len = VALIDATION_ERROR_TYPE.length; i < len; ++i) {
          const reason = VALIDATION_ERROR_TYPE[i];
          const failed = this.element.validity[reason];

          if (failed) {
            if (Ember.isPresent (customError[reason])) {
              $label.attr ('data-error', customError[reason]);
            }
            else {
              $label.attr ('data-error', this.element.validationMessage);
            }

            break;
          }
        }
      }
      else {
        // Use the default validation message for the element as the
        // error message we display to the user.
        $label.attr ('data-error', this.element.validationMessage);
      }
    }

    this._updateValidState ();
  },

  _updateValidState () {
    let $this = this.$ (this.element);

    if (!this.element.validity.valid) {
      // Mark the input as invalid.
      if ($this.hasClass ('valid')) {
        $this.removeClass ('valid');
      }

      if (!$this.hasClass ('invalid')) {
        $this.addClass ('invalid');
      }
    }
    else {
      // Mark the input as valid.
      if ($this.hasClass ('invalid')) {
        $this.removeClass ('invalid');
      }

      if (!$this.hasClass ('valid')) {
        $this.addClass ('valid');
      }
    }
  },
});

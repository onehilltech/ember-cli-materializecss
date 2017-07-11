import Ember from 'ember';
import layout from '../templates/components/materialize-textarea';
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

export default Ember.TextArea.extend({
  layout,
  tagName: 'textarea',
  classNames: ['materialize-textarea'],

  init () {
    this._super (...arguments);

    let value = this.get ('value') || '';
    this.set ('_initValue', value);
  },

  didUpdateAttrs (attrs) {
    this._super (...arguments);

    if (Ember.isPresent (attrs.newAttrs.value)) {
      this.$ ().trigger ('autoresize');
    }
  },

  didInsertElement () {
    this._super (...arguments);

    // Set the for attribute for the label to this input.
    initInputLabel (this);

    // Validate the input when the user if focused out.
    let $this = this.$ (this.element);

    $this.on ('focusout', function () {
      const isDirty = this.get ('_isDirty');

      if (isDirty) {
        this.doValidate ();
      }

      // Set the current value as the new initial value.
      this.set ('_initValue', this.get ('value'));
    }.bind (this));

    // Update the state of the input label.
    this._updateLabel ();
  },

  /**
   * Validate the input.
   */
  doValidate () {
    // Check the validity of the element.
    this.element.checkValidity ();

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

  _updateLabel () {
    let $this = this.$(this.element);
    let $label = $this.siblings ('label');

    if ($label.length !== 0) {
      let val = $this.val ();
      let placeholder = $this.attr ('placeholder');

      if (Ember.isEmpty (val) && Ember.isEmpty (placeholder)) {
        // Remove the active class since there is nothing in the input.
        if ($label.hasClass ('active')) {
          $label.removeClass ('active');
        }
      }
      else {
        // Add the active class since there is something in the input.
        if (!$label.hasClass ('active')) {
          $label.addClass ('active');
        }
      }
    }
  }
});

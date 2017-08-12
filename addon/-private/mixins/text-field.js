import Ember from 'ember';

// Default form validation is broken because a single global function cannot
// keep track of the state of an object. We are going to disable it, but still
// support HTML validation.
if (Ember.isPresent (window.validate_field)) {
  window.validate_field = function () { };
}


const VALIDATION_ERROR_TYPE = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'rangeOverflow',
  'rangeUnderflow',
  'stepMismatch',
  'tooLong'
];

export default Ember.Mixin.create ({
  label: '',

  isClean: Ember.computed ('value', '_initValue', function () {
    return this.get ('value') === this.get ('_initValue');
  }),

  isDirty: Ember.computed.not ('isClean'),

  doValidate () {
    if (this.element.validity.customError) {
      this.set ('errorMessage');
      this._setCustomError ('');
    }

    // Check the validity of the element.
    this.element.checkValidity ();

    if (!this.element.validity.valid) {
      let customError = this.get ('customError');

      if (Ember.isPresent (customError)) {
        // We are going to attempt to show a custom error message. This is only
        // possible if we have defined a error message that corresponds to the
        // failed validation type.

        for (let i = 0, len = VALIDATION_ERROR_TYPE.length; i < len; ++i) {
          const reason = VALIDATION_ERROR_TYPE[i];
          const failed = this.element.validity[reason];

          if (failed) {
            if (Ember.isPresent (customError[reason])) {
              this._showErrorMessage (customError[reason]);
            }
            else {
              this._showErrorMessage (this.element.validationMessage);
            }

            break;
          }
        }
      }
      else {
        this._showErrorMessage (this.element.validationMessage);
      }
    }

    // Update the valid state of the control. This will show the correct
    // color based on the validation state.
    this._updateValidState ();
  },

  _didUpdateAttrs () {
    let errorMessage = this.get ('errorMessage');

    if (!Ember.isEmpty (errorMessage)) {
      // There is a custom error message. We need to show this over the
      // current error message.
      this._setCustomError (errorMessage);
    }
    else if (this.element.validity.customError) {
      // There is no more custom error message. We need to reset the
      // custom validation message on the element.
      this._setCustomError ('');
    }

    let successMessage = this.get ('successMessage');

    if (!Ember.isEmpty (successMessage)) {
      this._showSuccessMessage (successMessage);
    }
  },

  _didInsertElement () {
    this._super (...arguments);

    // Set the for attribute for the label to this input.
    this._addLabel ();
    this.$ ().on ('focusout', this._onFocusOut.bind (this));
  },

  _onFocusOut () {
    if (this.get ('isDirty')) {
      this.doValidate ();
    }

    // Set the current value as the new initial value.
    this.set ('_initValue', this.get ('value'));
  },

  /**
   * Add the label for the input into the DOM model.
   *
   * @private
   */
  _addLabel () {
    let $label = this.$ ().after (`<label for="${this.elementId}">${this.get ('label')}</label>`);
    let val = this.$().val ();
    let placeholder = this.get ('placeholder');

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
  },

  _setCustomError (msg) {
    this.element.setCustomValidity (msg);
    this._showErrorMessage (msg);
    this._updateValidState ();
  },

  _showErrorMessage (msg) {
    let $label = this.$ ().siblings ('label');
    $label.attr ('data-error', msg);
  },

  _showSuccessMessage (msg) {
    let $label = this.$ ().siblings ('label');
    $label.attr ('data-success', msg);
  },

  _updateValidState () {
    let $this = this.$ ();

    if (this.element.validity.valid) {
      if ($this.hasClass ('invalid')) {
        $this.removeClass ('invalid');
      }

      if (!$this.hasClass ('valid')) {
        $this.addClass ('valid');
      }
    }
    else {
      // Mark the input as invalid.
      if ($this.hasClass ('valid')) {
        $this.removeClass ('valid');
      }

      if (!$this.hasClass ('invalid')) {
        $this.addClass ('invalid');
      }
    }
  }
});

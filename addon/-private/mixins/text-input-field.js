import Ember from 'ember';

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
  doValidate () {
    this._super (...arguments);

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

  _onFocusOut () {
    this._super (...arguments);

    // Set the current value as the new initial value.
    this.set ('_initValue', this.get ('value'));
  },

  _setCustomError (msg) {
    this.element.setCustomValidity (msg);
    this._showErrorMessage (msg);
    this._updateValidState ();
  },

  _showErrorMessage (msg) {
    this._showMessage ('data-error', msg);
  },

  _showSuccessMessage (msg) {
    this._showMessage ('data-success', msg);
  },

  _showMessage (kind, msg) {
    let $label = this.$ ().siblings ('label');
    $label.attr (kind, msg);

    // The error message is only visible if the label is marked as active. This does
    // not make sense in some cases, such as an required field that is empty and does not
    // have a placeholder. But, we are going to do this just to make things work!
    $label.toggleClass ('active', !Ember.isEmpty (msg));
  }
});

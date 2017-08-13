import Ember from 'ember';

// Default form validation is broken because a single global function cannot
// keep track of the state of an object. We are going to disable it, but still
// support HTML validation.
if (Ember.isPresent (window.validate_field)) {
  window.validate_field = function () { };
}

export default Ember.Mixin.create ({
  attributeBindings: ['required'],

  classNames: ['material-input'],
  classNameBindings: ['validate'],

  label: '',

  validate: true,

  isClean: Ember.computed ('value', '_initValue', function () {
    return this.get ('value') === this.get ('_initValue');
  }),

  isDirty: Ember.computed.not ('isClean'),

  doValidate () {

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

import Ember from 'ember';

// Default form validation is broken because a single global function cannot
// keep track of the state of an object. We are going to disable it, but still
// support HTML validation.
if (window.validate_field) {
  window.validate_field = function () { };
}

let inputSelector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';

Ember.$(document).off ('blur', inputSelector);

export default Ember.Mixin.create ({
  attributeBindings: ['required'],

  classNames: ['material-input'],
  classNameBindings: ['validate'],

  label: '',

  validate: true,
  autoValidate: true,

  isClean: Ember.computed ('value', '_initValue', function () {
    return this.get ('value') === this.get ('_initValue');
  }),

  isDirty: Ember.computed.not ('isClean'),

  doValidate () {

  },

  _didInsertElement () {
    this._super (...arguments);

    this.$ ().on ('focusout', this._onFocusOut.bind (this));
    this._renderLabel ();
  },

  /**
   * The input is no longer in focus. We are to validate the input here, if
   * we support auto-validation.
   *
   * @private
   */
  _onFocusOut () {
    let isDirty = this.get ('isDirty');
    let autoValidate = this.get ('autoValidate');

    if (isDirty && autoValidate) {
      this.doValidate ();
    }
  },

  /**
   * Render the label for the input. If no label is present, then the label element
   * is removed from the DOM tree.
   *
   * @private
   */
  _renderLabel () {
    // Set the for attribute for the label to this input. We need to store the
    // label just in case it is updated, and we need to update our label.
    let label = this.get ('label');
    let $label = $(this.$()[0].labels);

    if (Ember.isEmpty (label)) {
      // We do not have a label. We need to remove the label element.
      if ($label.length !== 0) {
        $label.remove ();
      }
    }
    else {
      if ($label.length !== 0) {
        let oldLabel = this.get ('_oldLabel');

        // We already have a label and the label is different from the old
        // label. So, we just need to update the label text.
        if (label !== oldLabel) {
          $label.text (label);
        }
      }
      else {
        // There is no label element, and we need to add one.
        $label = $(`<label for="${this.elementId}">${label}</label>`).insertAfter (this.$());
      }

      // Update the state of the label.
      let val = this.$().val ();
      let placeholder = this.get ('placeholder');

      let showActive = !(Ember.isEmpty (val) && Ember.isEmpty (placeholder));
      $label.toggleClass ('active', showActive);
    }

    this.set ('_oldLabel', label);
  },

  _updateValidState () {
    let $this = this.$ ();

    $this.toggleClass ('invalid', !this.element.validity.valid);
    $this.toggleClass ('valid', this.element.validity.valid);
  }
});

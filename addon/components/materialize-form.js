import Ember from 'ember';
import layout from '../templates/components/materialize-form';

export default Ember.Component.extend({
  tagName: 'form',

  layout,

  didInsertElement () {
    this._super (...arguments);

    this.$ (':submit').click (this._validateThenSubmit.bind (this));
  },

  _validateThenSubmit (event) {
    // Prevent the default validation behavior.
    event.preventDefault ();

    // Manually validate the input.
    let views = Ember.getOwner (this).lookup ('-view-registry:main');
    let $inputs = this.$ ('.material-input');

    let valid = true;

    for (let i = 0, len = $inputs.length; i < len; ++ i) {
      let $input = $inputs[i];
      let materialInput = views[$input.id];

      if (Ember.isPresent (materialInput)) {
        materialInput.doValidate ();
        valid &= materialInput.element.validity.valid;
      }
    }

    if (valid) {
      this.doSubmit ();
    }
  },

  doSubmit () {
    let submit = this.get ('submit');

    if (Ember.isPresent (submit)) {
      submit ();
    }
  }
});

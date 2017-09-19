import Ember from 'ember';

export default Ember.Controller.extend ({
  actions: {
    submit () {
      alert (this.get ('email'));
    },

    validate () {
      this.set ('errorMessage', 'This is a custom error message');
    }
  },

  emailCustomError: {
    valueMissing: 'This field is required!!!'
  }
});

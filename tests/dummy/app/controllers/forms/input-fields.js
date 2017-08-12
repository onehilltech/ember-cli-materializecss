import Ember from 'ember';

export default Ember.Controller.extend ({
  actions: {
    validate () {
      this.set ('errorMessage', 'This is a custom error message');
    }
  }
});

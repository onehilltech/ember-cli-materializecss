import Ember from 'ember';
import InputFieldMixin from '../-private/mixins/input-field';

export default Ember.Checkbox.extend (InputFieldMixin, {
  init () {
    this._super (...arguments);
    this.set ('_initValue', !!this.get ('checked'));
  },

  didInsertElement () {
    this._super (...arguments);
    this._didInsertElement ();
  }
});

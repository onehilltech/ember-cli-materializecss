import Ember from 'ember';
import initInputLabel from '../utils/init-input-label';

export default Ember.Checkbox.extend({
  /// Dirty state of the input
  _isDirty: false,

  isDirty: Ember.computed.alias ('_isDirty'),

  init () {
    this._super (...arguments);

    this.set ('_initValue', !!this.get ('checked'));
  },

  didUpdateAttrs (attrs) {
    this._super (attrs);

    if (Ember.isPresent (attrs.newAttrs.checked)) {
      let initValue = this.get ('_initValue');
      let newValue = attrs.newAttrs.checked.value;

      this.set ('_isDirty', initValue !== newValue);
    }
  },

  didInsertElement () {
    this._super (...arguments);

    // Set the for attribute for the label to this input.
    initInputLabel (this);
  }
});

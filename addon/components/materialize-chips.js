import Ember from 'ember';
import layout from '../templates/components/materialize-chips';

export default Ember.Component.extend({
  layout,
  classNames: ['chips'],

  didUpdateAttrs (attrs) {
    this._super (...arguments);

    if (Ember.isPresent (attrs.newAttrs.data) || Ember.isPresent (attrs.newAttrs.autocompleteOptions)) {
      this._init ();
    }
  },

  didInsertElement () {
    this._super (...arguments);
    this._init ();
  },

  didAddChip () {

  },

  didDeleteChip () {

  },

  didSelectChip () {

  },

  _init () {
    let opts = {
      data: this.get ('data'),
      placeholder: this.get ('placeholder'),
      secondaryPlaceholder: this.get ('secondaryPlaceholder'),
      autocompleteOptions: this.get ('autocompleteOptions')
    };

    let $this = this.$ ();
    $this.material_chip (opts);

    $this.on ('chip.add', (e, chip) => {
      // Get the chip view for this element.

      this.didAddChip (chip);

      // Pass the notification to the attached action, if present.
      let onAdd = this.get ('add');

      if (Ember.isPresent (onAdd)) {
        onAdd (chip);
      }
    });

    $this.on ('chip.delete', (e, chip) => {
      // Get the chip view for this element.
      this.didDeleteChip (chip);

      // Pass the notification to the attached action, if present.
      let onDelete = this.get ('delete');

      if (Ember.isPresent (onDelete)) {
        onDelete (chip);
      }
    });

    $this.on ('chip.select', (e, chip) => {
      // Get the chip view for this element.

      this.didSelectChip (chip);

      // Pass the notification to the attached action, if present.
      let onSelect = this.get ('select');

      if (Ember.isPresent (onSelect)) {
        onSelect (chip);
      }
    });
  }});

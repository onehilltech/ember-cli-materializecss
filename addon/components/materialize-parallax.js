import Ember from 'ember';
import layout from '../templates/components/materialize-parallax';

export default Ember.Component.extend({
  layout,
  classNames: 'parallax',

  didInsertElement () {
    this._super (...arguments);

    this.$ (this.element).parallax ();
  }
});

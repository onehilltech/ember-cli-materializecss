import Ember from 'ember';
import layout from '../templates/components/materialize-carousel';

export default Ember.Component.extend({
  layout,

  classNames: ['carousel'],

  classNameBindings: ['isSlider:carousel-slider'],

  isSlider: false,

  didUpdateAttrs () {
    this._super (...arguments);

    if (Ember.isPresent ('fullWidth') ||
        Ember.isPresent ('durations') ||
        Ember.isPresent ('dist') ||
        Ember.isPresent ('shift') ||
        Ember.isPresent ('padding') ||
        Ember.isPresent ('indicators') ||
        Ember.isPresent ('noWrap'))
    {
      this._init ();
    }
  },

  didInsertElement () {
    this._super (...arguments);
    this._init ();
  },

  _init () {
    let opts = {
      fullWidth: this.get ('fullWidth'),
      duration: this.get ('durations'),
      dist: this.get ('dist'),
      shift: this.get ('shift'),
      padding: this.get ('padding'),
      indicators: this.get ('indicators'),
      noWrap: this.get ('noWrap')
    };

    this.$ ().carousel (opts);
  }
});


import Ember from 'ember';
import layout from '../templates/components/materialize-carousel';

export default Ember.Component.extend({
  layout,
  classNames: ['carousel'],

  didRender (attrs) {
    this._super (...arguments);

    if (Ember.isPresent (attrs.newAttrs.fullWidth) || Ember.isPresent (attrs.newAttrs.duration) ||
      Ember.isPresent (attrs.newAttrs.dist) || Ember.isPresent (attrs.newAttrs.shift) ||
      Ember.isPresent (attrs.newAttrs.padding) || Ember.isPresent (attrs.newAttrs.indicators) ||
      Ember.isPresent (attrs.newAttrs.noWrap)) {
      let opts = {
        fullWidth: this.get ('fullWidth'),
        duration: this.get ('durations'),
        dist: this.get ('dist'),
        shift: this.get ('shift'),
        padding: this.get ('padding'),
        indicators: this.get ('indicators'),
        noWrap: this.get ('noWrap')
      };
      let $this = this.$ ();
      $this.carousel (opts);
    }
  }
});


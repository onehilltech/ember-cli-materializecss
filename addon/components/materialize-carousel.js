import Ember from 'ember';
import layout from '../templates/components/materialize-carousel';

export default Ember.Component.extend({
  layout,
  classNames: ['carousel'],

  didRender () {
    this._super (...arguments);

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
});


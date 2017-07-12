import Ember from 'ember';
import layout from '../templates/components/materialize-progress';

export default Ember.Component.extend({
  layout,

  classNames: ['progress'],

  classNameBindings: ['isDeterminate:determinate:indeterminate'],

  mode: 'indeterminate',

  didUpdateAttrs (attrs) {
    this._super (...arguments);

    if (this.get ('style') === 'determinate') {
      if (Ember.isPresent (attrs.newAttrs.progress)) {
        Ember.run ('afterRender', () => {
          let progress = attrs.newAttrs.progress.value * 100;
          this.$('.determinate').css ('width', `${progress}%`);
        });
      }
    }
  }
});

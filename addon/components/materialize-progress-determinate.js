import MaterializeProgress from './materialize-progress';
import layout from '../templates/components/materialize-progress-determinate';

export default MaterializeProgress.extend({
  layout,
  progress: null,

  didUpdateAttrs (attrs) {
    this._super (...arguments);

    if (Ember.isPresent (attrs.newAttrs.progress)) {
      Ember.run ('afterRender', () => {
        let progress = attrs.newAttrs.progress.value * 100;
        this.$('.determinate').css ('width', `${progress}%`);
      });
    }
  }
});

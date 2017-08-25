import Ember from 'ember';
import layout from '../templates/components/materialize-tabs';

export default Ember.Component.extend({
  layout,

  tagName: 'ul',
  classNames: ['tabs'],

  swipeable: false,
  responsiveThreshold: 'Infinity',

  didInsertElement () {
    this._super (...arguments);

    this.$().tabs ({
      swipeable: this.get ('swipeable'),
      responsiveThreshold: this.get ('responsiveThreshold'),
      onShow: this._onShow.bind (this),
    });
  },

  didUpdateAttrs () {
    this._super (...arguments);

    let selectTab = this.get ('selectTab');
    this.$().tabs ('select_tab', selectTab);
  },

  _onShow (currentTab) {
    let show = this.get ('show');

    if (show) {
      show (currentTab);
    }
  }
});

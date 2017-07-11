import Ember from 'ember';

const LoadingState = Ember.Object.extend ({
  startLoading () {
    return this;
  },

  stopLoading () {
    return this;
  }
});

/**
 * @class NotLoading
 *
 * Defines the not loading state for a button. In the not loading state, the
 * button is enabled, and the default text for the button is shown.
 */
const NotLoading = LoadingState.extend ({
  startLoading () {
    return Loading.create ({button: this.get ('button')});
  }
});

/**
 * @class Loading
 *
 * Defines the loading state for a button. In the loading state, the button
 * is disabled and the button text is replaced with the loading text.
 */
const Loading = LoadingState.extend ({
  init () {
    // Disable the button.
    let button = this.get ('button');
    button.set ('disabled', true);

    // Store the innerHTML for the button since we need to change it
    // to the value of data-loading-text.
    this.set ('_notLoadingText', button.element.innerText);
    button.element.innerText = button.get ('loadingText');
  },

  stopLoading () {
    // Enable the button.
    let button = this.get ('button');
    button.set ('disabled', false);

    // Replace the loading text with the original text.
    button.element.innerText = this.get ('_notLoadingText');

    return NotLoading.create ({button: button});
  }
});

/**
 * @class Button
 *
 * Base class for all Materialize buttons.
 */
export default Ember.Component.extend({
  layout,
  tagName: 'a',
  attributeBindings: ['disabled', 'loading'],
  disabled: false,

  init () {
    this._super (...arguments);

    // Set the initial state of the button.
    let loading = this.get ('loading');
    let state = loading ? Loading.create ({button: this}) : NotLoading.create ({button: this});
    this.set ('_btnState', state);
  },

  didUpdateAttrs (attrs) {
    this._super (...arguments);

    if (Ember.isPresent (attrs.newAttrs.loading)) {
      this._doLoading ();
    }
  },

  _doLoading () {
    let loading = this.get ('loading');
    let currentState = this.get ('_btnState');

    if (loading) {
      this.set ('_btnState', currentState.startLoading ());
    }
    else {
      this.set ('_btnState', currentState.stopLoading ());
    }
  }
});

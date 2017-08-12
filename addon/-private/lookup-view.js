import Ember from 'ember';

export default function (selector) {
  let $item = Ember.$ (selector);

  return Ember.getOwner (this).lookup ('-view-registry:main')[id];
}


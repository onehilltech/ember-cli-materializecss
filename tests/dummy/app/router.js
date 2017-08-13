import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('forms', function() {
    this.route('textareas');
    this.route('input-fields');
    this.route('checkboxes');
    this.route('select');
  });
});

export default Router;

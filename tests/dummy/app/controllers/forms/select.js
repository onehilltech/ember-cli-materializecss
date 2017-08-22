import Ember from 'ember';

export default Ember.Controller.extend({
  options1: [
    {text: 'Select your option', disabled: true, selected: true},
    {value: 1, text: 'Option 1'},
    {value: 2, text: 'Option 2'},
    {value: 3, text: 'Option 3'},
  ],

  options2: {
    'Team 1': [
      {value: 1, text: 'Option 1'},
      {value: 2, text: 'Option 2'}
    ],

    'Team 2': [
      {value: 3, text: 'Option 3'},
      {value: 4, text: 'Option 4'}
    ]
  }
});

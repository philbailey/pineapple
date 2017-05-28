import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../templates/disclaimer.html';


Template.Disclaimer.events({
  'click .accept_disclaimer_button': function(event, template){
    Router.go('activation');
  }
})

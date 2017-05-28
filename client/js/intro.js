import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../templates/intro.html';

Template.Intro.events({
  'click #lets_get_started_button': function(event, template){
    Router.go('disclaimer');
  }
})

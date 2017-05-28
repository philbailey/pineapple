import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../templates/intro.html';

if (Meteor.isCordova) {
  console.log('called');
  Template.Intro.events({
    'touchstart #lets_get_started_button': function(event, template){
      console.log('called');
      Router.go('disclaimer');
    }
  });
} else {
  Template.Intro.events({
    'click #lets_get_started_button': function(event, template){
      Router.go('disclaimer');
    }
  });
}

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../templates/menu.html';

Template.Activation.events({
//  'click .top-left': function(event, template){
//	console.log("top-left");
//    event.preventDefault();
//    Router.go("Diagnosis");
//  },
  'click #menu_form': function(event, template){
	console.log("menu_form");
    event.preventDefault();
    Router.go("diagnosis");
  }
});

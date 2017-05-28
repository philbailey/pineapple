import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../templates/menu.html';

//Template.Activation.events({
//  'click #menu_button': function(event, template) {
//    event.preventDefault();
//	console.log("menu_button");
////    Router.go("diagnosis");
//  }
//});

Template.Activation.events({
  'click .menu_form': function(event, template){
    event.preventDefault();

    console.log('foo');
    //validation code goes here
    Router.go('diagnosis');
  }
});

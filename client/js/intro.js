import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../templates/intro.html';


  Template.Intro.events({
    'click, touchstart #lets_get_started_button': function(event, template){
      console.log('called');
      Router.go('disclaimer');
    }
  });

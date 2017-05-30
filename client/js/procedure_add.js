import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.Procedure_Add.events({
  'click .return_button':function(event, template){
    Router.go('diagnosis');
  }
});

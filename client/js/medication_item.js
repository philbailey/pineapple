import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


Template.Medication_Item.events({
  'click .return_button': function(event, template){
      Router.go('medication');
  }
});

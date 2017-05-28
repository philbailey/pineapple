import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../templates/activation.html';

Template.Activation.events({
  'submit .activation_form': function(event, template){
    event.preventDefault();
    var activation_code = event.target.activation_code.value;
    var first_name = event.target.first_name.value;
    var second_name = event.target.second_name.value;
    var nhs_number = event.target.nhs_number.value;

    console.log(first_name + ' ' + ' ' + second_name + ' ' + nhs_number + ' ' +activation_code);
    //validation code goes here
    Router.go('menu');
  }
});

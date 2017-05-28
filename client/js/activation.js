import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../templates/activation.html';

Template.Activation.events({
  'submit .activation_form': function(event, template){
    event.preventDefault();
    var activation_code = event.target.activation_code.value;
    var name = event.target.name.value;
    var nhs_number = event.target.nhs_number.value;

    console.log(name + ' ' + ' ' + nhs_number + ' ' + activation_code);

    if (activation_code == "pineapple") {
      Router.go('menu');
    }
  }
});

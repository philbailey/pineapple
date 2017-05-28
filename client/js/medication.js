import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../templates/medication.html';



Template.Medication.onCreated(function bodyOnCreated() {

  Meteor.subscribe('medications');


});

Template.Medication.helpers({
  'medicines': function(){
    return Medications.find().fetch();
  }
})

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../templates/medication.html';



Template.Medication.onCreated(function bodyOnCreated() {

  Meteor.subscribe('medications');

});

Template.Medication.helpers({
  'medicines': function(){
    return Medications.find().fetch();
  },
  'thereAreNoMedicines': function(){
    if (Medications.find().count()<1) {
      return true;
    } else {
      return false;
    }
  }
});

Template.Medication.events({
  'click .medication_notification': function(event, template){
    console.log(this._id); //the id of the selected medication
  },
  'click #return_button': function(event, template){
    Router.go('menu');
  },
  'click #delete_record': function(event, template){
    console.log('delete ' + this._id);
    Medications.remove(this._id);
  },
  'click .new_record': function(event, template){
    console.log('create new record');
    Router.go('medication_add');
  },
  'click #edit_record': function(event, template){
    console.log('edit this record: ');
    Router.go('/medication_item/'+this._id);
  }
})

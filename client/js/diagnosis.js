import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../templates/diagnosis.html';

Template.Diagnosis.onCreated(function bodyOnCreated() {
  Meteor.subscribe('diagnoses');
});

Template.Diagnosis.helpers({
  'diagnoses': function(){
    return Diagnoses.find().fetch();
  },
  'thereAreNoDiagnoses': function(){
    if (Diagnoses.find().count() < 1) {
      return true;
    } else {
      return false;
    }
  },
  'problems': function(){
    return Diagnoses.find().fetch();
  },
  'thereAreNoProblems': function(){
    if (Problems.find().count() < 1) {
      return true;
    } else {
      return false;
    }
  },
  'procedures': function(){
    return Diagnoses.find().fetch();
  },
  'thereAreNoProcedures': function(){
    if (Problems.find().count() < 1) {
      return true;
    } else {
      return false;
    }
  }
});

Template.Diagnosis.events({
  'click #return_button':function(event, template){
    Router.go('menu');
  }
});

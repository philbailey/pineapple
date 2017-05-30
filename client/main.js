import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../databases.js';

import './main.html';

Router.route('/', function () {
  this.render('Intro');
});

Router.route('/disclaimer', function () {
  this.render('Disclaimer');
});

Router.route('/activation', function () {
  this.render('Activation');
});

Router.route('/menu', function () {
  this.render('Menu');
});

Router.route('/medication', function () {
  this.render('Medication');
});

Router.route('/medication_item/:_id',{
    template: 'Medication_Item',
    data: function() {
      return Medications.findOne({_id: this.params._id});
    }
    //  return Medications.findOne(this.params._id);

});

Router.route('/medication_add', function(){
  this.render('Medication_Add');
});

Router.route('/diagnosis', function () {
  this.render('Diagnosis');
});

Router.route('/results', function () {
  this.render('Results');
});

Router.route('/emergency', function () {
  this.render('Emergency');
});

Router.route('/contacts', function () {
  this.render('Contacts');
});

Router.route('/appointments', function () {
  this.render('Appointments');
});

Meteor.subscribe('medications');
console.log(Medications.find().fetch());



//  Steph Rees, Chris Dalgety, Jill Parish, Yasmin Boudiaf, Philip Bailey, Simon Chapman

//  light green: 66b96a
//  dark green: 429f46
//  light orange: f7a724
//  mid orange lighter: f37e16
//  mid orange darker: ed6c00
//  dark orange: e55000
//  dark text: 353535

//https://www.iconexperience.com/g_collection/icons/?icon=pineapple

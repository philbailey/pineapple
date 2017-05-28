import { Meteor } from 'meteor/meteor';
import '../databases.js';


Meteor.startup(() => {
  // code to run on server at startup




  Meteor.publish('medications', function medicationPublication(){
    return Medications.find();
  });

});

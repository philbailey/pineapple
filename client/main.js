import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';




Router.route('/intro', function () {
  console.log('hello');
  this.render('Intro');
});

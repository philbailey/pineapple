FlowRouter.route( '/intro', {
  action: function() {
    // Do whatever we need to do when we visit http://app.com/terms.
    console.log( "Okay, we're on the intro page!" );
  },
  name: 'intro' // Optional route name.
});

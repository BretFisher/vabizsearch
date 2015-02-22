Template.home.helpers({
  result: function () {
    var result = Session.get('result');
    if (result) {
      return JSON.stringify(result.data, true, 2);
    }
  }
});


Template.home.events({
  'click button': function (event) {
    event.preventDefault();
    // console.log('click');
    var input = $('.searchinput').val();
    // console.log(input);
    Meteor.call('search',input, function (error, result) {
      if (error) {
        console.log(error);
      } else {
        Session.set('result',result);
        console.log(result);
      }
    });
  }
});

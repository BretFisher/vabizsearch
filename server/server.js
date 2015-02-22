Meteor.methods({

  search: function (text) {
    console.log('called search on server with ' + text);
    var result = HTTP.get('http://api.vabusinesses.org/officers',
                          {params: {'first_name': text}});
    
    return result;
  }

});

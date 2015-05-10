angular.module('laravelAndAngular.utils.service', [

])

.factory('utils', function () {
  var User = function (data) {
    this.id = data.id;
    this.name = data.name;
    this.items = data.items;
    this.check = data.check;
  };
  var Bend = function (data) {
    this.id = data._id;
    this.email = data.email;
    this.password = data.password;
  };

  var getBend = function() {
    return object.currentBend;
  };

  var object = {
      "currentBend": {}
  };

  var setCurrentBend = function(data) {
      object.currentBend = new Bend(data[0]);
  };

  return {
    // Util for finding an object by its 'id' property among an array
    findById: function findById(a, id) {
      for (var i = 0; i < a.length; i++) {
        if (a[i]._id == id || a[i].bandName == id) return a[i];
      }
      return null;
    },

    createBendObject: function (data) {
      setCurrentBend(data);
      return new Bend(data);
    },

    getCurrentBend: function () {
      return getBend();
    },

    createSpecificObject: function (data) {
      // var user = new User(data);
      // console.log(user);
      return new User(data);
    }

  };

});
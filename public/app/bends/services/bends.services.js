angular.module('laravelAndAngular.bends.service', [

])

// A RESTful factory for retrieving users from 'users.json'
.factory('bends', ['$http', 'utils', function ($http, utils) {
  var path = 'app/data.json';
  var arrayOfUsers = [];
  var users = $http.get(path).then(function (resp) {
    angular.forEach(resp.data.users, function(value, key) {
      this.push(utils.createSpecificObject(value));
    }, arrayOfUsers);
    return arrayOfUsers;
  });

  var factory = {};
  factory.all = function () {
    return users;
  };
  factory.get = function (id) {
    return users.then(function(){
      return utils.findById(arrayOfUsers, id);
    })
  };
  factory.getBend = function () {
      var nesto = utils.getCurrentBend();
    console.log(nesto);
    var bend = $http({method:'GET',url:'bendsApi/bend/data',params:nesto});
    return bend;
  };
  return factory;
}]);
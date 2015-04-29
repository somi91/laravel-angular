angular
    .module('laravelAndAngular.users')
    .controller('UsersController', UsersController);

UsersController.$inject = ['$scope', '$state', 'users', '$http'];
function UsersController($scope, $state, users, $http) {
  console.log(users);
  $scope.users = users;
    $http({
        method: "GET",
        url: "getUsers" //   /filterData
    }).success(function(promise){
        console.log(promise[0].name);
    });


};
angular
    .module('laravelAndAngular.bends.service')
    .factory('AuthSrvc', AuthSrvc);

AuthSrvc.$inject = ['$http', 'utils', 'SessionService'];
function AuthSrvc($http, utils, SessionService) {
  return{
    auth:function(credentials){
      var authUser = $http({method:'POST',url:'api/login/auth',data:credentials});
      return authUser;
    }
  }
};


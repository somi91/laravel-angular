angular
    .module('laravelAndAngular.bends.service')
    .factory('AuthSrvc', AuthSrvc);

AuthSrvc.$inject = ['$http', 'utils', 'SessionService'];
function AuthSrvc($http, utils, SessionService) {
  return{
  	isLoggedInAsBend: false,
    auth:function(credentials){
        console.log(credentials);
      var authUser = $http({method:'POST',url:'bend/login/auth',data:credentials});
      return authUser;
    }
  }
};


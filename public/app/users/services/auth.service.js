angular
    .module('laravelAndAngular')
    .factory('authService', authService);

authService.$inject = [];
function authService() { 
  return { isLoggedIn : false};
	
}
angular
    .module('laravelAndAngular')
    .factory('authService', authService);

authService.$inject = [];
function authService() { 
  return {
  	isLoggedInAsBend: false,
  	isLoggedInAsUser: false
  };
	
}
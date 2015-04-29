angular
    .module('laravelAndAngular.bends')
    .controller('LoginController', LoginController);

LoginController.$inject = ['$scope', '$state', 'AuthSrvc'];
function LoginController($scope, $state, AuthSrvc) {

	$scope.loginSubmit = function(user){
		var auth = AuthSrvc.auth(user);
		auth.success(function(response){
			console.log(response);
		});
	}
};
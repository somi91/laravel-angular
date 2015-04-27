angular
    .module('laravelAndAngular.users')
    .controller('LoginController', LoginController);

LoginController.$inject = ['$scope', '$state', 'authService', 'users'];
function LoginController($scope, $state, authService, users) { 


	$scope.auth = authService;

	$scope.save = function(user) {
		var user = user;
		users.get(user.name).then(function (promise) {
			if(promise !== null){
				doRedirect(promise.check);
			}else{
				user.name = '';
				user.password = '';
			}
		});
	};

	function doRedirect(check) {
		$scope.auth.isLoggedIn = true;
		window.location.href = '#/'+check;
	};
};
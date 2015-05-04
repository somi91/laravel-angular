angular
    .module('laravelAndAngular.bends')
    .controller('BendLoginController', BendLoginController);

BendLoginController.$inject = ['$scope', '$state', 'AuthSrvc'];
function BendLoginController($scope, $state, AuthSrvc) {

	$scope.loginSubmit = function(user){
		var auth = AuthSrvc.auth(user);
		auth.success(function(response){
			if(response.error){
				alert(response.error.message)
			}else{
				console.log(response);
				doRedirect();
			}
		});
		auth.error(function(error){
			console.log(error);
		});
	}

	function doRedirect() {
		AuthSrvc.isLoggedInAsBend = true;
		window.location.href = '#/bends';
	};
};
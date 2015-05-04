angular
    .module('laravelAndAngular.bends')
    .controller('BendLoginController', BendLoginController);

BendLoginController.$inject = ['$scope', '$state', 'AuthSrvc', 'utils'];
function BendLoginController($scope, $state, AuthSrvc, utils) {

	$scope.loginSubmit = function(user){
		var auth = AuthSrvc.auth(user);
		auth.success(function(response){
			if(response.error){
				alert(response.error.message)
			}else{
                utils.createBendObject(response);
				console.log(response);
				doRedirect();
			}
		});
		auth.error(function(error){
			console.log(error);
		});
	};

	function doRedirect() {
		AuthSrvc.isLoggedInAsBend = true;
		window.location.href = '#/bends';
	};
};
/**
 * Created by Nikola on 12.5.2015..
 */
angular.module('laravelAndAngular.bends.facebook', [
    'facebook'
])

.config(function(FacebookProvider) {
    FacebookProvider.init('581844348584751');
})
.controller('facebookCtrl', function ($scope, Facebook) {
    $scope.loginStatus = 'disconnected';
    $scope.facebookIsReady = false;
    $scope.user = null;
    $scope.login = function () {
        Facebook.login(function(response) {
            $scope.loginStatus = response.status;
        });
    };
    $scope.removeAuth = function () {
        Facebook.api({
            method: 'Auth.revokeAuthorization'
        }, function(response) {
            Facebook.getLoginStatus(function(response) {
                $scope.loginStatus = response.status;
            });
        });
    };
    $scope.api = function () {
        Facebook.api('/me', function(response) {
            $scope.user = response;
        });
    };
    $scope.$watch(function() {
            return Facebook.isReady();
        }, function(newVal) {
            if (newVal) {
                $scope.facebookIsReady = true;
            }
        }
    );
});
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
    $scope.getFbInfo = function () {
        Facebook.api('/me', function(response) {
            $scope.user = response;
        });
    };
    $scope.getProfileImg = function() {
        Facebook.api('/me?fields=picture', function(response) {
            $scope.profileImg = response.picture.data.url;
        })
    }
    $scope.getCoverImg = function() {
        Facebook.api('/me?fields=cover', function(response) {
            $scope.cover = response.cover.source;
        })
    }
    $scope.getFbImages = function() {
        Facebook.api('/me?fields=albums{photos{images{source}}}', function(response) {
            $scope.imgArray = [];
            for (i=0;i<response.albums.data.length;i++) {
                var album = response.albums.data[i];
                for (j=0;j<album.photos.data.length;j++) {
                    var albumPhoto = album.photos.data[j];
                    $scope.imgArray.push(albumPhoto.images[0].source);
                }
            }
        })
    }
    $scope.$watch(function() {
            return Facebook.isReady();
        }, function(newVal) {
            if (newVal) {
                $scope.facebookIsReady = true;
            }
        }
    );
});
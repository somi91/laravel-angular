/**
 * Created by milos on 2/15/2015.
 */
app.controller('IndexController',['$scope', '$http', '$location', function($scope, $http, $location){

    $scope.proba = "ovo je kada sam na root url-u";

    $http({
        method: "GET",
        url: "getUsers" //   /filterData
    }).success(function(promise){
        console.log(promise[0].name);
    });

}]);
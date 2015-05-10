angular
    .module('laravelAndAngular.bends')
    .controller('BendsController', BendsController);

BendsController.$inject = ['$scope', '$state', 'bends'];
function BendsController($scope, $state, bends) {
    var bend = bends.getBend();
    bend.success(function(response){
        if(response.error){
            alert(response.error.message)
        }else{
            console.log(response);
        }
    });
    bend.error(function(error){

    });

    //create emtpy array first and then store data inside it !!!
    $scope.bends = [];

    var bends = bends.getAllBends();
    bends.success(function(response){
        if(response.error){
            alert(response.error.message)
        }else{
            console.log(response);
            $scope.bends = response;
        }
    });

    bends.error(function(error){

    });

};
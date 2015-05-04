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

};
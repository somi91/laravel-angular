angular.module('laravelAndAngular.bends', [
  'ui.router'
])
  
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
      $stateProvider
        // the log-on screen
        .state('loginAsBend',{
            url : '/loginAsBend',
            templateUrl : 'app/bends/templates/login.html',
            controller : 'BendLoginController',
            data: { requireLogin: false }
        })
        //////////////
        // Bends //
        //////////////
        .state('bends', {
          abstract: true,
          url: '/bends',
          views: {
            '': {
              templateUrl: 'app/bends/templates/bends.html',
              controller: 'BendsController'
            },            
            'hint@': {
              template: '<a ui-sref="logout">Logout</a>'
            }
          },
          data: {
            requireLogin: true,
            bend: true
          }
          
        })

        /////////////////////
        // Bends > List //
        /////////////////////
        .state('bends.list', {
          url: '/{bandId}',
          data: {
            requireLogin: true,
            bend: true
          },
          views: {
              'specific-band': {
                  templateUrl: 'app/bends/templates/bends.list.html',
                  controller: ['$scope', '$stateParams', 'utils',
                      function (  $scope,   $stateParams,   utils) {
                          $scope.bend = utils.findById($scope.bends, $stateParams.bandId);
                      }]
              }
          }
        });
    }
  ]
);
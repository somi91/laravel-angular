angular.module('laravelAndAngular.bends', [
  'laravelAndAngular.users',
  'ui.router'
])
  
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
      $stateProvider
        // the log-on screen
        .state('loginAsBend',{
            url : '/loginAsBend',
            templateUrl : 'app/users/templates/login.html',
            controller : 'LoginController',
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
              controller: 'UsersController'
            },            
            'hint@': {
              template: '<a ui-sref="logout">Logout</a>'
            }
          },
          data: { requireLogin: true }
          
        })

        /////////////////////
        // Bends > List //
        /////////////////////
        .state('bends.list', {
          url: '',
          data: { requireLogin: true },
          templateUrl: 'app/bends/templates/bends.list.html'
        });
    }
  ]
);
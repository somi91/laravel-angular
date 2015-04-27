angular.module('laravelAndAngular.users', [
  'ui.router'
])
  
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
      $stateProvider
        // the log-on screen
        .state('login',{
            url : '/login',
            templateUrl : 'app/users/templates/login.html',
            controller : 'LoginController',
            data: { requireLogin: false }
        })
        //////////////
        // Users //
        //////////////
        .state('users', {
          abstract: true,
          url: '/users',
          
          resolve: {
            users: ['users',
              function( users){
                return users.all();
              }]
          },
          views: {
            '': {
              templateUrl: 'app/users/templates/users.html',
              controller: 'UsersController'
            },            
            'hint@': {
              template: '<a ui-sref="logout">Logout</a>'
            }
          },
          data: { requireLogin: true }
          
        })

        /////////////////////
        // Users > List //
        /////////////////////
        .state('users.list', {
          url: '',
          data: { requireLogin: true },
          templateUrl: 'app/users/templates/users.list.html'
        });
    }
  ]
);
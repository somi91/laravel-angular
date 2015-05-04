// Make sure to include the `ui.router` module as a dependency
angular.module('laravelAndAngular', [
  'laravelAndAngular.users',
  'laravelAndAngular.users.service',
  'laravelAndAngular.utils.service',
  'laravelAndAngular.bends',
  'laravelAndAngular.bends.service',
  'ui.router'
])

.run(
  [          '$rootScope', '$state', '$stateParams', 'authService', 'AuthSrvc',
    function ($rootScope,   $state,   $stateParams,   authService,   AuthSrvc) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;

      $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
        var shouldLogin = toState.data !== undefined
                      && toState.data.requireLogin 
                      && !authService.isLoggedIn;
        var bendShouldLogin = toState.data !== undefined
                      && toState.data.bend
                      && toState.name == "bends.list"
                      && toState.data.requireLogin 
                      && !AuthSrvc.isLoggedInAsBend;
        var userShouldLogin = toState.data !== undefined
                      && toState.data.user
                      && toState.name == "users.list"
                      && toState.data.requireLogin 
                      && !authService.isLoggedInAsUser;

        // NOT authenticated - wants any private stuff
        if(bendShouldLogin)
        {
            $state.go('loginAsBend');
            event.preventDefault();
            return;
        }

        if(userShouldLogin)
        {
            $state.go('login');
            event.preventDefault();
            return;
        }

        // authenticated (previously)
        if(authService.isLoggedInAsUser || AuthSrvc.isLoggedInAsBend) 
        {
          return;        
        }      
        
        // unmanaged
      });
    }
  ]
)

.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {

      /////////////////////////////
      // Redirects and Otherwise //
      /////////////////////////////
      $urlRouterProvider
        .when('/u?id', '/users/:id')
        .when('/user/:id', '/users/:id')

        .otherwise('/');


      //////////////////////////
      // State Configurations //
      //////////////////////////

      $stateProvider

        //////////
        // Home //
        //////////

        .state("home", {

          url: "/",
          template: '<p class="lead">Welcome to Comtrade test solution</p>' +
            '<p>Use the menu above to navigate. ' +
            'Pay attention to the <code>$state</code> and <code>$stateParams</code> values below.</p>' +
            '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
                'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
                'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
                'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'

        })

        .state('logout', {
          url: '/logout',
          controller: function($scope, $window, authService, AuthSrvc) {
            authService.isLoggedInAsUser = false;
            AuthSrvc.isLoggedInAsBend = false;
            // $window.location.reload();
            $window.location.href = '#/login';
            // $route.reload();
          }
        })

        ///////////
        // About //
        ///////////

        .state('about', {
          url: '/about',

          templateProvider: ['$timeout',
            function (        $timeout) {
              return $timeout(function () {
                return '<p class="lead">Some random text</p>' +
                        '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
                            'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
                            'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
                            'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
                            'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
                            'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>';
              }, 100);
            }]
        })
    }
  ]
);
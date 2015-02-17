/**
 * Created by milos on 2/15/2015.
 */
var app = angular.module('laravelAndAngular', ['ngRoute']);

    app.config(function($routeProvider, $locationProvider){
        $routeProvider
            .when("/", {
                title: 'Ewank Cams',
                templateUrl: 'app/templates/index.html',
                controller: 'IndexController'
            })
            .when("/moja", {
                title: 'Ewank Cams',
                templateUrl: 'app/templates/index.html'
            })
            .when("/new", {
                title: 'Ewank Cams',
                templateUrl: 'app/templates/newPage.html',
                controller: 'DrugiController'
            });

        console.log($routeProvider);
        $locationProvider.html5Mode({enabled: true, requireBase: false});

    });
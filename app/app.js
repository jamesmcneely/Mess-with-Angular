var jmDataSharing = angular.module('jmDataSharing', ['ngRoute']);

jmDataSharing.config(function($routeProvider){
    $routeProvider
        .when('/stuff', {
            controller: 'StuffController',
            templateUrl: 'app/views/stuff.html'
        })
        .when('/things', {
            controller: 'ThingsController',
            templateUrl: 'app/views/things.html'
        })
        .otherwise ( { redirectTo: '/' } );

});
var weather = angular.module('weather', [
    'ngRoute',
    'ngResource'
]);

weather.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
    })
    .when('/!/forecast', {
        templateUrl: 'templates/forecast.html',
        controller: 'forecastCtrl'
    })
})
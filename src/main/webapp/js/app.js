'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers','luegg.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/monopoly-field', {templateUrl: 'partials/monopoly-field.html', controller: 'monopolyFieldController'});
    $routeProvider.otherwise({redirectTo: '/monopoly-field'});

    $routeProvider.when('/create-game', {templateUrl: 'partials/create-game.html', controller: 'gameController'});

    //$routeProvider.when('/create-game', {templateUrl: 'partials/create-game.html', controller: 'gameController'});
    //$routeProvider.when('/create-game', {templateUrl: 'partials/create-game.html', controller: 'gameController'});
  }]);

var appServices = angular.module('myApp.services', []);
var appControllers = angular.module('myApp.controllers', []);
var appFilters = angular.module('myApp.filters', []);
var appDirectives = angular.module('myApp.directives', []);

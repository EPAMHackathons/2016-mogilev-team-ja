'use strict';


// Declare app level module which depends on filters, and services
angular.module('userApp', ['myApp.services', 'userApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    //$routeProvider.when('/monopoly-field', {templateUrl: 'partials/monopoly-field.html', controller: 'monopolyFieldController'});
    //$routeProvider.otherwise({redirectTo: '/monopoly-field'});

  }]);

var userAppControllers = angular.module('userApp.controllers', []);



'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'firebase'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/assets/partials/landing_page.html',
    controller: 'LandingPageController'
  });
  $routeProvider.when('/waitlist', {
    templateUrl: '/assets/partials/waitlist.html',
    controller: 'WaitlistController'
  });
  $routeProvider.when('/register', {
    templateUrl: '/assets/partials/register.html',
    controller: 'AuthController'
  });
  $routeProvider.when('/login', {
    templateUrl: '/assets/partials/login.html',
    controller: 'AuthController'
  });
  $routeProvider.otherwise({redirectTo: '/'});
}]);

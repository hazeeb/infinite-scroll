'use strict';

/**
 * @ngdoc overview
 * @name infiniteApp
 * @description
 * # infiniteApp
 *
 * Main module of the application.
 */
angular
  .module('infiniteApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngMaterial' 
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl' 
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

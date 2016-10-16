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
    'ngMaterial',
    'infinite-scroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl' 
      }) 
      .otherwise({
        redirectTo: '/'
      });
  });

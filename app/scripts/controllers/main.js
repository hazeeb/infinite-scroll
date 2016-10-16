'use strict';

/**
 * @ngdoc function
 * @name infiniteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the infiniteApp
 */
angular.module('infiniteApp')
  .controller('MainCtrl', function ($scope) {
 
	$scope.data = [1,2,3,4];

  	$scope.loadImages = function() {
	    var last = $scope.data[$scope.data.length - 1];
	    for(var i = 1; i <= 4; i++) {
	      $scope.data.push(last + i);
	    } 
  	};
 
 
  });

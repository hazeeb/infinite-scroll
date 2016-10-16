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
  
 
 	$scope.data = [{
 		no: 1,
 		img : 1
 	},{
 		no: 2,
 		img: 2,
 	},{
 		no: 3,
 		img: 3
 	},{
 		no: 4,
 		img: 4
 	},{
 		no:5,
 		img:5
 	},{
 		no:6,
 		img: 6
 	},{
 		no:7,
 		img :7
 	},{ no:8, img:8},{ no:9, img:9,},{ no: 10, img:10},{no:11,img:11},{no:12,img:12}];

  	$scope.load = function() {
	    var last = $scope.data[$scope.data.length - 1].no;
	    for(var i = 1; i <= 4; i++) {
	    	var random = Math.floor((Math.random() * 10) + 1);
	  		var number = (last +i); 
	      	$scope.data.push({no: number, img: random});
	    }  
  	};
 
  });

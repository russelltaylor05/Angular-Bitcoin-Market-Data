'use strict';

/* Controllers */

var bitcoinControllers = angular.module('bitcoinControllers', []);

bitcoinControllers.controller('coinDetailCtrl', ['$scope', '$http',  '$routeParams',

  function($scope, $http, $routeParams) {
    $scope.countryId = $routeParams.countryId;

    $http.get('data/markets.json').success(function(data) {
      $scope.markets = data;

    });


  }]);



bitcoinControllers.controller('coinListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('data/coin_ticker.json').success(function(data) {
      $scope.coins = data;

    });

  }]);
'use strict';

// Declare app level module which depends on views, and components
var bitcoinApp = angular.module('bitcoinApp', [
  'ngRoute',
  'ngStorage',
  'bitcoinControllers',
]);

bitcoinApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider.
    when('/', {
      templateUrl: 'views/my_markets.html',
      controller: 'myMarkets'
    }).  

    when('/list', {
      templateUrl: 'views/list.html',
      controller: 'coinListCtrl'
    }).  
    when('/markets', {
      templateUrl: 'views/all_markets.html',
      controller: 'coinMarketsCtrl'
    }).  
    when('/country/:countryId', {
      templateUrl: 'views/detail.html',
      controller: 'coinDetailCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);

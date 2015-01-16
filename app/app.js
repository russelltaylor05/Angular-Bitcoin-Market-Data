'use strict';

// Declare app level module which depends on views, and components
var bitcoinApp = angular.module('bitcoinApp', [
  'ngRoute',
  'bitcoinControllers',
]);

bitcoinApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider.
    when('/list', {
      templateUrl: 'view_list/list.html',
      controller: 'coinListCtrl'
    }).  
    when('/country/:countryId', {
      templateUrl: 'view_detail/detail.html',
      controller: 'coinDetailCtrl'
    }).
    otherwise({
      redirectTo: '/list'
    });
}]);

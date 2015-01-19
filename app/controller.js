'use strict';

/* Controllers */

var app = angular.module('bitcoinControllers', []);




app.controller('myMarkets', ['$scope', '$http', '$localStorage',
  function($scope, $http, $localStorage) {

    $scope.myMarkets = ($localStorage.myMarkets) ? $localStorage.myMarkets : [] ;    
    $scope.newMarketSymb = "";
    

    $http.get('data/markets.json').success(function(data) {
      $scope.marketData = data;
    });


    $scope.submitted = false;
    $scope.addMarket = function(valid){
      console.log(valid);
            
      for(var key in $scope.marketData) {
        if($scope.marketData[key].symbol == $scope.newMarketSymb) {
          $scope.myMarkets.push({
            symbol: $scope.marketData[key].symbol,
            currency: $scope.marketData[key].currency,
            avg: $scope.marketData[key].avg,
            high: $scope.marketData[key].high,    
            low: $scope.marketData[key].low            
          });
        }
      }
      
      $scope.submitted = true;
      form.$setPristine();
      $scope.newMarketSymb = "";

    };
    
    $scope.removeMarket = function(symbol){
      var markets = $scope.myMarkets;
      for(var key in markets) {
        if(markets[key].symbol == symbol) {
          markets.splice(key,1);
        }
      }  
    };    


  }]);

app.controller('HeaderController', ['$scope', '$location',
  function ($scope, $location)  { 
    $scope.isActive = function (viewLocation) { 
      return viewLocation === $location.path();
    };
  }
]);



  

app.factory('MarketService', ['$http', function($http) {
  return {
    getMarkets: function() {
      return $http.get('data/markets.json').success(function(result) {
        return result.data        
      });
    }
  }

}]);

app.controller('coinMarketsCtrl', ['$scope', 'MarketService',

  function($scope, MarketService) {
    
    MarketService.getMarkets().then(function(result){
      $scope.markets = result.data;
    });

    $scope.orderProp = 'symbol';

  }]);


app.controller('coinDetailCtrl', ['$scope', '$http',  '$routeParams',

  function($scope, $http, $routeParams) {
    $scope.countryId = $routeParams.countryId;

    $http.get('data/markets.json').success(function(data) {
      $scope.markets = data;
    });

  }]);



app.controller('coinListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('data/coin_ticker.json').success(function(data) {
      $scope.coins = data;

    });

  }]);
  
  


app.controller('MarketController', ['$scope',
  function($scope) {

    this.market = {};

    this.addMarket = function(marketList){
      marketList.push(this.market);
      this.market = {};
    };

  }]);


  

  
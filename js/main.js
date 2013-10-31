var passApp = angular.module('quickyPass', []);

passApp.controller('ClientsListCtrl', function ClientsListCtrl($scope, $http){

  $http.get('clients/clients.json').success(function(data){
    $scope.clients = data;
  });

  $scope.orderProp = 'name';
});


var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function PhoneListCtrl($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'age';
});

var quickyPass = angular.module('quickyPass', ['xeditable', 'ngSanitize']);

quickyPass.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

quickyPass.controller('ClientsListCtrl', function ClientsListCtrl($scope, $http){

  $http.get('list/list.json').success(function(data){
    $scope.clients = data;
    console.log(data);
  });

  $scope.orderProp = 'name';
});

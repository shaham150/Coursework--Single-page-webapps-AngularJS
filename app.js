(function () {
  'use strict';
  
  angular.module('DIApp', [])
    .controller('DIController', DIController); // Controller calls external function
    
    function DIController ($scope, $filter) {
      $scope.name = "Yaakov";
      
      $scope.upper = function () {
        var upCase = $filter("uppercase"); // Function to filter by uppercase letters
        $scope.name = upCase($scope.name)
      };
    }
})();

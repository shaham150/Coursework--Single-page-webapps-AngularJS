(function () {
  'use strict';
  
  angular.module('DIApp', [])
    .controller('DIController', DIController); // Controller calls external function
    
    function DIController ($scope) {
      $scope.name = "Yaakov";
    }
})();

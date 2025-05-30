// AngularJS script

( function () {
  'use strict';
  angular.module("nameCalc", [])
    .controller("nameCalcContr", function ($scope) {
      $scope.name = ""; // Initialize
      $scope.totalValue = 0; // Initialize
      
      $scope.displayNumeric = function (){
        var numericVal = calcNumeric($scope.name);
        $scope.totalValue = numericVal;
      }

     function calcNumeric(s){
       var total = 0; // Iniotialize

       // Calculate running total of numeric value:
       for (var i=0; i<s.length; i++){
          total += s.charCodeAt(i);
        }
       
       return total;
     } // End function
    
    }); // End controller definition

})();

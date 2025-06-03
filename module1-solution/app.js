(function () {
  'use strict';
  
  angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    // Initialize variables:
    $scope.message = "";
    $scope.lunchItems = "";
    $scope.lunchCount = 0;
    var outputMessage_global = ""; // Having a non-scope variable temporarily hold the output message later in the code was the only way it would work

    function countLunchItems (){
      $scope.lunchItems = $scope.lunchItems.split(","); // Split string intput at commas
      var count = 0; // Iniitalize running count of lunch items

      // Count items in the $scope.lunchItems array:
      for (let item of $scope.lunchItems){
        if (item != "") { count++; } // Only update count if the item is not an empty string
      }
    
      $scope.lunchCount = count; // Update the global variable
    };

    function checkLunch (){
      countLunchItems(); // Count the lunch items; this updates the $scope.lunchCount variable

      // If lunchCount is not zero, then check numebr of lunch items:
      if ($scope.lunchCount !=0){
        // Choose a message to display to the user based on the number of lunch items, save in local variable:
        var outputMessage = $scope.lunchCount <= 3 ? "Enjoy!" : "Too much!";

        // Update message variable:
        outputMessage_global = outputMessage;
      } else {
        // If lunchCount is zero,  ask user to enter data:
        outputMessage_global = "Please enter data first";
      } // End if/else
    };

    $scope.updateMessage = function () {
      // Check the lunch items, and update the message accordingly; this updates the outputMessage_global variable:
      checkLunch();
      // Set the message variable to the chosen output message:
      $scope.message = outputMessage_global;
    };
  
  } // End LunchCheckController
})();

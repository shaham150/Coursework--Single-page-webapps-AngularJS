(function () {
    'use strict';

    angular.module("MenuApp", ["ui.router", "data"])
        .controller("MenuAppController", MenuAppController);
    
    MenuAppController.$inject = ["MenuDataService"];
    function MenuAppController(MenuDataService) {
        var cntrl = this;

        cntrl.testVar = "hello world";

        // Create function to retrieve category data via MenuDataService:
        // cntrl.getAllCategories = function () {
        //     MenuDataService.getAllCategories().then(function () {
        //         console.log("here");
        //     });
        // }
    }
})();
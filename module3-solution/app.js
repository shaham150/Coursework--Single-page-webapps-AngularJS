(function () {
    'use strict';

    angular.module("NarrowItDownApp", [])
        .controller("NarrowItDownController", NarrowItDownController)
        .service("MenuSearchService", MenuSearchService)
        .directive("foundItems", foundItems);
    
    
    NarrowItDownController.$inject = ["MenuSearchService"];
    function NarrowItDownController(MenuSearchService){
        var ctrl = this;

        ctrl.setSearchTerm = function () {
            // Retrieve the list of matching menu items based on the user's search term:
            // MenuSearchService.getMatchedMenuItems(ctrl.searchTerm).then(function (result) {
            //         console.log("RETURN VAL:",result.data);
            //     }
            // );

            MenuSearchService.getMatchedMenuItems(ctrl.searchTerm)
                .then(function (response){
                    console.log("GOT A RESPONSE", response);
                });
        }

        return;
    }

    MenuSearchService.$inject = ["$http"];
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            var httpObj = {
                url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json",
            }

            return $http(httpObj).then(function (result) {
                // Create array to hold matching menu items:
                var foundItems = [];

                var resultData = result.data;

                // Loop over the categories of menu items retrieved from server:
                for (let category of Object.entries(resultData)){

                    var categoryItems = category[1].menu_items; // Grab the items from the given category
                    
                    // For each category, loop over its menu items:
                    for (let menuItem of Object.entries(categoryItems)) {
                        var menuItemDescription = menuItem[1].description; // Grab the item description from the object

                        // If the menu-item description contains the search term, add it to the list:
                        if (menuItemDescription.indexOf(searchTerm) != -1) {
                            foundItems.push(menuItem);
                        }
                    }
                }

                console.log("FOUND ITEMS:",foundItems);
                
                return foundItems; // Return to outer Promise
            }); // End Promise

        } // End 'getMatchedMenuItems' method

    } // End of controller

    function foundItems () {
        var ddo = {
            name: "foundItems",
            restrict: "E",
            templateUrl: "loader/itemsloaderindicator.template.html",
            scope: {
                foundArray: "<found"
            }
        };

        return ddo;
    }
})();
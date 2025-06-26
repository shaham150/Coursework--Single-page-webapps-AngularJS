(function () {
    'use strict';

    angular.module("data")
        .service("MenuDataService", MenuDataService);
    
    MenuDataService.$inject = ["$http"];
    function MenuDataService ($http) {
        var service = this;

        service.getAllCategories = function () {
            console.log("RETRIEVING CATEGORIES");

            var httpObj = {
                url: "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json"
            }

            // Grab list of categories from server:
            return $http(httpObj).then(function (response) {
                console.log("SERVICE - RESPONSE", response.data, "END");

                return Object.values(response.data);
            });
        }

        service.getItemsForCategory = function(categoryShortName) {

            var httpObj = {
                url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" + categoryShortName + ".json"
            }

            // Grab list of items for the given category from the server:
            return $http(httpObj).then(function (response) {
                return Object.values(response.data);
            });;
        }
    }

    
})();
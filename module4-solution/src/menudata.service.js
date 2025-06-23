(function () {
    'use strict';

    angular.module("data")
        .service("MenuDataService", MenuDataService)
        .constant("apiBaseUrl", "https://coursera-jhu-default-rtdb.firebaseio.com/");
    
    MenuDataService.$inject = ["$http"];
    function MenuDataService ($http) {
        var service = this;

        var getAllCategories = function () {
            var getUrl = apiBaseUrl + "categories.json"

            var httpObj = {
                url: apiBaseUrl
            }

            return $http(httpObj);
        }

        var getItemsForCategory = function(categoryShortName) {
            var getUrl = apiBaseUrl + "menu_items/" + categoryShortName + ".json";

            var httpObj = {
                url: getUrl
            }

            return $http(httpObj);
        }
    }

    
})();
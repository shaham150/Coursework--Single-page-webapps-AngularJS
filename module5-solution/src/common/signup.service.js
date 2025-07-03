(function () {
    'use strict';

    angular.module("common")
        .service("SignupService", SignupService);
    
    SignupService.$inject = ['$http', 'ApiPath']
    function SignupService ($http, ApiPath) {
        var service = this;

        service.getFaveItem = function (itemCode) {
            console.log("FAVE ITEM CODE IS: ", itemCode);
            return $http.get("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json").then(function (response) {
                console.log(response.data);

                for (let ctgry in response.data) {
                    var currentCat = response.data[ctgry].category.short_name;
                    console.log(currentCat);

                    if (currentCat.toLowerCase() == itemCode) {
                        console.log("MATCH FOUND");
                        service.faveMenuItem = faveItem; // Store fave item for later use
                        return faveItem;
                    }
                }

                console.log("no match");
                service.faveMenuItem = null;                
            });
        }
    }

})();
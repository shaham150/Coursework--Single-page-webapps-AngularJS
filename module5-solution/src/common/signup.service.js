(function () {
    'use strict';

    angular.module("common")
        .service("SignupService", SignupService);
    
    SignupService.$inject = ['$http', 'ApiPath']
    function SignupService ($http, ApiPath) {
        var service = this;

        service.getFaveItem = function (itemCode) {
            console.log("inside");
            return "hi";
            // console.log("FAVE ITEM CODE: ", itemCode);
            // return $http.get("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json").then(function (response) {
            //     console.log(response.data);
            //     return response.data;
            // });
        }

        service.storeFaveItem = function (itemName) {
            service.faveMenuItem = itemName;
        }


    }
})();
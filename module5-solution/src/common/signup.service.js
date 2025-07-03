(function () {
    'use strict';

    angular.module("public")
        .service("SignupService", SignupService);
    
    SignupService.$inject = ['$http', 'ApiPath']
    function SignupService ($http, ApiPath) {
        var service = this;

        service.faveMenuItem;

        service.getFaveItem = function (itemCode) {
            console.log("FAVE ITEM CODE: ", itemCode);
            return $http.get(ApiPath + "/menu_items.json").then(function (response) {
                console.log(response.data);
                return response.data;
            });
        }

        service.storeFaveItem = function (itemName) {
            service.faveMenuItem = itemName;
        }


    }
})();
(function () {
    'use strict';

    angular.module("NarrowItDownApp", []")
        .controller("NarrowItDownController", NarrowItDownController)
        .service("MenuSearchService", MenuSearchService);
    
    NarrowItDownController.$inject = ["MenuSearchService"];
    function NarrowItDownController("MenuSearchService"){
        //
    }

    MenuSearchService.$inject = ["$http"];
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            var httpObj = {
                url: "",
                params: {}
            }

            return $http(httpObj).then(function (result) {

            }).catch(function (error) {
                console.log(error);
            });
        }

    }
})();
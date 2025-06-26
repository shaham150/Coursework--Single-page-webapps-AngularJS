(function () {
    'use strict';

    angular.module("MenuApp")
        .config(RoutesConfig);

    
    RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");


        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "src/home.template.html"
            })
            .state(
                "categories", {
                    url: "/categories",
                    resolve: {
                        catList: ["MenuDataService", function (MenuDataService) {
                            return MenuDataService.getAllCategories().then(function (response) {
                                console.log("inside", response);
                                return response;
                            });
                        }]

                    },
                    templateUrl: "src/main-categories.template.html",
                    controller: "MenuAppController as cntrl"
                }
            )
            .state(
                "items", {
                    url: "/items",
                    constoller: "MenuAppController as cntrl",
                    resolve: {
                        list: ["MenuDataService", function () {
                            return MenuDataService.getItemsForCategory().then(function (response) {
                                return response;
                            });
                        }]
                    },
                    templateUrl: "src/main-categories.template.html",
                    controller: "MenuAppController as cntrl"
                }
            );
    }
})();
(function () {
    'use strict';

    angular.module("MenuApp")
        .config("RoutesConfig");

    
    RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("home");


        $stateProvider
            .state("home", {
                url: "/",
                template: "<h1>Welcome</h1>"
            })
    }
})();
(function () {
    'use strict';

    angular.module("MenuApp")
        .component("categories", {
            templateUrl: "src/categories.template.html",
            bindings: {
                categoriesList: "<"
            }
        });
})();
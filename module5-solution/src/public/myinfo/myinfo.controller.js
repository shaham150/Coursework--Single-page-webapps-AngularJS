(function () {
    'use strict';

    angular.module("public")
        .controller("myinfoController", myinfoController);
    
    myinfoController.$inject = ["SignupService"];
    function myinfoController(SignupService){
        var $ctrl = this;

        $ctrl.SignupService = SignupService;
    }
})();
(function () {
    'use strict';

    angular.module("public")
        .controller("signupController", signupController);
    
    signupController.$inject = ["SignupService"];
    function signupController(SignupService){
        var $ctrl = this;

        $ctrl.SignupService = SignupService;
    }
})();
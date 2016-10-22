(function () {
    'use strict';

    angular.module('blocshopTest.shared').factory('utilities', utilities);

    utilities.$inject = [];

    function utilities() {
        var service = {
            isFunction: isFunction
        };

        return service;

        function isFunction(object) {
            return object != null && typeof object == "function";
        }
    }
})();
(function () {
    'use strict';

    angular.module('blocshopTest.Shared').factory('logger', logger);

    logger.$inject = [];

    function logger() {
        var service = {
            log: log
        };

        return service;

        function log(message) {
            console.log(message);
        }
    }
})();
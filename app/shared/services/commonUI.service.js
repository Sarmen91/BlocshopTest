(function () {
    'use strict';

    angular.module('blocshopTest.Shared').factory('commonUI', commonUI);

    commonUI.$inject = ['$rootScope'];

    function commonUI($rootScope) {
        var processCount = 0;

        var service = {
            startLoading: startLoading,
            stopLoading: stopLoading
        };

        return service;

        function startLoading() {
            processCount++;

            if (processCount >= 1) {
                $rootScope.isLoading = true;
            }
        }

        function stopLoading() {
            processCount--;

            if (processCount < 0)
                processCount = 0;

            if (processCount == 0) {
                $rootScope.isLoading = false;
            }
        }
    }
})();
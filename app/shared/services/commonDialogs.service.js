(function () {
    'use strict';

    angular.module('blocshopTest.shared').factory('commonDialogs', commonDialogs);

    commonDialogs.$inject = ['$uibModal'];

    function commonDialogs($uibModal) {
        var service = {
            showError: showError,
            showQuestion: showQuestion
        };

        return service;

        function showError(message, title) {
            return $uibModal.open({
                templateUrl: 'app/shared/templates/dialogTemplates/errorDialog.html',
                controller: 'ErrorDialogController as vm',
                size: 'sm',
                resolve: {
                    title: function () { return title; },
                    message: function () { return message; }
                }
            }).result;
        }

        function showQuestion(message, title) {
            return $uibModal.open({
                templateUrl: 'app/shared/templates/dialogTemplates/questionDialog.html',
                controller: 'QuestionDialogController as vm',
                size: 'md',
                resolve: {
                    title: function () { return title; },
                    message: function () { return message; }
                }
            }).result;
        }
    }
})();
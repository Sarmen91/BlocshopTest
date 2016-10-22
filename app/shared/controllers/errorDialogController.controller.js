(function () {
    'use strict';

    angular.module('blocshopTest.shared').controller('ErrorDialogController', ErrorDialogController);

    ErrorDialogController.$inject = ['$uibModalInstance', 'title', 'message'];

    function ErrorDialogController($uibModalInstance, title, message) {
        var vm = this;
        vm.title = (angular.isDefined(title)) ? title : "Error";
        vm.message = (angular.isDefined(message)) ? message : "Internal Error";
        vm.close = close;

        activate();

        function activate() {

        }

        function close() {
            $uibModalInstance.dismiss('cancel');
        }
    }
})();
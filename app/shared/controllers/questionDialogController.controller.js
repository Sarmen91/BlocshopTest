(function () {
    'use strict';

    angular.module('blocshopTest.shared').controller('QuestionDialogController', QuestionDialogController);

    QuestionDialogController.$inject = ['$uibModalInstance', 'title', 'message'];

    function QuestionDialogController($uibModalInstance, title, message) {
        var vm = this;
        vm.title = (angular.isDefined(title)) ? title : "Question";
        vm.message = message;
        vm.yes = yes;
        vm.no = no;

        activate();

        function activate() {

        }

        function yes() {
            $uibModalInstance.close();
        }

        function no() {
            $uibModalInstance.dismiss('cancel');
        }
    }
})();
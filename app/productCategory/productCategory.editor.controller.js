(function () {
    'use strict';

    angular.module('blocshopTest.productCategory').controller('ProductCategoryEditorController', ProductCategoryEditorController);

    ProductCategoryEditorController.$inject = ['$uibModalInstance'];

    function ProductCategoryEditorController($uibModalInstance) {
        var vm = this;
        vm.title = "Add Product Category";
        vm.productCategory = {};
        vm.save = save;
        vm.close = close;

        activate();

        function activate() {
          
        }

        function save() {
            $uibModalInstance.close(vm.productCategory.Name);
        }

        function close() {
            $uibModalInstance.dismiss('cancel');
        }
    }
})();
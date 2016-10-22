(function () {
    'use strict';

    angular.module('blocshopTest.productCategory').controller('ProductCategoryController', ProductCategoryController);

    ProductCategoryController.$inject = ['$q', 'productCategoryService', 'commonUI', 'commonDialogs', 'logger'];

    function ProductCategoryController($q, productCategoryService, commonUI, commonDialogs, logger) {
        var vm = this;
        vm.productCategories = [];

        vm.appendRootProductCategory = appendRootProductCategory;
        vm.promptProductCategoryItem = promptProductCategoryItem;
        vm.askDeleteProductCategory = askDeleteProductCategory;
        vm.createItem = createItem;
        vm.deleteItem = deleteItem;

        activate();

        function activate() {
            logger.log("Product Category Controller Activated");

            commonUI.startLoading();

            productCategoryService.loadProductServices().then(function (items) {
                vm.productCategories = items;
            }).finally(function () {
                commonUI.stopLoading();
            });
        }

        function appendRootProductCategory() {
            productCategoryService.openProductEditorDialog().then(function (name) {
                var newItem = {
                    Name: name
                };

                vm.productCategories.push(newItem);

                createItem(newItem);
            });
        }

        function promptProductCategoryItem() {
            return productCategoryService.openProductEditorDialog();
        }

        function askDeleteProductCategory() {
            return commonDialogs.showQuestion("Are you sure you want to delete this Product Category ?");
        }

        function createItem(item, parentId) {
            commonUI.startLoading();

            productCategoryService.createItem(item, parentId).finally(function () {
                commonUI.stopLoading();
            });
        }

        function deleteItem(id) {
            commonUI.startLoading();

            productCategoryService.deleteItem(id).finally(function () {
                commonUI.stopLoading();
            });
        }
    }
})();
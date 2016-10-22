(function () {
    'use strict';

    angular.module('blocshopTest.productCategory').factory('productCategoryService', productCategoryService);

    productCategoryService.$inject = ['$q', '$uibModal', 'commonDialogs'];

    function productCategoryService($q, $uibModal, commonDialogs) {
        var productCategories = [
                {
                    Id: 1,
                    Name: "PC Components",
                    Children: [
                        {
                            Id: 2,
                            Name: "CPU"
                        },
                        {
                            Id: 3,
                            Name: "RAM"
                        },
                        {
                            Id: 4,
                            Name: "Storage",
                            Children: [
                                {
                                    ID: 5,
                                    Name: "HDD"
                                },
                                {
                                    ID: 6,
                                    Name: "SSD"
                                }
                            ]
                        }]
                },
                {
                    Id: 11,
                    Name: "Computer Accessories",
                    Children: [
                        {
                            Id: 12,
                            Name: "Keyboard"
                        },
                        {
                            Id: 13,
                            Name: "Mouse"
                        },
                        {
                            Id: 14,
                            Name: "Speakers"
                        }]
                }
        ];

        var service = {
            loadProductServices: loadProductServices,
            openProductEditorDialog: openProductEditorDialog,
            createItem: createItem,
            deleteItem: deleteItem,
        };

        return service;

        function loadProductServices() {
            return $q(function (resolve, reject) {
                //simulating network request time
                setTimeout(function () {
                    resolve(productCategories);
                }, 1000);
            });
        }

        function openProductEditorDialog() {
            return $uibModal.open({
                templateUrl: 'app/productCategory/productCategory.editor.html',
                controller: 'ProductCategoryEditorController as vm',
                size: 'sm'
            }).result;
        }

        function createItem(item, parentId) {
            return $q(function (resolve, reject) {
                //simulating network request time
                setTimeout(function () {
                    resolve(productCategories);
                }, 1000);
            });
        }

        function deleteItem(id) {
            return $q(function (resolve, reject) {
                //simulating network request time
                setTimeout(function () {
                    resolve(productCategories);
                }, 1000);
            });
        }
    }
})();
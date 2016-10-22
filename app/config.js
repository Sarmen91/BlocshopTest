(function () {
    'use strict';

    angular.module('blocshopTest')
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'app/home/Home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .when('/productCategory', {
                templateUrl: 'app/productCategory/productCategory.html',
                controller: 'ProductCategoryController',
                controllerAs: 'vm'
            }).otherwise({
                redirectTo: '/home'
            });
    }
})();
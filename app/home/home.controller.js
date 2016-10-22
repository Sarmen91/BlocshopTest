(function () {
    'use strict';

    angular.module('blocshopTest.Home').controller('HomeController', HomeController);

    HomeController.$inject = [];

    function HomeController() {
        var vm = this;
        vm.welcomeText = "Hello and welcome to the test assignment, please navigate to the Product Categories menu item.";
        
        activate();

        function activate() {
          
        }
    }
})();
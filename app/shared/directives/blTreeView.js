(function () {
    'use strict';

    angular.module('blocshopTest.shared').directive('blTreeView', ['utilities', blTreeView]);

    function blTreeView(utilities) {
        return {
            templateUrl: 'app/shared/templates/blTreeView.html',
            restrict: "E",
            replace: true,
            scope: {
                items: '=',
                beforeItemAdded: '=',
                beforeItemDeleted: '=',
                afterItemAdded: '=',
                afterItemDeleted: '='
            },
            link: function (scope, element, attrs) {
                scope.add = function (item) {
                    if (utilities.isFunction(scope.beforeItemAdded)) {
                        scope.beforeItemAdded().then(function (name) {
                            addItem(item, name);
                        });
                    }
                };

                scope.delete = function (item) {
                    if (utilities.isFunction(scope.beforeItemDeleted)) {
                        scope.beforeItemDeleted().then(function () {
                            deleteItem(item);
                        });
                    }
                };

                scope.toggleCollapse = function ($event, item) {
                    if (item.Children == null || item.Children.length == 0)
                        return;

                    item.isCollapsed = !item.isCollapsed;

                    $($event.currentTarget).parent().next().toggle();
                }

                function addItem(item, name) {
                    if (item.Children == null)
                        item.Children = [];

                    var newItem = { Name: name, Children: [] };

                    item.Children.push(newItem);

                    if (utilities.isFunction(scope.afterItemAdded)) {
                        scope.afterItemAdded(newItem, item.Id);
                    }
                }

                function deleteItem(item) {
                    deleteChildren(item.Children);

                    for (var i = 0; i < scope.items.length; i++) {
                        if (scope.items[i].Id == item.Id) {
                            scope.items.splice(i, 1);
                            break;
                        }
                    }

                    if (utilities.isFunction(scope.afterItemDeleted)) {
                        scope.afterItemDeleted(item.Id);
                    }
                }

                function deleteChildren(items) {
                    if (items != null && items.length > 0) {
                        for (var i = 0; i < items.length; i++) {
                            if (items[i].Children != null && items[i].Children.length > 0) {
                                deleteChildren(items[i].Children);
                            }

                            items[i].Children = [];
                        }
                    }
                }
            }
        };
    }
})();
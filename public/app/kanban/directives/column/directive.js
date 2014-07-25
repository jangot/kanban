define([

    'app',

    'angular',

    'kanban/directives/column/controller'

], function(app, angular, Controller) {
    "use strict";

    var container = angular.element(window);

    app.directive('appKanbanColumn', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                board: '=',
                columnId: '=column',
                index: '='
            },
            templateUrl: '/app/kanban/directives/column/template.html',
            controller: Controller,
            link: function(scope, element, attrs) {
                var scrollElement = element.find('.column-list');
                scrollElement.scroll(function() {
                    var top = scrollElement.scrollTop();
                    scope.topDrop = (top == 0);
                });

                var resize = function() {
                    scope.height = element.height();
                    scope.width = element.width();
                };
                resize();
                container.resize(resize);
                scope.$on('$destroy', function() {
                    container.off('resize' ,resize);
                });
            }
        }
    });
});

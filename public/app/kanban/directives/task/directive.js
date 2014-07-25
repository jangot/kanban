define([

    'app',

    'kanban/directives/task/controller'

], function(app, Controller) {
    "use strict";

    var container = angular.element(window);

    app.directive('appKanbanTask', function() {
        return {
            restrict: 'E',
            scope: {
                //TODO some bug
                taskId: '=task',
                column: '=',
                index: '='
            },
            templateUrl: '/app/kanban/directives/task/template.html',
            link: function(scope, element, attrs) {
                var resize = function() {
                    scope.height = element.height();
                    scope.width = element.width();
                };

                resize();
                container.on('resize' ,resize);
                scope.$on('$destroy', function() {
                    container.off('resize' ,resize);
                })
            },
            controller: Controller
        }
    });
});

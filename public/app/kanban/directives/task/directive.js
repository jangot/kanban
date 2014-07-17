define([

    'app',

    'kanban/directives/task/controller'

], function(app, Controller) {
    "use strict";

    app.directive('appKanbanTask', function() {
        return {
            restrict: 'E',
            scope: {
                //TODO some bug
                taskId: '=task',
                column: '='
            },
            templateUrl: '/app/kanban/directives/task/template.html',
            link: function(scope, element, attrs) {
            },
            controller: Controller
        }
    });
});

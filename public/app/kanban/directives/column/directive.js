define([

    'app',

    'kanban/directives/column/controller'

], function(app, Controller) {
    "use strict";

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
            controller: Controller
        }
    });
});

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
                columnId: '=column'
            },
            templateUrl: '/app/kanban/directives/column/template.html',
            link: function(scope, element, attrs) {},
            controller: Controller
        }
    });
});

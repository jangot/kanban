define([

    'app',

    'kanban/directives/board/controller'

], function(app, Controller) {
    "use strict";

    app.directive('appKanbanBoard', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                board: '=',
                tasks: '='
            },
            templateUrl: '/app/kanban/directives/board/template.html',
            link: function(scope, element, attrs) {},
            controller: Controller
        }
    });
});

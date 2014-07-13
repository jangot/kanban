define([

    '../../../app'

], function(app) {
    "use strict";

    app.directive('appKanbanTask', function() {
        return {
            restrict: 'E',
            scope: {
                task: '='
            },
            templateUrl: '/app/kanban/directives/task/template.html',
            link: function(scope, element, attrs) {}
        }
    });
});

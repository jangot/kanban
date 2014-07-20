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
            link: function(scope, element, attrs) {

                scope.getIndexByOffset = function(offsetY) {

                    var result = 0;
                    var li = element.find('li')
                    li.each(function(index) {
                        console.log(offsetY, this.offsetTop)
                        if (offsetY < this.offsetTop) {
                            result = index;
                            return false;
                        }
                    });

                    return 0;
                }
            },
            controller: Controller
        }
    });
});

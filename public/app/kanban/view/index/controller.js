define([

    'app',

    'angular',

    'kanban/resources/board',
    'kanban/resources/task'

], function(app, angular){
    "use strict";

    app.controller('KanbanIndex', function($scope, Board, Task, $q){
        $scope.tasks = {};
        $scope.boards = [];

        var tasks = Task.get();
        tasks.$promise.then(function() {
            angular.forEach(tasks, function(task) {
                $scope.tasks[task.id] = task;
            });
        });

        var boards = Board.get();

        $q.all([tasks.$promise, boards.$promise]).then(function() {
            $scope.boards = boards;
        });

        $scope.dropCallback = function() {
            console.log(arguments)
        }
    });
});

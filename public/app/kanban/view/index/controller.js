define([

    'app',

    'angular',

    'kanban/resources/board',
    'kanban/resources/task'

], function(app, angular){
    "use strict";

    app.controller('KanbanIndex', function($scope, $rootScope, Board, Task, $q){
        $scope.tasks = {};
        $scope.boards = [];

        function loadModels() {
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
        }

        $scope.dropCallback = function(task, board, index) {
            if (!task || ! board) {
                console.warn('Data error');
                return;
            }
            if (!index) {
                index = 0;
            }

            board.tasks.splice(index, 0, task.id);
            var promise = board.save();
            promise.finaly(loadModels);
        }



        loadModels()
        $rootScope.$on('data:update',function(event, type) {
            console.log('update model:', type);
            loadModels();
        });
    });
});

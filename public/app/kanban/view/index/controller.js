define([

    'app',

    'angular',

    'kanban/resources/board',
    'kanban/resources/column',
    'kanban/resources/task'

], function(app, angular){
    "use strict";

    app.controller('KanbanIndex', function($scope, $rootScope, Column, Task, Board,
                                           dataAction, $q)
    {
        $scope.columns = {};
        $scope.board = null;

        function loadModels() {
            var columns = Column.query();
            columns.$promise.then(function() {
                angular.forEach(columns, function(column) {
                    $scope.columns[column.id] = column;
                });
            });

            var board = Board.get(0);
            $q.all([board.$promise, columns.$promise]).then(function() {
                $scope.board = board;
            });
        }

        $scope.createColumn = function() {
            if ($scope.board.columns.length > 3) {
                alert('You can not create more columns');
                return;
            }
            dataAction.columnCreate($scope.board, {
                title: 'New column',
                tasks: []
            })
        }

        loadModels()
        var unbindBoard = $rootScope.$on('data:update:board', loadModels);
        var unbindColumn = $rootScope.$on('data:update:column', loadModels);
        $scope.$on('$destroy', unbindBoard);
        $scope.$on('$destroy', unbindColumn);
    });
});

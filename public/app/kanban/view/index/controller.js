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
        $scope.board = null;

        function loadModels() {
            var MAIN_BOARD_ID = 0;
            var board = Board.get(MAIN_BOARD_ID);
            board.$promise.then(function() {
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
            });
        }

        loadModels()
        var unbindBoard = $rootScope.$on('data:update:board', loadModels);
        $scope.$on('$destroy', unbindBoard);
    });
});

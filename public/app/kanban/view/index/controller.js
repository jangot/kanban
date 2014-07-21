define([

    'app',

    'angular',

    'kanban/resources/board',
    'kanban/resources/column',
    'kanban/resources/task'

], function(app, angular){
    "use strict";

    app.controller('KanbanIndex', function($scope, $rootScope, Column, Task, Board,
                                           dataAction, drugAndDropBuffer)
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

        $scope.dropColumn = function(e, ui, index) {
            var drugColumn = drugAndDropBuffer.get('dragColumn');
            var fromBoard = drugAndDropBuffer.get('fromBoard');

            var promise = fromBoard.removeColumn(drugColumn.id);
            promise.then(function() {
                $scope.board.addColumn(drugColumn.id, index);
            });
        }

        loadModels()
        var unbindBoard = $rootScope.$on('data:update:board', loadModels);
        $scope.$on('$destroy', unbindBoard);
    });
});

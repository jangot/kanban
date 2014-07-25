define([

    'app',

    'angular',

    'kanban/services/dataAction',

    'kanban/services/drugAndDropBuffer'

], function(app, angular){
    "use strict";

    return function($scope, $rootScope, Column, dataAction, drugAndDropBuffer){
        $scope.column = null;
        $scope.topDrop = true;
        function loadColumn() {
            $scope.column = Column.get($scope.columnId);
        }

        $scope.saveColumn = function() {
            $scope.column.save();
        }

        $scope.createTask = function() {
            var params = {
                title: 'Some title',
                description: 'Some description'
            }

            dataAction.taskCreate($scope.column, params);
        }

        $scope.remove = function() {
            var id = $scope.column.id;
            $scope.board.removeColumn(id);
        }

        $scope.dropTask = function(e, ui, index) {
            var drugTask = drugAndDropBuffer.get('dragTask');
            var fromColumn = drugAndDropBuffer.get('fromColumn');

            var promise = fromColumn.removeTask(drugTask.id);
            promise.then(function(column) {
                $scope.column.addTask(drugTask.id, index);
            });
        }

        $scope.startDrugColumn = function(event, grugdata, column) {
            angular.element('body>.column')
                .height($scope.height)
                .width($scope.width);

            $scope.drug = true;
            drugAndDropBuffer.put('dragColumn', column);
            drugAndDropBuffer.put('fromBoard', $scope.board);
        }

        $scope.endDrugColumn = function() {
            $scope.drug = false;
            drugAndDropBuffer.clear('dragColumn');
            drugAndDropBuffer.clear('fromBoard');
        }

        $scope.dropColumn = function() {
            var indexForAdd = $scope.index + 1;
            var drugColumn = drugAndDropBuffer.get('dragColumn');
            var fromBoard = drugAndDropBuffer.get('fromBoard');

            if (fromBoard.id === $scope.board.id) {
                var oldIndex = $scope.board.columns.indexOf(drugColumn.id);
                if(oldIndex < indexForAdd) {
                    indexForAdd--;
                }
            }

            var promise = fromBoard.removeColumn(drugColumn.id);
            promise.then(function() {
                $scope.board.addColumn(drugColumn.id, indexForAdd);
            });
        }

        loadColumn();
        var unbind = $rootScope.$on('data:update:column', loadColumn);
        $scope.$on('$destroy', unbind);
    }
});

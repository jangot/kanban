define([

    'app',

    'kanban/services/dataAction',

    'kanban/services/drugAndDropBuffer'

], function(){
    "use strict";

    return function($scope, $rootScope, Column, dataAction, drugAndDropBuffer){
        $scope.column = null;
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

        $scope.dropCallback = function(e, ui, index) {
            var drugTask = drugAndDropBuffer.get('dragTask');
            var fromColumn = drugAndDropBuffer.get('fromColumn');

            var promise = fromColumn.removeTask(drugTask.id);
            promise.then(function(column) {
                $scope.column.addTask(drugTask.id, index);
            });
        }

        loadColumn();
        var unbind = $rootScope.$on('data:update:column', loadColumn);
        $scope.$on('$destroy', unbind);
    }
});

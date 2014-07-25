define([

    'app',

    'angular',

    'kanban/services/drugAndDropBuffer'

], function(app, angular){
    "use strict";

    return function($scope, $rootScope, Task, drugAndDropBuffer){
        $scope.task = null;
        function loadTask() {
            $scope.task = Task.get($scope.taskId);
        }

        $scope.remove = function() {
            var id = $scope.task.id;
            $scope.column.removeTask(id);
        }

        $scope.taskSave = function() {
            $scope.task.save();
        }

        $scope.startDrug = function(event, grugdata, task) {
            angular.element('body>.task').width($scope.width);

            $scope.drug = true;
            drugAndDropBuffer.put('dragTask', task);
            drugAndDropBuffer.put('fromColumn', $scope.column);
        }

        $scope.endDrug = function() {
            $scope.drug = false;
            drugAndDropBuffer.clear('dragTask');
            drugAndDropBuffer.clear('fromColumn');
        }

        $scope.dropCallback = function() {
            var indexForAdd = $scope.index + 1;
            var drugTask = drugAndDropBuffer.get('dragTask');
            var fromColumn = drugAndDropBuffer.get('fromColumn');

            if (fromColumn.id === $scope.column.id) {
                var oldIndex = $scope.column.tasks.indexOf(drugTask.id);
                if(oldIndex < indexForAdd) {
                    indexForAdd--;
                }
            }

            var promise = fromColumn.removeTask(drugTask.id);
            promise.then(function() {
                $scope.column.addTask(drugTask.id, indexForAdd);
            });
        }

        loadTask();
        var unbind = $rootScope.$on('data:update:task', loadTask);
        $scope.$on('$destroy', unbind);
    }
});

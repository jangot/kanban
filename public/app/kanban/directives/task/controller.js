define([

    'app',

    'angular',

    'kanban/services/drugAndDropBuffer'

], function(app, angular){
    "use strict";

    return function($scope, $rootScope, Task, drugAndDropBuffer){
        var taskIndex = 0;
        angular.forEach($scope.column.tasks, function(taskId, index) {
            if (taskId == $scope.taskId) {
                taskIndex = index;
            }
        });

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
            drugAndDropBuffer.put('dragTask', task);
            drugAndDropBuffer.put('fromColumn', $scope.column);
        }

        $scope.endDrug = function() {
            drugAndDropBuffer.clear('dragTask');
            drugAndDropBuffer.clear('fromColumn');
        }

        $scope.dropCallback = function() {
            var indexForAdd = taskIndex + 1;
            var drugTask = drugAndDropBuffer.get('dragTask');
            var fromColumn = drugAndDropBuffer.get('fromColumn');

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

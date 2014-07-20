define([

    'app',

    'angular'

], function(app, angular){
    "use strict";

    var body = angular.element('body');


    return function($scope, $rootScope, KEY, Task){
        $scope.task = null;
        function loadTask() {
            $scope.task = Task.get($scope.taskId);
            $scope.edit = null
        }

        $scope.remove = function() {
            var id = $scope.task.id;
            $scope.column.removeTask(id);
        }

        $scope.taskSave = function() {
            $scope.task.save();
        }

        $scope.startCallback = function(item) {
            $rootScope.$emit('startDrop', $scope.task);
        }

        loadTask()
        var unbind = $rootScope.$on('data:update:task', loadTask);
        $scope.$on('$destroy', unbind);
    }
});

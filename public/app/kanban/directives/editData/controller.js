define([

    'app',

    'angular'

], function(app, angular){
    "use strict";

    var RANDOM_NAME = [
        'More name',
        'Random change',
        'Some name',
        'Is name',
        'And name',
        'My name',
        'Not name',
        'MB description',
        'For testing name'
    ];

    var indexName = 0;
    function getRandomName() {
        indexName++;
        if (indexName > (RANDOM_NAME.length -1)) {
            indexName = 0;
        }

        return RANDOM_NAME[indexName];
    }

    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    return function($scope, dataColumn, dataTask, $timeout){
        $scope.show = true;

        function getRandomColumn() {
            var i = getRandomInt(0, dataColumn.length - 1);

            return dataColumn[i];
        }

        function getTaskById(id) {
            var i = _.findIndex(dataTask, function(task) {
                return task.id == id;
            });

            return dataTask[i];
        }

        $scope.changeData = function() {
            var column = getRandomColumn();
            var taskId = getRandomInt(0, column.tasks.length -1);
            if (!taskId) {
                return;
            }

            var task = getTaskById(taskId);
            $scope.show = false;

            $scope.$evalAsync(function() {
                task.title = getRandomName();
                $timeout(function() {
                    $scope.show = true;
                }, 500);
            });
        }

    }
});

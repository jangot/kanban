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

        var columnIndex = 0;
        function getRandomColumn() {
            var result = dataColumn[columnIndex];

            columnIndex++
            if (columnIndex == dataColumn.length) {
                columnIndex = 0;
            }

            return result;
        }

        function getTaskById(id) {
            var i = _.findIndex(dataTask, function(task) {
                return task.id == id;
            });

            return dataTask[i];
        }

        $scope.changeData = function() {
            $scope.show = false;

            var column = getRandomColumn();
            var taskIndex = getRandomInt(0, column.tasks.length -1);
            var task = getTaskById(column.tasks[taskIndex]);

            if (!task) {
                return;
            }
            $scope.$evalAsync(function() {
                task.title = getRandomName();
                $timeout(function() {
                    $scope.show = true;
                }, 500);
            });
        }

    }
});

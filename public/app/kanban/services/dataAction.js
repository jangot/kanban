define([

    'app'

], function(app) {
    "use strict";

    app.factory('dataAction', function(Column, Task, $q) {
        return {
            taskCreate: function (column, params) {
                var deferred = $q.defer();

                var newTask = new Task(params);
                var taskPromise = newTask.save();

                taskPromise
                    .then(function() {
                        var columnPromise = column.addTask(newTask.id);

                        columnPromise
                            .then(deferred.resolve)
                            .catch(deferred.reject);
                    })
                    .catch(deferred.reject);

                return deferred.promise;
            },
            columnCreate: function (board, params) {
                var deferred = $q.defer();

                var newColumn = new Column(params);
                var columnPromise = newColumn.save();

                columnPromise
                    .then(function() {
                        var columnPromise = board.addColumn(newColumn.id);

                        columnPromise
                            .then(deferred.resolve)
                            .catch(deferred.reject);
                    })
                    .catch(deferred.reject);

                return deferred.promise;
            }
        }
    });
});
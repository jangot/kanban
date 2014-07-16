define([

    'app'

], function(app) {
    "use strict";

    app.factory('taskCreator', function(Task, Board) {
        return function (board, params) {
            var newTask = new Task(params);
            newTask.save();

            board.addTask(newTask.id);
        };
    });
});
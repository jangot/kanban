define([

    'app',

    'angular',

    'kanban/services/resourceCreator',
    'kanban/data/board'

], function(app, angular) {
    "use strict";

    var areas = [
        'title', 'tasks'
    ];

    app.factory('Board', function($q, FakeResource, dataBoard, resourceCreator) {
        return resourceCreator(dataBoard, areas, {
            removeTask: function(id) {
                _.remove(this.tasks, function(taskId) {
                    return taskId === id;
                })

                this.save();
            },

            addTask: function(taskId, index) {
                if (!index) {
                    index = this.tasks.length;
                }

                this.tasks.splice(index ,0, taskId);

                this.save();
            }
        });
    });
});
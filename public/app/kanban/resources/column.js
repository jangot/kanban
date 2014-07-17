define([

    'app',

    'angular',

    'kanban/services/resourceCreator',
    'kanban/data/column'

], function(app, angular) {
    "use strict";

    var areas = [
        'title', 'tasks'
    ];

    app.factory('Column', function($q, FakeResource, dataColumn, resourceCreator) {
        return resourceCreator(dataColumn, areas, {
            removeTask: function(id) {
                _.remove(this.tasks, function(taskId) {
                    return taskId === id;
                })

                return this.save();
            },

            addTask: function(taskId, index) {
                if (!index) {
                    index = this.tasks.length;
                }

                this.tasks.splice(index ,0, taskId);

                return this.save();
            }
        });
    });
});
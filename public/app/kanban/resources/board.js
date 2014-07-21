define([

    'app',

    'angular',

    'kanban/services/resourceCreator',
    'kanban/data/board'

], function(app, angular) {
    "use strict";

    var areas = [
        'title', 'columns'
    ];

    app.factory('Board', function($q, FakeResource, dataBoard, resourceCreator) {
        return resourceCreator(dataBoard, areas, {
            removeColumn: function(id) {
                _.remove(this.columns, function(columnId) {
                    return columnId === id;
                })

                return this.save();
            },

            addColumn: function(boardId, index) {
                if (index === undefined) {
                    index = this.columns.length;
                }

                this.columns.splice(index ,0, boardId);

                return this.save();
            }
        });
    });
});
define([

    'app',

    'angular',

    'kanban/services/resourceCreator',
    'kanban/data/board'

], function(app) {
    "use strict";

    var areas = [
        'title', 'tasks'
    ];

    app.factory('Board', function($q, FakeResource, dataBoard, resourceCreator) {
        return resourceCreator(dataBoard, areas, {});
    });
});
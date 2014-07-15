define([

    'app',

    'angular',

    'kanban/services/resourceCreator',
    'kanban/data/task'

], function(app) {
    "use strict";

    var areas = [
        'title', 'description'
    ];

    app.factory('Task', function($q, FakeResource, dataTask, resourceCreator) {
        return resourceCreator(dataTask, areas, {});
    });
});
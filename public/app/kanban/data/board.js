define([

    'app',

    'angular'

], function(app, angular) {
    "use strict";

    app.value('dataBoard', [
        {
            "id": "0",
            "title": "To do",
            "tasks": ["0", "1", "2", "3"]
        },
        {
            "id": "1",
            "title": "In work",
            "tasks": ["4", "5", "6", "7", "8"]
        }
    ]);
});
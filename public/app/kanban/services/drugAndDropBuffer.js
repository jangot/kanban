define([

    'app'

], function(app) {
    "use strict";

    var buffer = {};

    app.factory('drugAndDropBuffer', function() {
        return {
            put: function (type, data) {
                buffer[type] = data;
            },
            get: function (type) {
                return buffer[type];
            },
            clear: function(type) {
                buffer[type] = undefined;
            }
        }
    });
});
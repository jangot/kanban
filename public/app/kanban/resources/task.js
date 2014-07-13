define([

    'app',

    'common/services/resourcesApi'

], function(app) {
    "use strict";

    app.factory('Task', function(appResourcesApi) {
        return appResourcesApi('task.json', {}, {});
    });
});
define([

    'app',

    'common/services/resourcesApi'

], function(app) {
    "use strict";

    app.factory('Board', function(appResourcesApi) {
        return appResourcesApi('board.json', {}, {});
    });
});
define([

    'app',

    'common/services/resourcesApi'

], function(app) {
    "use strict";

    var RESOURCE_NAME = 'Guitars';

    app.factory(RESOURCE_NAME, function(appResourcesApi) {
        var Guitars = appResourcesApi('guitars/:id', { id: '@id' }, {
//            all: {
//                method:  'GET',
//                url:     'guitars',
//                isArray: true
//            }
        });

        return Guitars;
    });
});
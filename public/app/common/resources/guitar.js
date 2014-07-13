define([

    'app',

    'common/services/resourcesApi'

], function(jShop) {
    "use strict";

    var RESOURCE_NAME = 'Guitars';

    jShop.factory(RESOURCE_NAME, function(jShopResourcesApi) {
        var Guitars = jShopResourcesApi('guitars/:id', { id: '@id' }, {
//            all: {
//                method:  'GET',
//                url:     'guitars',
//                isArray: true
//            }
        });

        return Guitars;
    });
});
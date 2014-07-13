define([

    'app'

], function(jShop) {
    "use strict";

    jShop.provider('stateData', function() {
        return {
            $get: function() {
                return {
                    pageTitle:null
                }
            }
        }
    });
});
define([

    'app'

], function(app) {
    "use strict";

    app.provider('stateData', function() {
        return {
            $get: function() {
                return {
                    pageTitle:null
                }
            }
        }
    });
});
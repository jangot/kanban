define([

    'app',

    'angular'

], function(app, angular) {
    "use strict";

    app.factory('FakeResource', function($q, $http) {
        function FakeResource(params) {
            if (params) {
                var self = this;
                angular.forEach(params, function(value, key) {
                    self[key] = value;
                });
            }
        };

        return FakeResource
    });
});
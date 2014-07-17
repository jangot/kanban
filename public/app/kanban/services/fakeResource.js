define([

    'app',

    'angular'

], function(app, angular) {
    "use strict";

    app.factory('FakeResource', function($q, $http) {
        function FakeResource(data) {
            if (data) {
                this.setData(data);
            }
        };

        FakeResource.prototype = {
            setData: function(data) {
                var self = this;
                angular.forEach(data, function(value, key) {
                    self[key] = value;
                });
            }
        }

        return FakeResource
    });
});
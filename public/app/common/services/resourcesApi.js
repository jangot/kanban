define([

    'app',

    'angular'

], function(app, angular) {
    "use strict";

    //http://localhost:8009/kanban

    var PROTOCOL = 'http://';
    var HOST = 'localhost:8009/';
    var URL_PREFIX = 'data/';

    app.factory('appResourcesApi', function($resource){

        var DEFAULT_ACTIONS = {
            get: { method: 'GET', isArray: true},
            save: { method: 'PUT'},
            query: { method: 'GET'},
            remove: { method: 'DELETE'},
            create: { method: 'POST'}
        };

        function addUrlPrefix(url) {
            return PROTOCOL + HOST + URL_PREFIX + url;
        }

        return function(url, paramDefaults, actions) {
            // Append host and version to url
            url = addUrlPrefix(url);

            // Add response transformation for all actions
            actions = angular.extend({}, DEFAULT_ACTIONS, actions);
            angular.forEach(actions, function(settings) {

                settings.interceptor = {};

                if (settings.url) {
                    settings.url = addUrlPrefix(settings.url);
                }
            });

            // Add _meta param for new response version
            paramDefaults = paramDefaults || {};

           return $resource(url, paramDefaults, actions);
        }
    });
});

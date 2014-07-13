define([
    'app',
    'angular',
    'angularAMD'

], function(app, angular, angularAMD){
    "use strict";

    app.provider('routeConstructor', function(){

        var COMMON_RESOLVE = {};
        var menu = [];

        function getResolve(resolve) {
            resolve = resolve || {};

            return angular.extend(COMMON_RESOLVE, resolve);
        }

        function getViewPath(viewParts) {
            return '/app/' + viewParts[0] + '/view/' + viewParts[1]
        }

        function getControllerName(viewParts) {
            var controllerParts = viewParts.map(function (part) {
                return part.charAt(0).toUpperCase() + part.slice(1);
            });

            return controllerParts.join('');
        }

        return {
            build: function(params) {
                var newParams = {};
                if (params.view) {
                    var viewPathParts = params.view.split('/');
                    newParams.templateUrl = getViewPath(viewPathParts) + '/template.html';
                    newParams.controller = getControllerName(viewPathParts);

                    delete params.view;
                }
                if (params.menu) {
                    menu.push(params.menu);
                    delete params.menu;
                }
                angular.extend(newParams, params);
                newParams.resolve = getResolve(newParams.resolve);

                return newParams;
            },
            $get: function(){
                return {
                    getVars: function() {
                        return {
                            menu: menu
                        }
                    }
                }
            }
        }
    });
});

define([

    'app',

    'common/directives/liveEdit/controller'

], function(app, Controller) {
    "use strict";

    app.directive('appLiveEdit', function() {
        return {
            restrict: 'E',
            templateUrl: '/app/common/directives/liveEdit/template.html',
            scope: {
                value: '=',
                save: '='
            },
            controller: Controller
        }
    });
});

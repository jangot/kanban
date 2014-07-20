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
            link: function(scope, element) {
                var input = element.find('input');
                scope.$watch('edit', function(val) {
                    if (val === true) {
                        input.focus();
                    }
                })
            },
            controller: Controller
        }
    });
});

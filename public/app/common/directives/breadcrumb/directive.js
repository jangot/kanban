define([

    'app'

], function(app) {
    "use strict";

    app.directive('appBreadcrumb', function() {
        return {
            restrict: 'E',
            templateUrl: '/app/common/directives/breadcrumb/template.html',
            link: function(scope, element, attrs) {},
            controller: function() {}
        }
    });
});

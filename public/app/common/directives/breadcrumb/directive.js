define([

    'app'

], function(jShop) {
    "use strict";

    jShop.directive('jShopBreadcrumb', function() {
        return {
            restrict: 'E',
            templateUrl: '/app/common/directives/breadcrumb/template.html',
            link: function(scope, element, attrs) {},
            controller: function() {}
        }
    });
});

define([

    'app'

], function(jShop) {
    "use strict";

    jShop.directive('jShopFooter', function() {
        return {
            restrict: 'E',
            templateUrl: '/app/common/directives/footer/template.html',
            link: function(scope, element, attrs) {},
            controller: function() {}
        }
    });
});

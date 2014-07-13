define([

    'app',

    'common/directives/menu/controller'

], function(jShop, Controller) {
    "use strict";

    jShop.directive('jShopMenu', function() {
        return {
            restrict: 'E',
            templateUrl: '/app/common/directives/menu/template.html',
            link: function(scope, element, attrs) {},
            controller: Controller
        }
    });
});

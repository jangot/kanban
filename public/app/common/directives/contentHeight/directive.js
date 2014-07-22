define([

    'app',

    'angular'

], function(app, angular) {
    "use strict";

    var blockTop = null;
    var blockBottom = null;
    var content = null;
    var body = angular.element('body');

    function resize() {
        var topPosition = blockTop.height() + blockTop.offset().top;
        var bottomPosition = blockBottom.height();
        var contentHeight = body.height() - topPosition - bottomPosition;

        content.height(contentHeight)
    }
    app.directive('appContentSize', function($window) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                if (attrs.appContentSize == 'top') {
                    blockTop = element;
                }
                if (attrs.appContentSize == 'bottom') {
                    blockBottom = element;
                }
                if (attrs.appContentSize == 'content') {
                    content = element;

                }
                if (blockTop && blockBottom && content) {
                    resize();
                    angular.element($window).resize(resize);
                }
            }
        }
    });
});

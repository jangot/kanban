define([

    'app'

], function(app) {
    "use strict";

    app.directive('appPreventDefault', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.on('click', function(e){
                    e.preventDefault();
                    e.stopPropagation();
                });
            }
        }
    });
});

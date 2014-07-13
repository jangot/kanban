define([

    'app'

], function(app) {
    "use strict";

    app.directive('appPageTitle', function() {
        return {
            restrict: 'E',
            templateUrl: '/app/common/directives/pageTitle/template.html',
            link: function(scope, element, attrs) {},
            controller: function($scope, $rootScope, $state) {
                $scope.title = $state.current.page.title;

                var unbind = $rootScope.$on('$stateChangeSuccess', function(){
                    $scope.title = $state.current.page.title;
                });

                $scope.$on('$destroy', unbind);
            }
        }
    });
});

define([

    'app',

    'angular'

], function(app, angular){
    "use strict";



    return function LiveEditController($scope, $parse, KEY) {

        var body = angular.element('body');
        $scope.edit = false;

        var originValue = null;
        var clickByMe = false;

        $scope.startEdit = function() {
            if ($scope.edit) {
                return;
            }
            $scope.edit = true;
            originValue = $scope.value;
            clickByMe = true;
        }
        $scope.cancelEdit = function() {
            if (!$scope.edit) {
                return;
            }
            $scope.value = originValue;
            originValue = null;

            $scope.$evalAsync(function() {
                $scope.edit = null;
            });
        }
        $scope.keyUp = function(event) {
            switch (event.keyCode) {
                case KEY.ENTER:
                    $scope.save();
                    $scope.edit = false;
                    break;
                case KEY.ESC:
                    $scope.cancelEdit();
                    break;
            }
        }

        function bodyClick() {
            if (clickByMe) {
                clickByMe = false;
                return;
            }
            $scope.cancelEdit();
        }
        body.on('click', bodyClick);
        $scope.$on('$destroy', function() {
            body.off('click', bodyClick);
        });

    }


});

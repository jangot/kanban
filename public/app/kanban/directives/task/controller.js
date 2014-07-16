define([

    'app',

    'angular'

], function(app, angular){
    "use strict";

    var body = angular.element('body');


    return function($scope, $rootScope, KEY){
        var clickByMe = false;

        $scope.edit = null;
        var originValue = null;
        $scope.startEdit = function(type, event) {
            $scope.edit = type;
            originValue = $scope.task[type];
            clickByMe = true;
        }
        $scope.cancelEdit = function() {
            var type = $scope.edit;
            $scope.task[type] = originValue;

            originValue = null;

            $scope.$evalAsync(function() {
                $scope.edit = null;
            });
        }
        $scope.keyUp = function(event) {
            switch (event.keyCode) {
                case KEY.ENTER:
                    $scope.task.save();
                    break;
                case KEY.ESC:
                    $scope.cancelEdit();
                    break;
            }
        }
        $scope.remove = function() {
            var id = $scope.task.id;
            $scope.board.removeTask(id);
        }

        $scope.startCallback = function(item) {
            $rootScope.$emit('startDrop', $scope.task);
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

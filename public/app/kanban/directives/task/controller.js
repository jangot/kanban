define([

    'app'

], function(){
    "use strict";

    return function($scope, $rootScope){
        $scope.startCallback = function(item) {
            $rootScope.$emit('startDrop', $scope.task);
        }
    }
});

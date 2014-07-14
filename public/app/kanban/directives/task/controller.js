define([

    'app'

], function(){
    "use strict";

    return function($scope){
        $scope.startCallback = function(item) {
            console.log($scope.task)
        }
    }
});

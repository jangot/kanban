define([

    'app',

    'kanban/services/taskCreator'

], function(){
    "use strict";

    return function($scope, $rootScope, taskCreator){
        $scope.createTask = function() {
            var params = {
                title: 'Some title',
                description: 'Some description'
            }

            taskCreator($scope.board, params);
        }
    }
});

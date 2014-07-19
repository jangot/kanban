define([

    'app',

    'kanban/services/dataAction'

], function(){
    "use strict";

    return function($scope, $rootScope, dataAction){
        $scope.saveColumn = function() {
            $scope.column.save();
        }

        $scope.createTask = function() {
            var params = {
                title: 'Some title',
                description: 'Some description'
            }

            dataAction.taskCreate($scope.column, params);
        }

        $scope.remove = function() {
            var id = $scope.column.id;
            $scope.board.removeColumn(id);
        }
    }
});
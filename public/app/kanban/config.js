define([

    'app',

    'angular',

    'kanban/view/index/controller',

    'kanban/directives/task/directive',
    'kanban/directives/column/directive',

    'kanban/data/board',
    'kanban/data/column',
    'kanban/data/task'

], function(app, angular) {
    "use strict";

    app.config(function($stateProvider, routeConstructorProvider) {
        $stateProvider.state(
            'body.kanban',
            routeConstructorProvider.build({
                url: '/kanban',
                view: 'kanban/index',
                page: {
                    title: 'Main board'
                },
                menu: {
                    state: 'body.kanban',
                    title: 'Main board'
                }
            })
        );
    });

    app.run(function($rootScope, dataBoard, dataColumn, dataTask) {
        $rootScope.$watch(function() {
            return dataColumn;
        }, function() {
            console.log('data:update:column');
            $rootScope.$emit('data:update:column', 'column');
        }, true);

        $rootScope.$watch(function() {
            return dataTask;
        }, function() {
            console.log('data:update:task');
            $rootScope.$emit('data:update:task', 'task');
        }, true);

        $rootScope.$watch(function() {
            return dataBoard;
        }, function() {
            console.log('data:update:board');
            $rootScope.$emit('data:update:board', 'board');
        }, true);
    });

});
define([

    'app',

    'angular',

    'kanban/view/index/controller',

    'kanban/directives/task/directive',
    'kanban/directives/board/directive'

], function(app, angular) {
    "use strict";

    app.config(function($stateProvider, routeConstructorProvider) {
        $stateProvider.state(
            'body.kanban',
            routeConstructorProvider.build({
                url: '/kanban',
                view: 'kanban/index',
                page: {
                    title: 'Boards'
                },
                menu: {
                    state: 'body.kanban',
                    title: 'Boards'
                }
            })
        );
    });

    app.run(function($rootScope, dataBoard, dataTask) {
        $rootScope.$watch(function() {
            return dataBoard;
        }, function() {
            $rootScope.$emit('data:update', 'board')
        }, true);

        $rootScope.$watch(function() {
            return dataTask;
        }, function() {
            console.log('task watch')
            $rootScope.$emit('data:update', 'task')
        }, true);

        angular.element('body').click(function() {
            $rootScope.$emit('body:click');
        });
    });

});
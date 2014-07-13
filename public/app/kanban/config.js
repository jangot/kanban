define([

    'app',

    'kanban/view/index/controller',

    'kanban/directives/task/directive'

], function(app) {
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

});
define([

    'app',

    'angular',

    'common/directives/menu/directive',
    'common/directives/pageTitle/directive',
    'common/directives/footer/directive',

    'common/directives/liveEdit/directive',
    'common/directives/preventDefault/directive',
    'common/directives/contentHeight/directive',

    'common/constants/key',

    'common/services/stateData',
    'common/services/routeConstructor',
    'common/services/menu',

    'common/view/body/controller',
    'common/view/index/controller',
    'common/view/404/controller'

], function(app, angular) {
    "use strict";
    app.config(function($locationProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/404');

        $locationProvider.html5Mode(true);
    });
    app.config(function($stateProvider, routeConstructorProvider) {
        $stateProvider.state(
            'body',
            routeConstructorProvider.build({
                abstract: true,
                resolve: {},
                view: 'common/body'
            })
        );

        $stateProvider.state(
            'body.index',
            routeConstructorProvider.build({
                url: '/',
                view: 'common/index',
                page: {
                    title: 'Главная страница'
                }
            })
        );

        $stateProvider.state(
            'body.404',
            routeConstructorProvider.build({
                url: '/404',
                view: 'common/404',
                page: {
                    title: 'Страница не найдена'
                }
            })
        );
    });

    app.run(function(routeConstructor, menu) {
        var routeVars = routeConstructor.getVars();
        angular.forEach(routeVars.menu, function(value) {
            menu.push(value);
        });
    });
});
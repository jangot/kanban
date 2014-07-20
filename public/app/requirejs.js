require.config({
    baseUrl: '/app/',
    paths: {
        jquery: '../bower_components/jquery/jquery',
        jqueryUi: '../bower_components/jquery-ui/jquery-ui',
        angularDragdrop: '../bower_components/angular-dragdrop/src/angular-dragdrop',

        lodash: '../bower_components/lodash/dist/lodash',

        angular: '../bower_components/angular/angular',
        angularAMD: '../bower_components/angularAMD/angularAMD',
        angularResource: '../bower_components/angular-resource/angular-resource',
        uiRouter: '../bower_components/angular-ui-router/release/angular-ui-router',

        uiBootstrap: '../bower_components/angular-bootstrap/ui-bootstrap',
        uiBootstrapTpl: '../bower_components/angular-bootstrap/ui-bootstrap-tpls'
    },
    shim: {
        angular: {
            exports: 'angular',
            deps: ['jquery', 'lodash']
        },
        angularAMD: ['angular'],
        uiRouter: ['angular'],
        uiBootstrap: ['angular'],
        uiBootstrapTpl: ['angular'],
        angularResource: ['angular'],
        jqueryUi: ['jquery'],
        angularDragdrop: ['jqueryUi', 'angular']
    },
    deps: ['bootstrap']
});

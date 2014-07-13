define([

    'angular',
    'angularResource',
    'uiRouter',

    'angularAMD',

    'uiBootstrap',
    'uiBootstrapTpl',

    'angularDragdrop'

], function(angular) {
    return angular.module('app', [
        'ui.router',  'ui.bootstrap', 'ngResource', 'ngDragDrop'
    ]);
});
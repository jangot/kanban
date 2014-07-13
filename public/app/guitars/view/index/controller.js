define([

    'app'

], function(app){
    "use strict";

    app.controller('GuitarsIndex', function($scope, Guitars){
        var guitars = Guitars.get();
        console.log(guitars.$promise)
        guitars.$promise.then(function(){
            console.log(111, guitars)
        })
    });
});

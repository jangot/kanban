define([

    'jShop'

], function(jShop){
    "use strict";

    jShop.controller('GuitarsIndex', function($scope, Guitars){
        var guitars = Guitars.get();
        console.log(guitars.$promise)
        guitars.$promise.then(function(){
            console.log(111, guitars)
        })
    });
});

define([

    'app',

    'angular',

    'kanban/services/fakeResource'

], function(app, angular) {
    "use strict";

    function copyAreas(data, object, areas) {
        angular.forEach(areas, function(area) {
            object[area] = data[area];
        });

        return object;
    }

    var UPDATE_DELAY = 0;
    app.factory('resourceCreator', function($q, FakeResource, $rootScope, $timeout) {

        return function(mainData, areas, proto) {
            var prototype = {
                save: function(dataToResolve) {
                    var deferred = $q.defer();

                    var self = this;

                    if (this.id === undefined) {
                        this.id = mainData.length;
                        mainData.push(this);
                    } else {
                        angular.forEach(mainData, function(columnInCommon, i) {
                            if (columnInCommon.id == self.id) {
                                mainData[i] = copyAreas(self, mainData[i], areas);
                            }
                        });
                    }

                    $timeout(function() {
                        deferred.resolve(self, dataToResolve);
                    }, UPDATE_DELAY);

                    return deferred.promise;
                }
            }

            prototype = angular.extend(prototype, proto);

            function DataConstructor(params) {
                var result = new FakeResource(params);

                result = angular.extend(result, prototype);

                return result;
            };

            DataConstructor.query = function() {
                var deferred = $q.defer();
                var result = [];
                result.$promise = deferred.promise;

                angular.forEach(mainData, function(value, i) {
                    result[i] = new DataConstructor(value);
                });
                $timeout(function() {
                    deferred.resolve(result);
                }, UPDATE_DELAY);


                return result;
            }

            DataConstructor.get = function(id) {
                var data = null;

                angular.forEach(mainData, function(value, i) {
                    if (id == value.id) {
                        data = value;
                    }
                });

                var deferred = $q.defer();

                if (!data) {
                    deferred.reject();
                    return {
                        $promise: deferred.promise
                    }
                }

                var result = new DataConstructor(data);
                result.$promise = deferred.promise;

                $timeout(function() {
                    deferred.resolve(result);
                }, UPDATE_DELAY);
                return result;
            }

            return DataConstructor
        }
    });
});
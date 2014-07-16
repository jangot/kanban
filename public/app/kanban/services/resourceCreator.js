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

    app.factory('resourceCreator', function($q, FakeResource) {
        return function(mainData, areas, proto) {
            var prototype = {
                save: function() {
                    var deferred = $q.defer();

                    var self = this;

                    if (this.id === undefined) {
                        this.id = mainData.length;
                        mainData.push(this);
                    } else {
                        angular.forEach(mainData, function(boardInCommon, i) {
                            if (boardInCommon.id == self.id) {
                                mainData[i] = copyAreas(self, mainData[i], areas);
                            }
                        });
                    }

                    this.$promise = deferred.promise;
                    deferred.resolve(this);

                    return this;
                }
            }

            prototype = angular.extend(prototype, proto);

            function DataConstructor(params) {
                var result = new FakeResource(params);

                result = angular.extend(result, prototype);

                return result;
            };

            DataConstructor.get = function() {
                var deferred = $q.defer();
                var result = [];
                result.$promise = deferred.promise;

                angular.forEach(mainData, function(value, i) {
                    result[i] = new DataConstructor(value);
                });
                deferred.resolve(result);

                return result;
            }

            return DataConstructor
        }
    });
});
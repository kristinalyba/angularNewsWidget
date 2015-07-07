/**
 * Created by k.lyba on 06.07.2015.
 */
(function () {
    angular
        .module("common.services")
        .factory("dataService",
        ["$http",
            dataService]);

    function dataService($http) {
        return {
            getItems: function (url, successCallback) {
                return $http
                    .get(url)
                    .then(successCallback);
            }
        }
    }
}());
/**
 * Created by k.lyba on 06.07.2015.
 */
(function () {
    angular
        .module("common.services")
        .factory("newsService",
        ["$http",
            newsService]);

    function newsService($http) {
        return {
            getAllNews: function () {
                return $http
                    .get("http://pipes.yahoo.com/pipes/pipe.run?_id=e9a2e77dffb3205d035c4e311d77bbe6&_render=json")
                    .then(
                    function (response) {
                        var news = [];
                        if(response.data){
                            news = response.data.value.items;
                        }
                        return news;
                    });
            }
        }
    }
}());
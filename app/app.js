/**
 * Created by k.lyba on 06.07.2015.
 */
(function () {
    "use strict";

    var app = angular.module("newsWidget",
        ["common.services",
            "ui.router"]);

    app.config(["$stateProvider", "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state("home", {
                    url: "/",
                    templateUrl: "app/mainView.html",
                    controller: "MainCtrl as vm",
                    resolve: {
                        news: function (dataService) {
                            return dataService.getItems("http://pipes.yahoo.com/pipes/pipe.run?_id=e9a2e77dffb3205d035c4e311d77bbe6&_render=json",
                                function (response) {
                                    return response.data ? response.data.value.items : [];
                            });
                        }
                    }
                });


        }
    ]);

}());
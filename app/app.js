/**
 * Created by k.lyba on 06.07.2015.
 */
(function (){
    "use strict";

    var app = angular.module("newsWidget",
        ["common.services",
            "ui.router"]);

    app.config(["$stateProvider", "$urlRouterProvider",
        function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state("home", {
                    url: "/",
                    templateUrl: "app/mainView.html",
                    controller: "MainCtrl as vm",
                    resolve: {
                        newsService: "newsService",
                        news: function(newsService){
                            return newsService.getAllNews();
                        }
                    }
                });


        }
    ]);

}());
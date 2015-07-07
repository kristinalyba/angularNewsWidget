/**
 * Created by k.lyba on 06.07.2015.
 */
(function () {
    "use strict";

    angular
        .module("newsWidget")
        .controller("MainCtrl",
        ["news",
            MainCtrl]);

    function MainCtrl(news) {
        var vm = this;
        vm.newsPosts = news;

        vm.toggleDescription = function(newsPost){
            newsPost.showDescription = ! newsPost.showDescription;
        }
    }
}());
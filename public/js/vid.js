var vid = angular.module("vid", []);

vid.controller("AppCtrl", function () {
    var app = this;

    app.message = "Hello";
})

vid.directive("myFirstDirective", function () {
    return function (scope, element, attrs) {
        element.text(scope.app.message + " " + attrs.message);
    }
})
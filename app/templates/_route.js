angular.module("<%= appName %>")
    .config(function ($routeProvider) {

        "use strict";

        //$locationProvider.html5Mode(true);

        $routeProvider
            .when("/", {
                templateUrl: "/views/myView.html",
                controller: "myCtrl"
            })
            .otherwise({
                redirectTo: "/"
            });
});

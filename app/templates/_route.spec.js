describe("route", function() {
    var $route;
    $route = null;
    beforeEach(module("<%= appName %>"));
    beforeEach(inject(function(_$route_) {
        return $route = _$route_;
    }));
    return describe("routes", function() {
        it("should contain / with controller:myCtrl templateUrl:/views/myView.html", function() {
            expect($route.routes['/'].controller).toBe('myCtrl');
            return expect($route.routes['/'].templateUrl).toBe('/views/myView.html');
        });
    });
});
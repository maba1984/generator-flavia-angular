var _ = require("underscore");

module.exports = function(options) {
    var bower = options.paths.bower,
    mapping = [
            "" + bower + "/angular/angular.js : " + bower + "/angular/angular.min.js",
            "" + bower + "/angular-resource/angular-resource.js : " + bower + "/angular-resource/angular-resource.min.js",
            "" + bower + "/angular-route/angular-route.js : " + bower + "/angular-route/angular-route.min.js",
            "" + bower + "/underscore/underscore.js : " + bower + "/underscore/underscore.js"
    ],

    staticLibs = [
        {
            cwd: "" + bower + "/bootstrap",
            src: "fonts/*"
        }
    ];

    options.jsLibs = mapping.map(function(lib) {
        return lib.replace(/\s*:.*/, "");
    });

    options.jsLibsMin = mapping.map(function(lib) {
        return lib.replace(/.*:\s*/, "");
    });

    return options.staticLibs = staticLibs.map(function(lib) {
        return _.extend(lib, {
            expand: true
        });
    });
};
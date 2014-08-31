var _= require("underscore");

module.exports = function(options, grunt) {

    grunt.loadNpmTasks("grunt-sync");

    var paths = options.paths;

    return {
        dev_js: {
            files: [
                {
                    expand: true,
                    src: "scripts/**/*.js",
                    cwd: paths.app,
                    dest: paths.dev
                }
            ]
        },
        dev_less: {
            files: [
                {
                    expand: true,
                    src: "styles/**/*.less",
                    cwd: paths.app,
                    dest: paths.dev
                }
            ]
        },
        dev_static: {
            files: [
                {
                    expand: true,
                    src: ["**/*.{ico,png,jpg}", "fonts/**/*", "{templates,views}/**/*.html"],
                    cwd: paths.app,
                    dest: paths.dev
                }
            ].concat(options.staticLibs.map(function(lib) {
                    return _.extend({
                        dest: paths.dev
                    }, lib);
                }))
        },
        dist: {
            files: [
                {
                    expand: true,
                    src: ["**/*.{ico,png}"],
                    cwd: paths.app,
                    dest: paths.dist
                }
            ].concat(options.staticLibs.map(function(lib) {
                    return _.extend({
                        dest: paths.dist
                    }, lib);
                }))
        }
    };
};
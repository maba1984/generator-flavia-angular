module.exports = function(options, grunt) {

    grunt.loadNpmTasks("grunt-contrib-clean");

    var paths = options.paths;

    return {
        bower: paths.bower,
        all: paths.dist,
        dev: paths.dev
    };
};
module.exports = function(options, grunt) {
    grunt.loadNpmTasks("grunt-ng-annotate");

    var paths = options.paths;

    return {
        <%= appName %>: {
            files: [
                {
                    expand: true,
                    src: "scripts/**/*.js",
                    dest: ".tmp/annotated",
                    cwd: paths.app
                }
            ]
        }
    };
};
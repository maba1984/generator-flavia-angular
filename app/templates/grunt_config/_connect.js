module.exports = function(options, grunt) {
    grunt.loadNpmTasks("grunt-contrib-connect");

    var paths = options.paths;

    return {
        server: {
            options: {
                port: 9001,
                base: paths.dev,
                livereload: true,
                open:true
            }
        }
    };
};
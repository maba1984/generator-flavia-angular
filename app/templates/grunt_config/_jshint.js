module.exports = function(options, grunt) {

    grunt.loadNpmTasks("grunt-contrib-jshint");

    return {
        options: {
            jshintrc: ".jshintrc"
        },
        sources: ["" + options.paths.app + "/scripts/**/*.js"]
    };
};
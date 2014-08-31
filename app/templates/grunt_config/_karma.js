module.exports = function(options, grunt) {

    grunt.loadNpmTasks("grunt-karma");

    return {
        options: {
            configFile: "karma.conf.js"
        },
        dev: {},
        dist: {
            reporters: ["junit"],
            junitReporter: {
                outputFile: "test-results.xml"
            }
        }
    };
};
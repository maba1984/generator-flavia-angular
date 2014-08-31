module.exports = function(options, grunt) {

    grunt.loadNpmTasks("grunt-bower-task");

    return {
        install: {
            options: {
                copy: false
            }
        }
    };
};
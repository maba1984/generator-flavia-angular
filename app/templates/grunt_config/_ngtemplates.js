module.exports = function(options, grunt) {

    grunt.loadNpmTasks("grunt-angular-templates");

    var paths = options.paths;

    return {
        afair42: {
            src: "{views,templates}/**/*.html",
            dest: "" + paths.dev + "/scripts/templates.js",
            cwd: paths.app,
            options: {
                prefix: "/assets/"
            }
        }
    };
};
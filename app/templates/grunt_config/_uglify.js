module.exports = function(options, grunt) {

    grunt.loadNpmTasks("grunt-contrib-uglify");

    var paths = options.paths,
    files = {};

    files["" + paths.dist + "/scripts/main.min.js"] = options.jsLibsMin.concat(["www/annotated/scripts/main.js", "www/annotated/scripts/**/*.js", "" + paths.dev + "/scripts/templates.js"]);

    return {
        options: {
            banner: "/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n"
        },
        dist: {
            files: files
        }
    };
};
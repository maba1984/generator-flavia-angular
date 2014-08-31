module.exports = function(options, grunt) {

    grunt.loadNpmTasks("grunt-html-build");

    var paths = options.paths;

    return {
        dev: {
            src: "" + paths.app + "/index.html",
            dest: "" + paths.dev + "/index.html",
            options: {
                styles: {
                    main: "" + paths.dev + "/styles/main.css"
                },
                scripts: {
                    all: options.jsLibs.concat(["" + paths.dev + "/scripts/main.js", "" + paths.dev + "/scripts/**/*.js", "!" + paths.dev + "/scripts/templates.js"])
                },
                data: {
                    version: options.version,
                    title: options.name
                }
            }
        },
        dist: {
            src: "" + paths.app + "/index.html",
            dest: "" + paths.dist + "/index.html",
            options: {
                styles: {
                    main: "" + paths.dist + "/styles/main.min.css"
                },
                scripts: {
                    all: "" + paths.dist + "/scripts/main.min.js"
                },
                data: {
                    version: options.version,
                    title: options.name
                }
            }
        },
        options: {
            relative: true,
            prefix: "/x"
        }
    };
};
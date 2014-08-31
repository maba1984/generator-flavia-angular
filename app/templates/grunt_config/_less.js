module.exports = function(options, grunt) {

    var dev_files, dist_files, paths;
    grunt.loadNpmTasks("grunt-contrib-less");
    var paths = options.paths,
    dev_files = {},
    dist_files = {};

    dev_files = "" + paths.dev + "/styles/**/*.less"

    dist_files["" + paths.dist + "/styles/main.min.css"] = "" + paths.app + "/styles/main.less";

    return {
        dev: {
            files: dev_files,
            expand:true,
            dist: "" + paths.dev + "/styless/",
            options: {
                sourceMap: true,
                sourceMapBasepath: paths.dev,
                sourceMapRootpath: "/"
            }
        },
        dist: {
            files: dist_files,
            options: {
                cleancss: true
            }
        },
        options: {
            paths: [paths.bower, "" + paths.dev + "/styles"],
            ieCompat: false,
            relativeUrls: true
        }
    };
};

module.exports = function(grunt) {

    var options = require("./package.json"),

    loadConfig = function(module) {
        return require("./grunt_config/" + module)(options, grunt);
    };

    loadConfig("libs");
    loadConfig("npm");

    grunt.initConfig({
        pkg: options,
        bower: loadConfig("bower"),
        jshint: loadConfig("jshint"),
        htmlbuild: loadConfig("htmlbuild"),
        karma: loadConfig("karma"),
        less: loadConfig("less"),
        uglify: loadConfig("uglify"),
        ngtemplates: loadConfig("ngtemplates"),
        ngAnnotate: loadConfig("annotate"),
        watch: loadConfig("watch"),
        sync: loadConfig("sync"),
        clean: loadConfig("clean"),
        connect: loadConfig("connect")
    });
    grunt.registerTask("deps", ["npm-install", "bower"]);
    grunt.registerTask("sync_dev", ["sync:dev_js", "sync:dev_less", "sync:dev_static", "htmlbuild:dev"]);
    grunt.registerTask("compile_dev", ["sync_dev", "less:dev", "htmlbuild:dev"]);
    grunt.registerTask("compile_dist", ["sync:dist", "ngtemplates", "ngAnnotate", "uglify", "less:dist", "htmlbuild:dist"]);
    grunt.registerTask("dev", ["deps", "compile_dev", "connect", "watch"]);
    //grunt.registerTask("dev", ["deps", "jshint", "karma:dev", "compile_dev", "watch"]);
    grunt.registerTask("dist", ["deps", "jshint", "karma:dist", "compile_dist"]);
    grunt.registerTask("dist_server", ["dist"]);
    grunt.registerTask("ci", ["dist"]);

};
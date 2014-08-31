'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var FlaviaAngularGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to the Flavia-Angular generator!'
    ));

      var prompts = [{
          name: 'appName',
          message: 'What is your app\'s name ?'
      }];

      this.prompt(prompts, function (props) {
          this.appName = props.appName;
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.dest.mkdir('app');
      this.dest.mkdir('app/images');
      this.dest.mkdir('app/scripts');
      this.dest.mkdir('app/scripts/controllers');
      this.dest.mkdir('app/scripts/services');
      this.dest.mkdir('app/scripts/directives');
      this.dest.mkdir('app/scripts/filters');
      this.dest.mkdir('app/styles');
      this.dest.mkdir('app/views');
      this.dest.mkdir('app/grunt_config');
      this.dest.mkdir('app/tests');

      this.template('_package.json', 'package.json', {appName:this.appName});
      this.template('_bower.json', 'bower.json', {appName:this.appName});
      this.src.copy('jshintrc', '.jshintrc');
      this.src.copy('bowerrc', '.bowerrc');
      this.src.copy('gitignore', '.gitignore');
      this.src.copy('_Gruntfile.js', 'Gruntfile.js');
      this.src.copy('_karma.conf.js', 'karma.conf.js');

      this.src.copy('grunt_config/_annotate.js', 'grunt_config/annotate.js');
      this.src.copy('grunt_config/_bower.js', 'grunt_config/bower.js');
      this.src.copy('grunt_config/_clean.js', 'grunt_config/clean.js');
      this.src.copy('grunt_config/_connect.js', 'grunt_config/connect.js');
      this.src.copy('grunt_config/_htmlbuild.js', 'grunt_config/htmlbuild.js');
      this.src.copy('grunt_config/_jshint.js', 'grunt_config/jshint.js');
      this.src.copy('grunt_config/_karma.js', 'grunt_config/karma.js');
      this.src.copy('grunt_config/_less.js', 'grunt_config/less.js');
      this.src.copy('grunt_config/_libs.js', 'grunt_config/libs.js');
      this.src.copy('grunt_config/_ngtemplates.js', 'grunt_config/ngtemplates.js');
      this.src.copy('grunt_config/_npm.js', 'grunt_config/npm.js');
      this.src.copy('grunt_config/_sync.js', 'grunt_config/sync.js');
      this.src.copy('grunt_config/_uglify.js', 'grunt_config/uglify.js');
      this.src.copy('grunt_config/_watch.js', 'grunt_config/watch.js');
    },

    projectfiles: function () {
        this.template('_index.html', 'app/index.html', {appName:this.appName});
        this.template('_main.js', 'app/scripts/main.js', {appName:this.appName});
        this.template('_route.js', 'app/scripts/route.js', {appName:this.appName});
    }
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = FlaviaAngularGenerator;

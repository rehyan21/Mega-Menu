module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    "babel": {
      options: {
        sourceMap: false
      },
      dist: {
        files: {
          "assets/compiled/megamenu.js" : "assets/js/megamenu.js"
        }
      }
    },
    uglify: {
      my_target: {
        files: [{
          expand: true,
          cwd: 'assets/compiled',
          src: '**/*.js',
          dest: 'build/js',
          ext: '.min.js'
        }]
      }
    },
    cssmin: {
      my_target: {
        files: [{
          expand: true,
          cwd: 'assets/css',
          src: ['*.css', '!*.min.css'],
          dest: 'build/css',
          ext: '.min.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask("default", ["babel","uglify","cssmin"]);

};

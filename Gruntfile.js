module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9001,
          keepalive:true
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: [{
          'expand': true,
          'cwd': 'app/scss/',
          'src': ['**/*.scss'],
          'dest': 'app/css/',
          'ext': '.css'
        }]
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', '> 1%', 'Explorer 8',]
      },
      dist: {
        expand: true,
        flatten: true,
        cwd: 'app/css',
        src: ['**/*.css'],
        dest: 'app/css/'
      }
    },
    requirejs: {
      compile: {
        options: {
            baseUrl: './app/js/src',
            paths: {
              'angular': '../../../bower_components/angular/angular',
              'angularRoute': '../../../bower_components/angular-route/angular-route'
            },
            shim: {
              'angular' : {'exports' : 'angular'},
              'angularRoute': ['angular']
            },
            // optimize: 'uglify2',
            optimize: 'none',
            optimizeCss: 'none',
            name: 'main',
            out: 'app/js/build/main.js'
        }
      }
    },
    watch: {
      styles: {
        files: ['app/scss/**/*.scss'],
        tasks: ['styles'],
        options: {
          livereload: true,
        }
      },
      scripts: {
        files: ['app/js/src/**/*.js'],
        tasks: ['default'],
        options: {
          livereload: true
        },
      }
    }
  });

  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['sass', 'autoprefixer', 'requirejs']);
  grunt.registerTask('styles', ['sass', 'autoprefixer']);
  grunt.registerTask('scripts', ['scripts']);

};
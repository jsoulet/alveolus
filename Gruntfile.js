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
    compass: {
      dist: {
        options: {
          cssDir: 'app/css',
          sassDir: 'app/scss',
          outputStyle: 'expanded'
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
              angular: 'empty:',
              ngRoute: 'empty:',
              jquery: 'empty:',
              bootstrap: 'empty:'

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
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['compass', 'autoprefixer', 'requirejs']);
  grunt.registerTask('styles', ['compass', 'autoprefixer']);
  grunt.registerTask('scripts', ['scripts']);

};
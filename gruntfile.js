module.exports = function(grunt) {

grunt.initConfig({
  sass: {
    dist: {
   	  options: {                     
        style: 'compressed'
      },
      files: {
        'dist/css/main.css': 'src/css/main.scss'
      }
    }
  },
  jshint: {
  	all: ['Gruntfile.js', 'src/*.js']
  },
  copy: {
  	main: {
  		cwd: 'src',
  		expand: true,
  		src: '*.html',
  		dest: 'dist/',
  	},
  	js: {
  		cwd: 'src/js',
  		expand: true,
  		src: '*.js',
  		dest: 'dist/js'
  	},
  	img: {
  		cwd: 'src/img',
  		expand: true,
  		src: '*.**',
  		dest: 'dist/img'
  	},
    fonts: {
      cwd: 'src/fonts',
      expand: true,
      src: '*.**',
      dest: 'dist/fonts'
    }
  },
  watch: { 
  js: {
    files: ['src/**/*.js'],
    tasks: ['js_changed'],
  },
  scss: {
    files: ['src/**/*.scss'],
    tasks: ['scss_changed'],
  },
  html: {
    files: ['src/**/*.html'],
    tasks: ['html_changed'],
  },
}
});

grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default',[
	'jshint','copy:main','copy:js', 'copy:img', 'copy:fonts','sass','watch'
]);

// specific tasks
grunt.registerTask('html_changed',['copy:main']);
grunt.registerTask('scss_changed',['sass']);
grunt.registerTask('js_changed',['jshint','copy:js']);

};
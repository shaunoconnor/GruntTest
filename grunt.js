module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

  	// JSLint
    lint: {
      all: [
      			'src/jshint/main.js',
      			'src/js/*.js',
        		'src/js/**/*.js' 
      		]
    },

    // JSHint
    jshint: {
      options: {
        browser: true
      }
    },

    // File concatination
    concat: { 

    	dist: {

        	src: [
        			'src/js/*.js',
        			'src/js/**/*.js' 
        		 ],

        	dest: 'build/js/application.js'
      	}
      },

    // Project metadata, used by the <banner> directive.
  	meta: {},

  	// tests
  	qunit: {},

  	// Lists of files to be minified with UglifyJS.
  	min: {
    	dist: {

    	  	src: [
    	  			'src/js/*.js',
        			'src/js/**/*.js' 
    	  		],

      		dest: 'build/js/application.min.js'
    	}
  	}

  });

  // Default task
  grunt.registerTask('default', 'lint concat min');

};
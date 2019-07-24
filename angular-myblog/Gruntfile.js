module.exports = function (grunt) {
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
 
		clean: {
			release: [
				'dist',
				'.tmp'
			]
		},
 
		useminPrepare: {
			html: 'index.html',
			options: {
				dest: 'dist'
			}
		},
		
		concat: {
			options: {
				separator: ';'
			},
			dist: {}
		},
 
		cssmin : {
			target : {}
		},
 
		uglify: {
			dist: {}
		},

		usemin: {
			html: ['index.html'],
			css: ['src/*.css'],
			options: {
			assetsDirs: ['dist/']
			}
		},
		
		replace: {
			example: {
				src: ['index.html'],
				dest: 'index.html',
				replacements: [
					{
					from: 'main.js',
					to: 'dist/main.js'
					},
					{
					from: 'styles.css',
					to: 'dist/styles.css'
					},
				]
			}
		}
		
	});

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks); 
grunt.registerTask('default', [
	'clean',
	'useminPrepare',
	'concat:generated',
    'uglify:generated',
	'cssmin:generated',
	'usemin',
	'replace'
]);
};
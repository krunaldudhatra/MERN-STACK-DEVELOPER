module.exports = function (grunt) {
  // Correctly initialize configuration
  grunt.initConfig({
    cssmin: {
      target: {
        files: [
          {
            expand: true,
            cwd: "public/css", // Corrected key from 'cd' to 'cwd'
            src: ["*.css", "!*.min.css"], // Include all CSS files except already minified ones
            dest: "public/minified", // Output directory
            ext: ".min.css" // Add `.min.css` extension
          }
        ]
      }
    },
    uglify: {
      target: {
        files: [
          {
            expand: true,
            cwd: "public/js", // Source directory for JavaScript files
            src: ["*.js", "!*.min.js"], // Include all JS files except already minified ones
            dest: "public/minified", // Output directory
            ext: ".min.js" // Add `.min.js` extension
          }
        ]
      }
    }
  });

  // Correctly load Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Corrected default task registration
  grunt.registerTask('default', ['cssmin', 'uglify']);
};

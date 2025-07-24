module.exports = function (grunt) {
    // Load the required plugin
    grunt.loadNpmTasks('grunt-replace');
  
    // Initialize the Grunt configuration
    grunt.initConfig({
      replace: {
        updateContactInfo: {
          options: {
            patterns: [
              {
                match: /ninjacoding\.com/g, // Regular expression to match 'ninjacoding.com'
                replacement: 'codingninjas.com', // Replace with 'codingninjas.com'
              },
            ],
          },
          files: [
            {
              expand: true,
              cwd: 'src', // Source directory
              src: ['index.html'], // Target file
              dest: 'build', // Destination directory
            },
          ],
        },
      },
    });
  
    // Register the default task
    grunt.registerTask('default', ['replace']);
  };
  
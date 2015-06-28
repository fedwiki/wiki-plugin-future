module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-git-authors');

  grunt.initConfig({

    authors: {
      prior: [
        "Ward Cunningham <ward@c2.com>"
      ]
    },

  });

  grunt.registerTask('default', ['update-authors']);

};

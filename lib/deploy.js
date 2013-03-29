try {
  var spm = require('spm');
} catch (e) {
  console.log('  You need install spm first');
  process.exit(2);
}
var grunt = spm.sdk.grunt;

module.exports = function(options) {
  grunt.initTask('deploy', options, function(grunt) {
    var fn = require('../Gruntfile')
    fn.call(grunt, grunt);
    grunt.registerInitTask('deploy')
    process.exit();
  });
};
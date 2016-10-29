var USER = 'huang-x-h';

module.exports = {
  name: prompt('name', basename),
  version: '0.1.0',
  description: prompt('description'),
  main: prompt('entry point', 'index.js'),
  bin: prompt('create command name', function(val) {
    if (val) {
      var command = {};
      command[val] = './cli.js';
      return command;
    }
  }),
  scripts: prompt('test command', function(s) {
    return {test: s};
  }),
  repository: prompt('create github repo', 'yes', function(val) {
    val = val.indexOf('y') !== -1 ? true : false;

    if (val) {
      return {
        type: 'git',
        url: 'https://github.com/' + USER + '/' + basename + '.git'
      }
    }
  }),
  homepage: "https://github.com/" + USER + "/" + basename,
  keywords: prompt(function (val) { return val.split(/\s+/) }),
  license: 'MIT',
  author: 'huang.xinghui <huang.x.hui@gmail.com>'
};
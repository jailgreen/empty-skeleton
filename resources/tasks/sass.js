/* 
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */
const sass = require('node-sass');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');

let options = {
  file: 'resources/scss/main.scss',
  outFile: 'data/build/css/main.css',
  includePaths: ['node_modules/'],
  style: 'expanded',
};

const sassCompile = (options) => {
  console.log(`Compiling sass: ${options.file}`);
  
  const result = sass.renderSync({
    file: options.file,
    includePaths: ['node_modules/'],
    style: 'expanded'
  }, function(err, result){ if (err) return cb(err); });
  
  // write the result to file
  mkdirp(path.dirname(options.outFile), function(err) {
    if (err) return cb(err);
    fs.writeFile(options.outFile, result.css);
  });
  
  // log successful compilation to terminal
  console.log(` ${options.outFile} built.`)
};

sassCompile(options);
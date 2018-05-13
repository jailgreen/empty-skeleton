/* 
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */

const fs = require('fs');
const glob = require('glob');
const path = require('path');

// Blame TC39... https://github.com/benjamingr/RegExp.escape/issues/37
const regExpQuote = str => str.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');

let globalSuccess = true;

const findUnusedVars = dir  => {
  if (!(fs.existsSync(dir) && fs.statSync(dir).isDirectory())) {
    console.log(`"${dir}": Not a valid directory!`);
    process.exit(1);
  }

  console.log(`Finding unused variables in "${dir}"...`);
  
  // A variable to handle success/failure message in this function
  let unusedVarsFound = false;

  // Array of all Sass files' content
  const sassFiles = glob.sync(path.join(dir, '**/*.scss'));
  // String of all Sass files' content
  let sassFilesString = '';

  sassFiles.forEach((file) => {
    sassFilesString += fs.readFileSync(file, 'utf8');
  });

  // Array of all Sass variables
  const variables = sassFilesString.match(/(^\$[a-zA-Z0-9_-]+[^:])/gm);

  console.log(`Found ${variables.length} total variables.`);

  // Loop through each variable
  variables.forEach((variable) => {
    const re = new RegExp(regExpQuote(variable), 'g');
    const count = (sassFilesString.match(re) || []).length;

    if (count === 1) {
      console.log(`Variable "${variable}" is not being used.`);
      unusedVarsFound = true;
      globalSuccess = false;
    }
  });

  if (unusedVarsFound === false) {
    console.log(`No unused variables found in "${dir}".`);
  }
};

const main = args => {
  if (args.length < 1) {
    console.log('Wrong arguments!');
    console.log('Usage: lint-vars.js folder [, folder2...]');
    process.exit(1);
  }

  args.forEach((arg) => {
    findUnusedVars(arg);
  });

  if (globalSuccess === false) {
    process.exit(1);
  }
};

main(process.argv.slice(2));
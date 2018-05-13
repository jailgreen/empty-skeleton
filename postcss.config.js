/* 
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */

const ENV = process.env.NODE_ENV;
console.log(`ENV = ${ENV}`);

module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('stylelint'),
    require('postcss-node-sass')({
      includePaths: ['node_modules/'],
      outputStyle: 'nested'
    }),
    require('postcss-cssnext')({ warnForDuplicates: false }),
    (ENV === 'production' && require('cssnano'))
  ]
};

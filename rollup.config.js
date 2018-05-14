/* 
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */
// Rollup plugins
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import * as pkg from './package.json';

const year = new Date().getFullYear();
const BUILD = process.env.BUILD || 'production';
console.log(`Environment: ${BUILD}`);

const external = ['jquery'];
const globals = {
  jquery: 'jQuery'
};

const plugins = [
  resolve(),
  eslint({
    exclude: ['resources/scss/**']
  }),
  babel({
    exclude: 'node_modules/**'
  }),
  (BUILD === 'production' && uglify())
];

export default {
    input: 'resources/js/main.js',
    output: [
      {
        file: pkg.main,
        format: 'iife',
        name: 'jahlgren',
        sourcemap: true,
        globals
      },
      {
        file: pkg.module,
        format: 'es',
        name: 'jahlgren',
        sourcemap: true,
        globals
      }
    ],
    external,
    plugins
};

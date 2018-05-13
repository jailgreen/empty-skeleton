/* 
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */
// Rollup plugins
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';

export default {
    input: 'resources/js/main.js',
    output: {
      file: 'public/js/main.min.js',
      format: 'iife',
      sourcemap: true,
      plugins: [
        eslint({
          exclude: ['resources/scss/**']
        }),
        babel({
          exclude: 'node_modules/**',
        }),
      ],
    },
};

/* 
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */
// Externals
import $ from 'jquery';
import answer from 'the-answer';

// Import a couple modules for testing.
import { sayHelloTo } from './modules/mod1';
import addArray from './modules/mod2';

// Print the results on the page.
$(() => {
  // Run some functions from our imported modules.
  const result1 = sayHelloTo('Jason');
  const result2 = addArray([1, 2, 3, 4]);

  $('.debug__output').text(`sayHelloTo('Jason') => ${result1}\n`);
  $('.debug__output').append(`addArray([1, 2, 3, 4]) => ${result2}\n`);
  $('.debug__output').append(`And the answer is ${answer}`);
});

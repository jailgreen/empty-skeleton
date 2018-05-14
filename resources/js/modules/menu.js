/* 
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */

import $ from 'jquery';

/**
 * Sets active menu link.
 * @returns {void} 
 */
export default function () {
    const active = $(`.nav > a[href="${window.location.pathname}"]`);

    active.addClass('active');
    $('<span class="sr-only">(current)</span>').appendTo(active);
}

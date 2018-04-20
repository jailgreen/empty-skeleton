<?php
/**
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */

declare(strict_types=1);

namespace AppTest\Handler;

use Prophecy\Prophecy\ObjectProphecy;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Server\RequestHandlerInterface;

/**
 *
 * @author jailgreen jukka@jahlgren.eu
 */
trait HttpMessagesTrait
{
    protected function mockServerRequestInterface()
    {
        return $this->prophesize(ServerRequestInterface::class);
    }
}

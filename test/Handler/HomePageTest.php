<?php
/**
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */

declare(strict_types=1);

namespace AppTest\Handler;

use App\Handler\HomePage;
use PHPUnit\Framework\TestCase;
use Prophecy\Argument;
use Zend\Diactoros\Response\HtmlResponse;
use Zend\Expressive\Template\TemplateRendererInterface;

/**
 * Description of HomePageTest
 *
 * @author jailgreen jukka@jahlgren.eu
 */
class HomePageTest extends TestCase
{
    use HttpMessagesTrait;

    public function testHandlerReturnsHtmlResponse() : void
    {
        $request  = $this->mockServerRequestInterface();
        $renderer = $this->prophesize(TemplateRendererInterface::class);
        $handler  = new HomePage($renderer->reveal());

        $renderer->render(
            HomePage::TEMPLATE,
            Argument::type('array')
        )->willReturn('content')->shouldBeCalled();

        $response = $handler->handle(
            $request->reveal()
        );
    }
}

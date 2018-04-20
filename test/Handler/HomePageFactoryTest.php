<?php
/**
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */

declare(strict_types=1);

namespace AppTest\Handler;

use App\Handler\HomePage;
use App\Handler\HomePageFactory;
use PHPUnit\Framework\TestCase;
use Psr\Container\ContainerInterface;
use Zend\Expressive\Template\TemplateRendererInterface;

/**
 * Description of HomePageFactoryTest
 *
 * @author jailgreen jukka@jahlgren.eu
 */
class HomePageFactoryTest extends TestCase
{
    use ContainerTrait;

    public function testFactoryInvocationReturnsHomePage() : void
    {
        $container = $this->mockContainerInterface();
        $service   = $this->prophesize(TemplateRendererInterface::class);
        $this->injectServiceInContainer($container, TemplateRendererInterface::class, $service);

        $factory = new HomePageFactory();

        $page = $factory($container->reveal());

        $this->assertInstanceOf(HomePage::class, $page);
    }
}

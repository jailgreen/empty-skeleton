<?php
/**
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */

declare(strict_types=1);

namespace Learn\Handler;

use Psr\Container\ContainerInterface;
use Zend\Expressive\Template\TemplateRendererInterface;

class CssPageFactory
{
    public function __invoke(ContainerInterface $container) : CssPage
    {
        return new CssPage($container->get(TemplateRendererInterface::class));
    }
}

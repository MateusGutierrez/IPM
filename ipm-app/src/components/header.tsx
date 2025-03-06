import { ModeToggle } from './mode-toggle';
import logo from '@/assets/logo-ipm.svg';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import paths from '@/routes/paths';
import { Menu } from 'lucide-react';
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex w-full bg-popover text-foreground items-center border-b border-border">
      <div className="flex justify-between max-w-[90%] w-full items-center mx-auto py-3 px-4">
        <div className="flex gap-4 items-center">
          <img src={logo} alt="logo" className="w-12 sm:w-16" />
        </div>
        <nav className="hidden md:flex gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <a href={paths.home}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href={paths.dashboard}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Dashboard
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href={paths.forms}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Form
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
        </nav>

        <button
          className="md:hidden flex items-center gap-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ModeToggle />
          <Menu size={24} />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-popover shadow-md">
          <nav className="flex flex-col items-center border">
            <a
              href={paths.home}
              className="text-lg border-b w-full text-center flex justify-center"
            >
              Home
            </a>
            <a
              href={paths.dashboard}
              className="text-lg border-b w-full text-center  flex justify-center"
            >
              Dashboard
            </a>
            <a
              href={paths.forms}
              className="text-lg border-b w-full text-center flex justify-center"
            >
              Form
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

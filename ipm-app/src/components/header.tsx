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

const Header = () => {
  return (
    <header className="flex w-full bg-popover text-foreground items-center border-b-solid border-b-[1px] border-b-border">
      <div className="flex justify-between w-[90%] items-center m-[auto] p-2">
        <div className="flex gap-4 items-center">
          <img src={logo} alt="logo" className="w-[60px]" />
        </div>
        <div className="flex gap-6">
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
                    Forms
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;

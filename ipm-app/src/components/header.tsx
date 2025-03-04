import { ModeToggle } from './mode-toggle';
import logo from '@/assets/logo-ipm.svg'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const Header = () => {
  return (
    <>
      <header className="flex w-full bg-popover text-foreground items-center border-b-solid border-b-[1px] border-b-border">
        <div className="flex justify-between w-[90%] items-center m-[auto] p-2">
          <div className="flex gap-4 items-center">
            <img src={logo} alt="logo" className="w-[60px]" />
          </div>
          <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Forms</NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Forms</NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Forms</NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
          <ModeToggle />
        </div>
      </header>
    </>
  );
};

export default Header;

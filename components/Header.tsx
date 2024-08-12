import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

function Header() {
  const headerMenus = [
    { href: "#about", text: "About" },

    { href: "#projects", text: "Projects" },
    { href: "#contact", text: "Contact" },
  ];
  return (
    <div className="container flex justify-between items-center bg-gradient-to-b from-white to-gray-50 py-2 sticky">
      <p className="text-xl font-semibold">Milly Liu</p>
      <NavigationMenu>
        <NavigationMenuList>
          {headerMenus.map((menu) => (
            <NavigationMenuItem key={menu.text}>
              <Link href={menu.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-lg`}
                >
                  {menu.text}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Header;

import { Link } from "react-router-dom";
import { ShoppingCart, Search, UserRound } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-black bg-primary">
      <div className="container mx-auto flex items-center justify-between px-20 py-4">
        <nav className="hidden space-x-6 md:flex">
          <Link to="/products" className="font-semibold">
            Subscribe.
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-0 bg-transparent px-0 text-base font-semibold">
                  Collections.
                </NavigationMenuTrigger>
                <NavigationMenuContent className="rounded-md border bg-primary">
                  <ul className="grid w-48 gap-2 p-4 font-custom text-3xl font-bold">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/collections/coffee"
                          role="link"
                          className="after:ease-[cubic-bezier(0.65_0.05_0.36_1)] relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom hover:after:scale-x-100"
                        >
                          Coffee
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/collections/merch"
                          role="link"
                          className="after:ease-[cubic-bezier(0.65_0.05_0.36_1)] relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom hover:after:scale-x-100"
                        >
                          Matcha
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/collections/merch"
                          role="link"
                          className="after:ease-[cubic-bezier(0.65_0.05_0.36_1)] relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom hover:after:scale-x-100"
                        >
                          Bundles
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/collections/coffee"
                          role="link"
                          className="after:ease-[cubic-bezier(0.65_0.05_0.36_1)] relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom hover:after:scale-x-100"
                        >
                          Subscribe
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link to="/blog" className="font-semibold">
            Blog.
          </Link>
          <Link to="/about" className="font-semibold">
            Visit us.
          </Link>
          <Link to="/about" className="font-semibold">
            Info.
          </Link>
        </nav>

        <Link to="/" className="-ml-80 font-custom text-5xl font-bold">
          Elowen
        </Link>

        <div className="flex items-center space-x-5">
          <button>
            <Link to="/login">
              <UserRound />
            </Link>
          </button>
          <button>
            <Link to="/login">
              <Search />
            </Link>
          </button>
          <button>
            <Link to="/login">
              <ShoppingCart />
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
}

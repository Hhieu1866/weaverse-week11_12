import { Link } from "react-router-dom";
import { ShoppingCart, Search, UserRound, Menu } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCartStore } from "@/stores/cart";

export default function Header() {
  const { items } = useCartStore();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when navigation happens
  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-20 border-b border-black bg-main">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-20">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 bg-main">
              <SheetHeader>
                <SheetTitle className="font-custom text-3xl font-bold">
                  WatchHouse
                </SheetTitle>
              </SheetHeader>

              <nav className="mt-8 space-y-6">
                <Link
                  to="/products"
                  className="block cursor-not-allowed text-lg font-semibold"
                  onClick={handleNavClick}
                >
                  Subscribe.
                </Link>

                {/* Mobile Collections Menu */}
                <div className="space-y-4">
                  <span className="text-lg font-semibold">Collections.</span>
                  <div className="ml-4 space-y-3">
                    <Link
                      to="/collections/coffee"
                      className="after:ease-[cubic-bezier(0.65_0.05_0.36_1)] relative block font-custom text-xl font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom hover:after:scale-x-100"
                      onClick={handleNavClick}
                    >
                      Coffee
                    </Link>
                    <Link
                      to="/collections/merch"
                      className="after:ease-[cubic-bezier(0.65_0.05_0.36_1)] relative block font-custom text-xl font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom hover:after:scale-x-100"
                      onClick={handleNavClick}
                    >
                      Matcha
                    </Link>
                    <Link
                      to="/collections/merch"
                      className="after:ease-[cubic-bezier(0.65_0.05_0.36_1)] relative block font-custom text-xl font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom hover:after:scale-x-100"
                      onClick={handleNavClick}
                    >
                      Bundles
                    </Link>
                    <Link
                      to="/collections/coffee"
                      className="after:ease-[cubic-bezier(0.65_0.05_0.36_1)] relative block font-custom text-xl font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom hover:after:scale-x-100"
                      onClick={handleNavClick}
                    >
                      Subscribe
                    </Link>
                  </div>
                </div>

                <Link
                  to="/blog"
                  className="block text-lg font-semibold"
                  onClick={handleNavClick}
                >
                  Blog.
                </Link>
                <Link
                  to="/about"
                  className="block text-lg font-semibold"
                  onClick={handleNavClick}
                >
                  About.
                </Link>
                <Link
                  to="/about"
                  className="block text-lg font-semibold"
                  onClick={handleNavClick}
                >
                  Visit us.
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation - Hidden on Mobile */}
        <nav className="hidden space-x-6 md:flex">
          <Link to="/products" className="cursor-not-allowed font-semibold">
            Subscribe.
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-0 bg-transparent px-0 text-base font-semibold">
                  Collections.
                </NavigationMenuTrigger>
                <NavigationMenuContent className="rounded-md border bg-main">
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
            About.
          </Link>
          <Link to="/about" className="font-semibold">
            Visit us.
          </Link>
        </nav>

        {/* Logo - Centered on Mobile, Left-positioned on Desktop */}
        <Link
          to="/"
          className="font-custom text-3xl font-bold md:-ml-80 md:text-5xl"
        >
          WatchHouse
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3 md:space-x-5">
          <button>
            <Link to="/login">
              <UserRound className="h-5 w-5 md:h-6 md:w-6" />
              <span className="sr-only">Account</span>
            </Link>
          </button>
          <button className="hidden md:block">
            <Link to="/login">
              <Search className="h-6 w-6" />
              <span className="sr-only">Search</span>
            </Link>
          </button>
          <button className="relative">
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" />
              <span className="sr-only">Shopping Cart</span>
              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {totalItems}
                </span>
              )}
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
}

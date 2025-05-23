"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[100] w-full px-4 pt-12 transition-all duration-300`}
    >
      <div
        className={`relative mx-auto max-w-7xl rounded-full overflow-hidden border border-white/20 backdrop-blur-md ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="bg-black/25 relative z-10 flex items-center justify-between px-6 py-2 text-white ">
          {/* Left: Logo + Desktop Nav */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <Image
                src="https://images.ctfassets.net/zcd9ovevodsf/5hMiOaLhP23VkyyE4RDfqL/df2b83c535d0a063c407753014faf930/cyware-logo.svg"
                alt="Cyware"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            <NavigationMenu className="hidden lg:flex relative z-[101]">
              <NavigationMenuList>
                {["Platform", "Solutions", "Partners", "Resources"].map(
                  (title) => (
                    <NavigationMenuItem key={title}>
                      <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10">
                        {title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="#"
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900"
                              >
                                <div className="text-sm font-medium leading-none">
                                  Sample Item
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                                  Short description here.
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )
                )}
                <NavigationMenuItem>
                  <Link
                    href="#"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-white hover:bg-white/10 font-medium transition-colors"
                  >
                    <span className="flex items-center gap-1">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                          fill="currentColor"
                        />
                      </svg>
                      Quarterback AI
                    </span>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right: Get a Demo + About + Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-white text-white bg-[#004e3c] hover:bg-[#00624d] text-sm font-medium transition"
            >
              Get a Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="hidden lg:flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10">
                      About Cyware
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        {["Company", "Careers", "Contact"].map((label) => (
                          <li key={label}>
                            <NavigationMenuLink asChild>
                              <Link
                                href="#"
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {label}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                                  Short text about {label.toLowerCase()}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Mobile Drawer */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-white hover:bg-white/10"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-gray-900 text-white"
              >
                <div className="flex flex-col gap-6 py-6">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="https://images.ctfassets.net/zcd9ovevodsf/5hMiOaLhP23VkyyE4RDfqL/df2b83c535d0a063c407753014faf930/cyware-logo.svg"
                      alt="Cyware"
                      width={150}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </Link>
                  <nav className="flex flex-col space-y-4">
                    {[
                      "Platform",
                      "Solutions",
                      "Partners",
                      "Resources",
                      "About Cyware",
                    ].map((item) => (
                      <div key={item} className="border-b border-gray-800 pb-4">
                        <div className="flex items-center justify-between py-2">
                          <span className="text-lg font-medium">{item}</span>
                          <ChevronDown className="h-5 w-5" />
                        </div>
                      </div>
                    ))}
                    <Link href="#" className="flex items-center py-2">
                      <span className="text-lg font-medium">
                        Quarterback AI
                      </span>
                    </Link>
                    <SheetClose asChild>
                      <Link
                        href="/demo"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition-colors"
                      >
                        Get a Demo <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </SheetClose>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

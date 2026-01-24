"use client";

import Link from "next/link";
import { Menu, Globe, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const navItems = [
    { name: "Whitepaper", href: "#" },
    { name: "Tokenomics", href: "#" },
    { name: "Roadmap", href: "#" },
    { name: "Blog", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm grid-pattern">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
          <span className="text-lg font-semibold text-white text-theme-gradient-strong">TOKENS</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language */}
          <button className="flex items-center gap-1 text-slate-300 hover:text-white transition">
            <Globe className="h-4 w-4" />
            <span className="text-sm">EN</span>
          </button>

          {/* Connect Wallet */}
          <Button className="btn-thick-obsidian px-6 hover:opacity-90 flex items-center gap-2">
            <Wallet className="h-4 w-4" />
            Connect Wallet
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="ml-auto md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="bg-[#020617] border-l border-white/10">
              <nav className="flex h-full flex-col">
                <div className="mb-8 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
                  <span className="text-lg font-semibold text-white">BMIC</span>
                </div>

                <div className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <Link key={item.name} href={item.href} className="text-base text-slate-300 hover:text-white transition">
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-4">
                  <Button variant="ghost" className="flex items-center gap-2 bg-foreground text-background hover:bg-foreground/95 hover:text-background">
                    <Globe className="h-4 w-4" />
                    EN
                  </Button>

                  <Button className="btn-thick-obsidian px-6 hover:opacity-90 flex items-center gap-2">
                    <Wallet className="h-4 w-4" />
                    Connect Wallet
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

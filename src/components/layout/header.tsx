"use client";

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export function Header() {
  const navItems = [
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Testimonials', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full py-4 px-4 sm:px-6 lg:px-8 bg-background/95 backdrop-blur-sm grid-pattern">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-2xl font-bold text-foreground">Genesis</span>
          {/* <span className="text-2xl font-normal text-foreground">sis</span> */}
        </Link>
        <nav className="hidden md:flex items-center justify-center flex-1">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-sm font-medium text-secondary-foreground hover:text-foreground transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90">Sign Up</Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <nav className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link href="/" className="flex items-center gap-1">
                    <span className="text-2xl font-bold text-foreground">Point</span>
                    <span className="text-2xl font-normal text-foreground">er</span>
                  </Link>
                </div>
                <div className="flex flex-col gap-4 py-8">
                  {navItems.map((item) => (
                    <Link key={item.name} href={item.href} className="text-lg font-medium text-foreground hover:text-primary transition-colors text-center">
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-auto">
                  <Button className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90 text-lg">Sign Up</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

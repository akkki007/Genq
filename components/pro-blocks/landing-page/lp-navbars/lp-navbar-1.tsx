"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MENU_ITEMS = [
  { label: "Services", href: "#features" },
  { label: "How we work", href: "#how-it-works" },
  { label: "Markets", href: "#markets" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

interface NavMenuItemsProps {
  className?: string;
}

const NavMenuItems = ({ className }: NavMenuItemsProps) => (
  <div className={`flex flex-col gap-1 md:flex-row ${className ?? ""}`}>
    {MENU_ITEMS.map(({ label, href }) => (
      <Link key={label} href={href}>
        <Button variant="ghost" className="w-full md:w-auto">
          {label}
        </Button>
      </Link>
    ))}
  </div>
);

export function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-background sticky top-0 isolate z-50 border-b py-3.5 md:py-4">
      <div className="relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="Genq Logo" 
              width={120} 
              height={40} 
              className="h-auto"
            />
          </Link>
          <Button
            variant="ghost"
            className="flex size-9 items-center justify-center md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden w-full flex-row justify-end gap-5 md:flex">
          <NavMenuItems />
          <Link href="#pricing">
            <Button>Contact Us</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden">
            <NavMenuItems />
            <Link href="#pricing">
              <Button className="w-full">Contact Us</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

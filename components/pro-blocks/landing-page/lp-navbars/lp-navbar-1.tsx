"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MENU_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Our projects", href: "/projects" },
] as const;

interface NavMenuItemsProps {
  className?: string;
}

const NavMenuItems = ({ className }: NavMenuItemsProps) => (
  <div className={`flex flex-col gap-1 md:flex-row ${className ?? ""}`}>
    {MENU_ITEMS.map(({ label, href }) => (
      <Link key={label} href={href} aria-label={label}>
        <Button variant="ghost" className="w-full md:w-auto">
          {label}
        </Button>
      </Link>
    ))}
  </div>
);

export function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((previousIsMenuOpen) => !previousIsMenuOpen);
  };

  return (
    <nav className="bg-background sticky top-0 isolate z-50 border-b py-3.5 md:py-4">
      <div className="relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="Go to homepage">
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
            onClick={handleToggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                handleToggleMenu();
              }
            }}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden w-full flex-row justify-end gap-5 md:flex">
          <NavMenuItems />
          <Link href="/contact" aria-label="Contact us">
            <Button>Contact Us</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden">
            <NavMenuItems />
            <Link href="/contact" aria-label="Contact us">
              <Button className="w-full">Contact Us</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

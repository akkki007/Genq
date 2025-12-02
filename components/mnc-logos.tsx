"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface MNCLogoProps {
  className?: string;
}

// Popular MNC logos - using publicly available CDN URLs
// You can replace these with your own logo images in the public folder
const MNC_LOGOS = [
  {
    name: "Microsoft",
    src: "https://logos-world.net/wp-content/uploads/2020/04/Microsoft-Logo.png",
    alt: "Microsoft",
  },
  {
    name: "Google",
    src: "https://logos-world.net/wp-content/uploads/2020/04/Google-Logo.png",
    alt: "Google",
  },
  {
    name: "Amazon",
    src: "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png",
    alt: "Amazon",
  },
  {
    name: "IBM",
    src: "https://logos-world.net/wp-content/uploads/2020/04/IBM-Logo.png",
    alt: "IBM",
  },
  {
    name: "Accenture",
    src: "https://logos-world.net/wp-content/uploads/2020/06/Accenture-Logo.png",
    alt: "Accenture",
  },
  {
    name: "Oracle",
    src: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png",
    alt: "Oracle",
  },
  {
    name: "SAP",
    src: "https://logos-world.net/wp-content/uploads/2020/04/SAP-Logo.png",
    alt: "SAP",
  },
  {
    name: "Salesforce",
    src: "https://logos-world.net/wp-content/uploads/2020/10/Salesforce-Logo.png",
    alt: "Salesforce",
  },
];

export function MNCLogo({ className }: MNCLogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative w-full h-8 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
        <Image
          src={MNC_LOGOS[Math.floor(Math.random() * MNC_LOGOS.length)].src}
          alt={MNC_LOGOS[Math.floor(Math.random() * MNC_LOGOS.length)].alt}
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    </div>
  );
}

// Individual logo components for specific companies
export function MicrosoftLogo({ className }: MNCLogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative w-full h-8 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
        <Image
          src="https://logos-world.net/wp-content/uploads/2020/04/Microsoft-Logo.png"
          alt="Microsoft"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    </div>
  );
}

export function GoogleLogo({ className }: MNCLogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative w-full h-8 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
        <Image
          src="https://logos-world.net/wp-content/uploads/2020/04/Google-Logo.png"
          alt="Google"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    </div>
  );
}

export function AmazonLogo({ className }: MNCLogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative w-full h-8 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
        <Image
          src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"
          alt="Amazon"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    </div>
  );
}

export function IBMLogo({ className }: MNCLogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative w-full h-8 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
        <Image
          src="https://logos-world.net/wp-content/uploads/2020/04/IBM-Logo.png"
          alt="IBM"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    </div>
  );
}

export function AccentureLogo({ className }: MNCLogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative w-full h-8 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
        <Image
          src="https://logos-world.net/wp-content/uploads/2020/06/Accenture-Logo.png"
          alt="Accenture"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    </div>
  );
}

export function OracleLogo({ className }: MNCLogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative w-full h-8 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
        <Image
          src="https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png"
          alt="Oracle"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    </div>
  );
}

export function SAPLogo({ className }: MNCLogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative w-full h-8 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
        <Image
          src="https://logos-world.net/wp-content/uploads/2020/04/SAP-Logo.png"
          alt="SAP"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    </div>
  );
}

export function SalesforceLogo({ className }: MNCLogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative w-full h-8 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
        <Image
          src="https://logos-world.net/wp-content/uploads/2020/10/Salesforce-Logo.png"
          alt="Salesforce"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    </div>
  );
}


"use client";

import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import Image from "next/image";

export function HeroSection2() {
  return (
    <section
      className="bg-secondary section-padding-y"
      aria-labelledby="hero-heading"
    >
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Left Column */}
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          {/* Section Title */}
          <div className="section-title-gap-xl flex flex-col">
            {/* Tagline */}
            <Tagline>Genq</Tagline>
            {/* Main Heading */}
            <h1 id="hero-heading" className="heading-xl">
              Global BPO Solutions for Sales & Lead Generation
            </h1>
            {/* Description */}
            <p className="text-muted-foreground text-base lg:text-lg">
              Connecting businesses with qualified leads and driving sales across UK, US, and Australian markets
            </p>
          </div>

          {/* Feature List */}
          <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                International market expertise (UK, US, Australia)
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                Qualified lead generation & conversion
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                Customized sales solutions for your business
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button>Try for free</Button>
            <Button variant="ghost">
              How it works
              <ArrowRight />
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full flex-1">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="/Hero.png"
              alt="Hero visual"
              fill
              priority
              className="h-full w-full rounded-xl object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}

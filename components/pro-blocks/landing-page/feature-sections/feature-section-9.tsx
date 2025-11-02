"use client";

import { Bot, Plug, BarChart3, TextSearch } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function FeatureSection9() {
  return (
    <section
      className="bg-secondary section-padding-y border-b"
      id="how-it-works"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>How we work</Tagline>
          <h2 className="heading-lg text-foreground">
            Global Sales Excellence
          </h2>
          <p className="text-muted-foreground text-base">
            Genq transforms your international sales challenges into growth opportunities with our specialized BPO services across UK, US, and Australian markets.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <Plug className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">1. Connect</h3>
              <p className="text-muted-foreground">
                Initial consultation to understand your sales goals and target markets
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <Bot className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">2. Strategy</h3>
              <p className="text-muted-foreground">
                Develop customized lead generation and sales strategies for your target regions
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <BarChart3 className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">3. Execute</h3>
              <p className="text-muted-foreground">
                Implement campaigns with our specialized teams across UK, US, and Australia
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <TextSearch className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">4. Results</h3>
              <p className="text-muted-foreground">
                Track performance metrics and optimize campaigns for maximum ROI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

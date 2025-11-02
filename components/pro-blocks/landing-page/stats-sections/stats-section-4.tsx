"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function StatsSection4() {
  return (
    <section className="bg-background section-padding-y border-b">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>Performance</Tagline>
            <h2 className="heading-lg text-foreground">Our BPO Results</h2>
            <p className="text-muted-foreground">
              Genq delivers measurable results for our clients across international markets,
              driving sales growth and lead generation success.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="text-4xl font-bold text-foreground">35%</div>
                <div className="text-sm text-muted-foreground">
                  Average sales increase
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="text-4xl font-bold text-foreground">15K+</div>
                <div className="text-sm text-muted-foreground">
                  Qualified leads generated
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="text-4xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">
                  Client retention rate
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="text-4xl font-bold text-foreground">3</div>
                <div className="text-sm text-muted-foreground">
                  Global markets served
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

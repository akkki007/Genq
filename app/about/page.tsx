import Image from "next/image";
import Link from "next/link";
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { GoogleMapsEmbed } from "@/components/google-maps-embed";

const AboutPage = () => {
  return (
    <main className="bg-background">
      <LpNavbar1 />
      <section className="section-padding-y">
        <div className="container mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1 space-y-6">
            <p className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              About Genq
            </p>
            <h1 className="heading-xl text-foreground">
              We turn global intent into qualified pipeline.
            </h1>
            <p className="max-w-xl text-base text-muted-foreground">
              Genq is a distributed revenue studio, helping teams in the UK, Australia, and beyond
              convert interest into conversations that close. We blend data, human context, and
              precise outreach to build predictable pipeline for modern GTM teams.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border bg-card p-5 shadow-xs">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Our mission
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Make world-class outbound and lead qualification accessible to every ambitious
                  B2B team, not just the biggest enterprises.
                </p>
              </div>
              <div className="rounded-xl border bg-card p-5 shadow-xs">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Our vision
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  A world where SDR teams focus on strategic conversations, while Genq handles the
                  systems, signals, and scalable workflows behind the scenes.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                aria-label="View our projects"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2"
              >
                View our projects
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                aria-label="Talk to our team"
              >
                Talk to our team
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative mx-auto max-w-md">
              <div className="relative overflow-hidden rounded-2xl border bg-card shadow-xl">
                <Image
                  src="/people-analyzing-checking-finance-graphs-office.jpg"
                  alt="Genq team analyzing pipeline and revenue graphs in the office"
                  width={640}
                  height={480}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-y border-t">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="mb-8 space-y-3 text-center">
            <h2 className="heading-lg text-foreground">What we believe in</h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
              Great pipeline is built long before a lead hits your CRM. Our principles keep every
              play we run aligned with your brand and your buyers.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border bg-card p-5 text-left shadow-xs">
              <p className="text-sm font-semibold text-foreground">Data with context</p>
              <p className="mt-2 text-sm text-muted-foreground">
                We use intent signals, firmographic data, and your internal notes to prioritize
                accounts that are ready to talk now.
              </p>
            </div>
            <div className="rounded-xl border bg-card p-5 text-left shadow-xs">
              <p className="text-sm font-semibold text-foreground">Humans first</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Every sequence we design respects your buyers’ time, voice, and channel preferences,
                so outreach feels considered, not spammy.
              </p>
            </div>
            <div className="rounded-xl border bg-card p-5 text-left shadow-xs">
              <p className="text-sm font-semibold text-foreground">Transparent outcomes</p>
              <p className="mt-2 text-sm text-muted-foreground">
                We obsess over win-rate level metrics—not vanity numbers—so you know how every
                project compounds into revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-y border-t">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <h2 className="heading-lg text-foreground">A global team, built for follow-the-sun</h2>
              <p className="max-w-2xl text-sm text-muted-foreground">
                Our teams in the UK and Australia partner with B2B companies that sell across
                regions, time zones, and segments. We adapt to your calendar and your buyers&apos;
                expectations.
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  UK coverage
                </p>
                <p className="mt-1 text-base font-semibold text-foreground">EMEA &amp; North America</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  AU coverage
                </p>
                <p className="mt-1 text-base font-semibold text-foreground">APAC &amp; ANZ</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-2xl border bg-card p-5 shadow-sm">
              <div className="relative h-44 overflow-hidden rounded-xl">
                <Image
                  src="/people-office-analyzing-checking-finance-graphs.jpg"
                  alt="UK revenue team reviewing performance insights in the office"
                  width={560}
                  height={320}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  UK team
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  Precision outbound for EMEA and North American markets.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  From list-building to qualification, our London-based specialists design plays
                  that align with local markets, regulations, and buying committees.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border bg-card p-5 shadow-sm">
              <div className="relative h-44 overflow-hidden rounded-xl">
                <Image
                  src="/outsourcing-function-tasks-contract-business-concept.jpg"
                  alt="Australian team collaborating on outsourced revenue operations"
                  width={560}
                  height={320}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Australia team
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  High-intent coverage across APAC and ANZ.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Our Sydney-based team ensures your pipeline is moving while the rest of your org
                  sleeps—staying responsive to your buyers across the region.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-4">
            <div className="space-y-3 text-center">
              <h3 className="text-lg font-semibold text-foreground">Our India Office</h3>
              <p className="text-sm text-muted-foreground">
                Dhole patel rd near ruby hall opposite kotak mahindra bank choice argade D building office no 34, Pune 411001
              </p>
            </div>
            <GoogleMapsEmbed height="400px" className="mx-auto max-w-4xl" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;



import Image from "next/image";
import Link from "next/link";
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";

const projects = [
  {
    id: "uk-enterprise-saas",
    title: "EMEA enterprise SaaS expansion",
    region: "UK & EMEA",
    metric: "+65% qualified opportunities",
    timeline: "90 days",
    image: "/universal-search.png",
    description:
      "We partnered with a London-based SaaS team to prioritize intent-rich accounts and book meetings across new EMEA markets.",
  },
  {
    id: "anz-demand-gen",
    title: "ANZ demand generation program",
    region: "Australia & New Zealand",
    metric: "+47% opportunity-to-meeting rate",
    timeline: "60 days",
    image: "/team-insights.png",
    description:
      "Genq&apos;s Australian pod built a region-first outbound motion that mirrored local buyer expectations and calendars.",
  },
  {
    id: "revive-stale-pipeline",
    title: "Reviving stale pipeline across segments",
    region: "Global",
    metric: "3.2x reactivated accounts",
    timeline: "120 days",
    image: "/smart-tags.png",
    description:
      "We rebuilt the follow-up engine for a global GTM team, turning old opportunities into new conversations.",
  },
  {
    id: "product-led-follow-up",
    title: "Product-led sign-up follow-up",
    region: "North America",
    metric: "28% lift in PQL to meeting",
    timeline: "45 days",
    image: "/ai-meeting-notes.png",
    description:
      "Genq designed lightweight sequences to progress self-serve sign-ups into pipeline for an AI-native product.",
  },
  {
    id: "partner-sourced-pipeline",
    title: "Partner-sourced pipeline playbook",
    region: "UK & APAC",
    metric: "+39% sourced revenue",
    timeline: "6 months",
    image: "/placeholder.jpg",
    description:
      "We helped a B2B platform activate under-utilized partner lists and joint campaigns across two key regions.",
  },
  {
    id: "greenfield-market-entry",
    title: "Greenfield market entry",
    region: "APAC",
    metric: "First 40 strategic meetings",
    timeline: "90 days",
    image: "/placeholder-user.jpg",
    description:
      "Our APAC specialists created a repeatable motion for entering a new market, from account selection to win stories.",
  },
] as const;

const ProjectsPage = () => {
  return (
    <main className="bg-background">
      <LpNavbar1 />
      <section className="section-padding-y border-b">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-5">
              <p className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                Our projects
              </p>
              <h1 className="heading-xl text-foreground">
                Playbooks proven across markets, segments, and sales motions.
              </h1>
              <p className="max-w-2xl text-sm text-muted-foreground">
                Every engagement is different—but the patterns repeat. Below is a snapshot of how
                Genq supports GTM teams across UK, Australia, APAC, and North America.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                  B2B SaaS
                </span>
                <span className="rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                  Enterprise &amp; mid-market
                </span>
                <span className="rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                  Product-led growth
                </span>
                <span className="rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                  New market entry
                </span>
              </div>
            </div>
            <div className="relative h-52 w-full max-w-md overflow-hidden rounded-2xl border bg-card shadow-xl">
              <Image
                src="/team-insights_mobile.png"
                alt="Snapshots of Genq project performance"
                width={520}
                height={320}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-y">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="heading-md text-foreground">Recent example projects</h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                These examples show how we combine research, outbound, and qualification to build
                pipeline that sales teams can confidently forecast.
              </p>
            </div>
            <Link
              href="/contact"
              aria-label="Discuss a project like these"
              className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Discuss a project like this
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:shadow-md"
                aria-label={project.title}
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={480}
                    height={260}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-3 bottom-3 flex items-center justify-between text-xs text-primary-foreground">
                    <span className="rounded-full bg-black/70 px-2 py-1 text-[0.7rem]">
                      {project.region}
                    </span>
                    <span className="rounded-full bg-black/70 px-2 py-1 text-[0.7rem]">
                      {project.timeline}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-4">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{project.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{project.description}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between text-xs">
                    <div className="flex flex-col gap-1">
                      <p className="font-medium text-foreground">{project.metric}</p>
                      <p className="text-muted-foreground">Primary outcome</p>
                    </div>
                    <span className="rounded-full border bg-background px-3 py-1 text-[0.7rem] text-muted-foreground">
                      Genq case study
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;



"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";

type FormStatus = "idle" | "submitting" | "success" | "error";

const ContactPage = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverMessage, setServerMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setStatus("submitting");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => null);
        throw new Error(error?.error ?? "Unable to submit the form.");
      }

      setStatus("success");
      setServerMessage("Thanks! We’ll be in touch within one business day.");
      form.reset();
    } catch (error) {
      console.error("[CONTACT_FORM_SUBMIT_ERROR]", error);
      setStatus("error");
      setServerMessage(
        "Something went wrong. Please try again or email us directly at info@genq.co.in.",
      );
    }
  };

  const isSubmitting = status === "submitting";

  return (
    <main className="bg-background">
      <LpNavbar1 />
      <section className="section-padding-y border-b">
        <div className="container mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1 space-y-5">
            <p className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              Contact us
            </p>
            <h1 className="heading-xl text-foreground">
              Tell us about your pipeline goals. We&apos;ll share how Genq can help.
            </h1>
            <p className="max-w-xl text-sm text-muted-foreground">
              Share a bit about your team, product, and markets. A Genq specialist from the UK or
              Australia will respond within one business day.
            </p>
            <div className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
              <div className="rounded-xl border bg-card p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Typical response time
                </p>
                <p className="mt-1 text-sm text-foreground">Under 24 hours on business days</p>
              </div>
              <div className="rounded-xl border bg-card p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Ideal teams
                </p>
                <p className="mt-1 text-sm text-foreground">
                  B2B SaaS, services, and platforms with outbound or product-led motions.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border bg-card shadow-xl">
              <Image
                src="/ai-meeting-notes_mobile.png"
                alt="Meeting notes and follow ups prepared by Genq"
                width={560}
                height={360}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-y">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-start">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border bg-card p-6 shadow-sm"
              aria-label="Contact form"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="full-name"
                    className="text-xs font-medium text-foreground"
                  >
                    Full name
                  </label>
                  <Input
                    id="full-name"
                    name="fullName"
                    placeholder="Taylor Morgan"
                    aria-label="Full name"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="work-email"
                    className="text-xs font-medium text-foreground"
                  >
                    Work email
                  </label>
                  <Input
                    id="work-email"
                    name="workEmail"
                    type="email"
                    placeholder="you@company.com"
                    aria-label="Work email"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="company"
                    className="text-xs font-medium text-foreground"
                  >
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Genq"
                    aria-label="Company name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="role"
                    className="text-xs font-medium text-foreground"
                  >
                    Role
                  </label>
                  <Input
                    id="role"
                    name="role"
                    placeholder="Head of Sales Development"
                    aria-label="Your role"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="region"
                    className="text-xs font-medium text-foreground"
                  >
                    Primary region
                  </label>
                  <Input
                    id="region"
                    name="region"
                    placeholder="UK, Australia, EMEA, APAC..."
                    aria-label="Primary region"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="team-size"
                    className="text-xs font-medium text-foreground"
                  >
                    SDR / sales team size
                  </label>
                  <Input
                    id="team-size"
                    name="teamSize"
                    placeholder="e.g. 5 SDRs, 8 AEs"
                    aria-label="Team size"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-foreground"
                >
                  What are you hoping Genq can help with?
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Share a bit about your current pipeline, challenges, and timelines..."
                  aria-label="Message"
                  rows={5}
                  required
                />
              </div>

              <div className="space-y-3 text-xs text-muted-foreground">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 h-4 w-4 rounded border bg-background" aria-hidden="true" />
                  <p>
                    By submitting this form, you agree that Genq may contact you about our services.
                    We&apos;ll never share your details with third parties.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5"
                  aria-label="Submit contact form"
                >
                  {isSubmitting ? "Sending..." : "Submit request"}
                </Button>
                <p className="text-xs text-muted-foreground">
                  Prefer email? Reach us at{" "}
                  <span className="font-medium text-foreground">info@genq.co.in</span>
                </p>
              </div>
              {serverMessage && (
                <p
                  className={`text-xs ${status === "error" ? "text-destructive" : "text-emerald-600"}`}
                  aria-live="polite"
                >
                  {serverMessage}
                </p>
              )}
            </form>

            <aside className="space-y-6 rounded-2xl border bg-card p-6 shadow-sm">
              <h2 className="heading-sm text-foreground">Where our teams are based</h2>
              <p className="text-sm text-muted-foreground">
                We structure pods around your go-to-market motion—not ours. When you work with Genq,
                you get a distributed team that feels like an extension of your own.
              </p>
              <div className="space-y-4 text-sm">
                <div className="rounded-xl border bg-background p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    UK team
                  </p>
                  <p className="mt-1 font-medium text-foreground">London, UK</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Focused on EMEA and North American coverage, with deep experience in B2B SaaS.
                  </p>
                </div>
                <div className="rounded-xl border bg-background p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Australia team
                  </p>
                  <p className="mt-1 font-medium text-foreground">Sydney, Australia</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Supporting APAC and ANZ go-to-market motions with local context and coverage.
                  </p>
                </div>
              </div>
              <div className="relative h-40 overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg"
                  alt="Genq global collaboration illustration"
                  width={480}
                  height={260}
                  className="h-full w-full object-cover"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;



"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function FaqSection2() {
  return (
    <section
      className="bg-background section-padding-y border-b"
      aria-labelledby="faq-heading"
      id="faq"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left Column */}
          <div className="section-title-gap-lg flex flex-1 flex-col">
            {/* Category Tag */}
            <Tagline>FAQ</Tagline>
            {/* Main Title */}
            <h1 id="faq-heading" className="heading-lg text-foreground">
              Find answers to our frequently asked questions
            </h1>
            {/* Section Description */}
            <p className="text-muted-foreground">
              We&apos;ve compiled the most important information to help you get
              the most out of your experience. Can&apos;t find what you&apos;re
              looking for?{" "}
              <Link href="#" className="text-primary underline">
                Contact us.
              </Link>
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-1 flex-col gap-8">
            {/* General FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">
                Services
              </h2>
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible
                className="w-full"
                aria-label="Services FAQ items"
              >
                {/* FAQ Item 1 */}
                <AccordionItem value="product-1">
                  <AccordionTrigger className="text-left">
                    Which markets do you operate in?
                  </AccordionTrigger>
                  <AccordionContent>
                    Genq specializes in BPO services across the UK, US, and Australian markets. 
                    Our teams are native speakers with deep cultural understanding of these regions, 
                    ensuring effective communication with your target audience.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="product-2">
                  <AccordionTrigger className="text-left">
                    How do you qualify leads?
                  </AccordionTrigger>
                  <AccordionContent>
                    We use a comprehensive lead qualification framework that evaluates prospects based on 
                    budget, authority, need, and timeline. Our specialized teams conduct thorough research 
                    and initial conversations to ensure we're only passing qualified leads to your sales team.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="product-3">
                  <AccordionTrigger className="text-left">
                    What industries do you specialize in?
                  </AccordionTrigger>
                  <AccordionContent>
                    Genq has extensive experience across multiple industries including technology, 
                    financial services, healthcare, and professional services. We tailor our approach 
                    to match the specific requirements and sales cycles of your industry.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Billing FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">
                Billing
              </h2>
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible
                className="w-full"
                aria-label="Billing FAQ items"
              >
                {/* FAQ Item 1 */}
                <AccordionItem value="billing-1">
                  <AccordionTrigger className="text-left">
                    How is pricing structured?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our pricing is based on the scope of your BPO requirements, including target markets, 
                    campaign volume, and service level. We offer flexible monthly plans with no long-term 
                    contracts required, allowing you to scale services as your business grows.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="billing-2">
                  <AccordionTrigger className="text-left">
                    Can I customize my service package?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer fully customizable service packages tailored to your specific business needs. 
                    Our team will work with you to design a solution that aligns with your goals and budget, 
                    focusing on the markets and services most relevant to your growth strategy.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="billing-3">
                  <AccordionTrigger className="text-left">
                    Do you offer discounts for long-term contracts?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes! We offer significant discounts for 6-month and annual commitments. 
                    Long-term partnerships allow us to better understand your business and optimize 
                    our strategies for maximum ROI, resulting in better performance and cost savings.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="billing-4">
                  <AccordionTrigger className="text-left">
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent>
                    We accept all major credit cards, bank transfers, and can accommodate 
                    corporate invoicing with net-30 payment terms for enterprise clients. 
                    All payments are processed securely, and we provide detailed monthly invoices.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

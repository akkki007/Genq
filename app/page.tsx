"use client"
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { HeroSection2 } from "@/components/pro-blocks/landing-page/hero-sections/hero-section-2";
import { LogoSection10 } from "@/components/pro-blocks/landing-page/logo-sections/logo-section-7";
import TestimonialsSection1 from "@/components/pro-blocks/landing-page/testimonials-sections/testimonials-section-1";
import { FeatureSection9 } from "@/components/pro-blocks/landing-page/feature-sections/feature-section-9";
import { StatsSection4 } from "@/components/pro-blocks/landing-page/stats-sections/stats-section-4";
import { PricingSection3 } from "@/components/pro-blocks/landing-page/pricing-sections/pricing-section-3";
import { FaqSection2 } from "@/components/pro-blocks/landing-page/faq-sections/faq-section-2";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";

export default function Page() {
  return (
    <main>
      <LpNavbar1 />
      <HeroSection2 />
      <LogoSection10 />
      <TestimonialsSection1
        quote="Genq transformed our lead generation process. Their UK team helped us increase qualified leads by 65% in just three months."
        authorName="David Park"
        authorRole="Sales Director at UK TechCorp"
        avatarSrc="/DavidPark.png"
      />
      <FeatureSection9 />
      <StatsSection4 />
      <TestimonialsSection1
        quote="Genq's Australian team delivered outstanding results for our sales campaigns. Their lead qualification process increased our conversion rate by 47%."
        authorName="Monica Kurt"
        authorRole="Sales Manager at AusTech Solutions"
        avatarSrc="/MonicaKurt.png"
      />
      <PricingSection3 />
      <FaqSection2 />
      <Footer1 />
    </main>
  );
}

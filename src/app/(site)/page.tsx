import { Features } from "@/components/site/landing/features";
import { Hero } from "@/components/site/landing/hero";
import { BeforeAfter, Faq, HowItWorks, PaymentStrip, SignupCta } from "@/components/site/landing/sections";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export default function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenu" tabIndex={-1}>
        <Hero />
        <PaymentStrip />
        <BeforeAfter />
        <Features />
        <HowItWorks />
        <Faq />
        <SignupCta />
      </main>
      <SiteFooter />
    </>
  );
}

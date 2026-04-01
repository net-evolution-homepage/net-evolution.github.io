import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import Services from "@/components/sections/Services";
import AboutMe from "@/components/sections/AboutMe";
import Process from "@/components/sections/Process";
import PricingModels from "@/components/sections/PricingModels";
import TrustSignals from "@/components/sections/TrustSignals";
import CTASection from "@/components/sections/CTASection";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Net-Evolution",
  "url": "https://www.net-evolution.de",
  "description": "IT-Security Audits, Penetration Testing und NIS2-Compliance für Unternehmen in Deutschland.",
  "founder": {
    "@type": "Person",
    "name": "Marvin Henrich",
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Weinbergstraße 17",
    "addressLocality": "Dorsheim",
    "postalCode": "55452",
    "addressCountry": "DE",
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+49-15679-708019",
    "email": "info@net-evolution.de",
    "contactType": "customer service",
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Net-Evolution",
  "url": "https://www.net-evolution.de",
  "description": "IT-Security Audits, Penetration Testing und NIS2-Compliance für Unternehmen in Deutschland.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <Hero />
      <TrustSignals />
      <ProblemSection />
      <Services />
      <Process />
      <AboutMe />
      <PricingModels />
      <CTASection />
    </>
  );
}

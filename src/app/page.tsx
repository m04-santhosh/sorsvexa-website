import Navbar from "@/components/navbar";
import HeroSection from "@/components/sections/hero";
import TrustedBySection from "@/components/sections/trusted-by";
import ServicesSection from "@/components/sections/services";
import WhyBusinessesChooseSorsvexa from "@/components/sections/why-businesses-choose";
import IndustriesSection from "@/components/sections/industries";
import ProcessSection from "@/components/sections/process";
import PortfolioSection from "@/components/sections/portfolio";
import StatisticsSection from "@/components/sections/statistics";
import TestimonialsSection from "@/components/sections/testimonials";
import PricingSection from "@/components/sections/pricing";
import FAQSection from "@/components/sections/faq";
import CTASection from "@/components/sections/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1 w-full flex flex-col">
        <HeroSection />
        <TrustedBySection />
        <ServicesSection />
        <WhyBusinessesChooseSorsvexa />
        <IndustriesSection />
        <ProcessSection />
        <PortfolioSection />
        <StatisticsSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}

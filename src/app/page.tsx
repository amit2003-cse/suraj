import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import FeaturesBanner from "@/components/FeaturesBanner";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import OfferPopup from "@/components/OfferPopup";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <HeroSection />
        <CoursesSection />
        <FeaturesBanner />
        <Testimonials />
      </main>

      <Footer />
      
      {/* Absolute / Fixed Overlays */}
      <FloatingWhatsApp />
      <OfferPopup />
    </div>
  );
}

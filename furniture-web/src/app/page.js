import { AboutSection } from "@/components/Home/AboutSection";
import { CTASection } from "@/components/Home/CTASection";
import { Footer } from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import ProductCollection from "@/components/Home/ProductCollection";

export default function Home() {
    return (
        <div>
            <Hero />
            <ProductCollection />
            <AboutSection />
            <CTASection />
            <Footer />
        </div>
    );
}

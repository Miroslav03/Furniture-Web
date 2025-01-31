import { AboutSection } from "@/components/Home/AboutSection";
import { CTASection } from "@/components/Home/CTASection";
import Hero from "@/components/Home/Hero";
import ProductCollection from "@/components/Home/ProductCollection";

export default function Home() {
    return (
        <div>
            <Hero />
            <div id="product-section">
                <ProductCollection />
            </div>
            <AboutSection />
            <CTASection />
        </div>
    );
}

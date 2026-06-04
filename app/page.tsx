import HeroProducts from "@/components/HeroProducts";
import TrustSection from "@/components/TrustSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import PricingSection from "@/components/PricingSection";
import StorePreview from "@/components/StorePreview";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function Home() {
  return (
    <>
      <HeroProducts />
      <TrustSection />
      <FeaturedProducts />

      {/* Scroll-animated storefront showcase */}
      <section className="overflow-hidden">
        <ContainerScroll
          titleComponent={
            <div className="mb-4">
              <p className="eyebrow">The storefront</p>
              <h2 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-black md:text-5xl">
                Every compound,
                <br />
                documented and identity-tested.
              </h2>
            </div>
          }
        >
          <StorePreview />
        </ContainerScroll>
      </section>

      <PricingSection />
    </>
  );
}

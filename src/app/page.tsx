import { FeatureSection } from "@/components/features/FeatureSection";
import { HeroSection } from "@/components/features/HeroSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeatureSection />
      {/* পরবর্তী সেকশনগুলো এখানে যোগ করা হবে */}
    </div>
  );
}
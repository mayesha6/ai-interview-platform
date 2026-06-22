import { FeatureSection } from "@/components/features/FeatureSection";
import { HeroSection } from "@/components/features/HeroSection";
import { HowItWorksSection } from "@/components/features/HowItWorksSection";
import { LivePreviewSection } from "@/components/features/LivePreviewSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
      <LivePreviewSection />
      {/* পরবর্তী সেকশনগুলো এখানে যোগ করা হবে */}
    </div>
  );
}
import { featuresData } from "@/constant/features";
import { ArrowDown } from "lucide-react";

export function FeatureSection() {
  return (
    <section id="features" className="container mx-auto px-4 my-6 md:my-16 flex flex-col items-center">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mb-16">
        <h2 className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4">
          Features
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Everything you need to prepare
        </h3>
        <p className="text-lg text-muted-foreground">
          From MCQ to behavioral - practice every interview type with AI that evaluates like a real interviewer.
        </p>
      </div>

      {/* Features Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mb-16">
  {featuresData.map((feature, index) => {
    const Icon = feature.icon;
    return (
      <div 
        key={index} 
        // অ্যানিমেশনের জন্য hover:-translate-y-2, hover:shadow-xl এবং transition-all যোগ করা হয়েছে
        className="group p-8 rounded-2xl border border-border bg-gray-900/95 hover:bg-gray-900/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col items-start cursor-pointer"
      >
        {/* আইকনে group-hover:scale-110 যোগ করা হয়েছে যেন হোভার করলে একটু বড় হয় */}
        <div className="h-12 w-12 rounded-xl bg-indigo-200 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          <Icon className="h-6 w-6" />
        </div>
        <h4 className="text-xl font-bold group-hover:text-indigo-400 text-indigo-400 transition-colors duration-300 mb-3">
          {feature.title}
        </h4>
        <p className="text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>
    );
  })}
</div>

    </section>
  );
}
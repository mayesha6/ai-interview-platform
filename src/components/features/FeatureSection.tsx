import { featuresData } from "@/constant/features";
import { ArrowDown } from "lucide-react";

export function FeatureSection() {
  return (
    <section id="features" className="container mx-auto px-4 py-24 md:py-32 flex flex-col items-center">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mb-16">
        <h2 className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4">
          Features
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
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
              className="p-8 rounded-2xl border border-border bg-card/50 hover:bg-card transition-colors flex flex-col items-start"
            >
              <div className="h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 flex items-center justify-center mb-6">
                <Icon className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Scroll Indicator */}
      <button 
        aria-label="Scroll down"
        className="h-12 w-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
      >
        <ArrowDown className="h-5 w-5" />
      </button>

    </section>
  );
}
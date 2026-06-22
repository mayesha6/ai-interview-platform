import { howItWorksData } from "@/constant/howItWorks";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="container mx-auto px-4 my-6 md:my-16 flex flex-col items-center">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mb-16">
        <h2 className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4">
          How it works
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Four steps to interview-ready
        </h3>
        <p className="text-lg text-muted-foreground">
          Pick your role, answer AI questions, receive feedback — then track your improvement over time.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {howItWorksData.map((item, index) => (
          <div 
            key={index} 
            className="group p-8 rounded-2xl border border-border bg-gray-900/95 hover:bg-gray-900/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col items-start cursor-pointer"
          >
            {/* Step Number with slight scale animation on hover */}
            <div className="text-4xl md:text-5xl font-light text-indigo-400/80 mb-6 group-hover:scale-110 group-hover:text-indigo-400 transition-all duration-300 origin-left">
              {item.step}
            </div>
            
            {/* Title */}
            <h4 className="text-xl font-bold group-hover:text-indigo-400 text-indigo-400 transition-colors duration-300 mb-3">
              {item.title}
            </h4>
            
            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
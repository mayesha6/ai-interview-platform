import { Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { livePreviewData } from "@/constant/livePreview";

export function LivePreviewSection() {
  const { header, questionMeta, question, userAnswer, feedback } = livePreviewData;

  return (
    <section id="preview" className="container mx-auto px-4 py-24 md:py-32 flex flex-col items-center">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mb-16">
        <h2 className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4">
          Live Preview
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
          See what an interview looks like
        </h3>
        <p className="text-lg text-muted-foreground">
          A real question from a {header.role} — {header.level} level interview session.
        </p>
      </div>

      {/* Mock Interview Interface Card */}
      <div className="w-full max-w-4xl rounded-2xl border border-border bg-gray-900/60 shadow-2xl backdrop-blur-sm overflow-hidden text-left">
        
        {/* Card Top Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 border-b border-border gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <h4 className="text-lg font-bold text-foreground">
              {header.role} — {header.level}
            </h4>
            <span className="px-3 py-1 rounded-full text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
              {header.tag}
            </span>
          </div>
          <div className="flex items-center text-muted-foreground text-sm font-medium">
            <Clock className="w-4 h-4 mr-2" />
            {header.timeRemaining} remaining
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 md:p-8">
          
          {/* Question Section */}
          <div className="mb-8">
            <p className="text-sm text-muted-foreground mb-3 font-medium">
              {questionMeta}
            </p>
            <h5 className="text-xl md:text-2xl font-bold text-foreground leading-snug">
              {question}
            </h5>
          </div>

          {/* User Answer Box */}
          <div className="p-5 rounded-xl border border-border bg-black/40 text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
            {userAnswer}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-0">
              Submit answer
            </Button>
            <Button variant="outline" className="border-border hover:bg-gray-800">
              Next question
            </Button>
          </div>

          {/* Divider */}
          <hr className="border-border mb-8" />

          {/* AI Feedback Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span className="text-indigo-400 font-bold text-sm">
                {feedback.title}
              </span>
            </div>
            
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
              {feedback.text}
            </p>

            {/* Score Badges */}
            <div className="flex flex-wrap gap-3">
              {feedback.scores.map((score, index) => (
                <span 
                  key={index}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium border ${score.colorClass}`}
                >
                  {score.label}: {score.value}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
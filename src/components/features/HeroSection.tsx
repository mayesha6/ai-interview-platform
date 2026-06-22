import Link from "next/link";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button"; // buttonVariants ইমপোর্ট করতে হবে
import { heroStats } from "@/constant/hero";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center">
      
      {/* Top Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-8 border border-indigo-500/20">
        <Sparkles className="h-4 w-4" />
        <span>AI-Powered Mock Interviews</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mb-6 leading-18">
        Ace your next interview with <span className="text-indigo-500">AI feedback</span>
      </h1>

      {/* Sub-headline */}
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
        Practice real interview questions, get instant AI evaluation, detailed feedback and scores — for any role, any tech stack.
      </p>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 w-full justify-center">
        {/* Button কম্পোনেন্টের বদলে সরাসরি Link-এ buttonVariants ব্যবহার করা হয়েছে */}
        <Link 
          href="/register" 
          className="w-full sm:w-auto group border border-gray-500 border-[1px] hover:bg-gray-900 flex items-center justify-center px-4 py-2 rounded-md text-white transition-colors"
        >
          Start for free
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        
        <Link 
          href="#demo" 
          className="w-full sm:w-auto group border border-gray-500 border-[1px] hover:bg-gray-900 flex items-center justify-center px-4 py-2 rounded-md text-white transition-colors"
        >
          <Play className="mr-2 h-4 w-4" />
          Watch demo
        </Link>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-1 w-full max-w-4xl">
        {heroStats.map((stat, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-3xl font-bold text-white">
              {stat.value}
            </h3>
            <p className="text-sm font-medium text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      
    </section>
  );
}
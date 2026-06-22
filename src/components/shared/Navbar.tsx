import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Make sure Shadcn Button is installed
import { navLinks } from "@/constant/navigation";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            {/* Replace width, height and src with your actual logo dimensions */}
            <Image 
              src="/logo.png" 
              alt="InterviewAI Logo" 
              width={32} 
              height={32} 
              className="object-contain"
            />
            <span className="text-xl font-bold text-white">InterviewAI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
            Sign in
          </Button>
          <Button className="bg-white text-gray-900 hover:bg-gray-200">
            Get started
          </Button>
        </div>

        {/* Mobile Menu Toggle (Placeholder for future) */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" className="text-gray-300">
            <span className="sr-only">Open menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
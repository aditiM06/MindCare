import { useState } from "react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">
          MindCare
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-slate-600 hover:text-blue-600">
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-slate-600 hover:text-blue-600"
          >
            How It Works
          </a>

          <a
            href="#motivation"
            className="text-slate-600 hover:text-blue-600"
          >
            Motivation
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="border-t bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#motivation">Motivation</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
import React from 'react';
import { Shield, Globe, Lock } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-slate-900 font-semibold">
            <Shield className="w-6 h-6 text-indigo-600" />
            <span>SentinelSecure</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#features" className="hover:text-slate-900 transition">Features</a>
            <a href="#solutions" className="hover:text-slate-900 transition">Solutions</a>
            <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-800 hover:bg-slate-50">
              <Globe className="w-4 h-4" />
              Docs
            </button>
            <button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-1.5 text-sm font-medium hover:bg-slate-800">
              <Lock className="w-4 h-4" />
              Get Started
            </button>
          </div>
          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50" aria-label="Open menu">
            <span className="i-heroicons-bars-3"></span>
            <div className="w-5 h-[2px] bg-slate-700" />
          </button>
        </div>
      </div>
    </header>
  );
}

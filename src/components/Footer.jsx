import React from 'react';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-700">
            <Shield className="w-5 h-5 text-indigo-600" />
            <span className="font-semibold">SentinelSecure</span>
          </div>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} SentinelSecure. All rights reserved.</p>
          <div className="text-xs text-slate-500 flex items-center gap-4">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

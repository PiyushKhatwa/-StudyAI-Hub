import React from 'react';
import Link from 'next/link';
import { Compass, Home, BookOpen, Search, Code, PenTool, Layout, Clock } from 'lucide-react';

export default function NotFound() {
  const quickLinks = [
    { label: 'Study Tools', href: '/study', icon: BookOpen },
    { label: 'Research Tools', href: '/research', icon: Search },
    { label: 'Coding Tools', href: '/coding', icon: Code },
    { label: 'Writing Tools', href: '/writing', icon: PenTool },
    { label: 'Presentation Makers', href: '/presentations', icon: Layout },
    { label: 'Productivity Apps', href: '/productivity', icon: Clock }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center mx-auto mb-6">
        <Compass className="w-8 h-8" />
      </div>
      <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
        404 — Page Not Found
      </span>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
        Looking for a Student AI Tool?
      </h1>
      <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
        The page you requested may have moved or doesn’t exist. Use the shortcuts below to explore our verified student categories.
      </p>

      {/* Primary Home Action */}
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl shadow-xs transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return to StudyAI Hub Home</span>
        </Link>
      </div>

      {/* Quick Category Hub Links */}
      <div className="mt-12 pt-8 border-t border-slate-200">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
          Jump to Academic Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="p-3 bg-white rounded-xl border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 text-xs font-semibold text-slate-700 flex items-center justify-center gap-2 transition-colors shadow-2xs"
              >
                <Icon className="w-3.5 h-3.5 text-slate-400" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

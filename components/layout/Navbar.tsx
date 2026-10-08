'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sparkles, BookOpen, Search, Code, PenTool, Layout, Clock, Compass } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/study', label: 'Study', icon: BookOpen },
    { href: '/research', label: 'Research', icon: Search },
    { href: '/coding', label: 'Coding', icon: Code },
    { href: '/writing', label: 'Writing', icon: PenTool },
    { href: '/presentations', label: 'Presentations', icon: Layout },
    { href: '/productivity', label: 'Productivity', icon: Clock },
    { href: '/blog', label: 'Blog', icon: Compass },
    { href: '/about', label: 'About', icon: null }
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand Name */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-extrabold text-xl tracking-tight text-slate-900 group"
              title="StudyAI Hub Home"
            >
              <span className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-xs group-hover:bg-indigo-700 transition-colors">
                <Sparkles className="w-5 h-5 text-indigo-100" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-lg font-bold text-slate-900">StudyAI<span className="text-indigo-600">Hub</span></span>
                <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">For College Students</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/blog/best-ai-tools-for-college-students"
              className="px-3.5 py-2 text-xs font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-colors border border-indigo-200"
            >
              2026 Guide
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors shadow-xs"
            >
              Submit a Tool
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg">
          <nav className="space-y-1" aria-label="Mobile Navigation">
            <Link
              href="/"
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-lg text-base font-medium ${
                pathname === '/' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-base font-medium ${
                    isActive ? 'bg-indigo-50 text-indigo-700' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4 text-slate-400" />}
                  <span>{link.label}</span>
                </Link>
              );
            })}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/blog/best-ai-tools-for-college-students"
                onClick={closeMenu}
                className="block text-center py-2.5 px-4 rounded-xl text-sm font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200"
              >
                Read Flagship Guide
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block text-center py-2.5 px-4 rounded-xl text-sm font-semibold bg-slate-900 text-white"
              >
                Contact & Tool Submissions
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

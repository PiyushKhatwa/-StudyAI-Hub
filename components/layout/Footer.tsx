import React from 'react';
import Link from 'next/link';
import { Sparkles, Shield, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm mt-24 border-t border-slate-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      {/* Upper Footer: Academic Ethics Callout */}
      <div className="bg-slate-900 border-b border-slate-800/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm">
            <Shield className="w-5 h-5 text-indigo-400 shrink-0" aria-hidden="true" />
            <span>
              <strong>Academic Integrity Policy:</strong> StudyAI Hub advocates ethical AI use. Never submit uncredited AI-generated work as original coursework.
            </span>
          </div>
          <Link
            href="/about"
            className="text-xs text-indigo-400 hover:text-indigo-300 font-medium underline shrink-0"
          >
            Read Our Editorial Standards &rarr;
          </Link>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 text-white font-extrabold text-lg">
              <span className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </span>
              <span>StudyAI<span className="text-indigo-400">Hub</span></span>
            </Link>
            <p className="mt-3 text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              An independent academic technology resource helping college students discover, evaluate, and ethically utilize AI tools for study, research, coding, and presentations.
            </p>
            <div className="mt-4 text-xs text-slate-400">
              Zero sponsored bias • Verified pricing parameters • Built for students
            </div>
          </div>

          {/* Academic Categories */}
          <div>
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Academic Hubs
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/study" className="hover:text-white transition-colors">
                  Study & Exam Prep
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-white transition-colors">
                  Academic Research
                </Link>
              </li>
              <li>
                <Link href="/coding" className="hover:text-white transition-colors">
                  Coding & CSE
                </Link>
              </li>
              <li>
                <Link href="/writing" className="hover:text-white transition-colors">
                  Writing & Editing
                </Link>
              </li>
              <li>
                <Link href="/presentations" className="hover:text-white transition-colors">
                  Presentations & Slides
                </Link>
              </li>
              <li>
                <Link href="/productivity" className="hover:text-white transition-colors">
                  Productivity & Notes
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Guides */}
          <div>
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Student Resources
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/blog/best-ai-tools-for-college-students" className="hover:text-white transition-colors">
                  Best AI Tools (2026 Guide)
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  All Guides & Comparisons
                </Link>
              </li>
              <li>
                <Link href="/study#faq" className="hover:text-white transition-colors">
                  Active Recall FAQs
                </Link>
              </li>
              <li>
                <Link href="/research#faq" className="hover:text-white transition-colors">
                  Literature Review FAQs
                </Link>
              </li>
              <li>
                <Link href="/coding#faq" className="hover:text-white transition-colors">
                  Free Student Copilot Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional / Platform */}
          <div>
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Platform & Legal
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About StudyAI Hub
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Suggestions
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="hover:text-white transition-colors">
                  XML Sitemap
                </Link>
              </li>
              <li>
                <span className="text-slate-400 text-xs block">
                  Course: CSET489 SEO Mini-Project
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Footer Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 StudyAI Hub. Academic Mini-Project for CSET489 Search Engine Optimization.</p>
          <p className="flex items-center gap-1 text-slate-400">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for college learners everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

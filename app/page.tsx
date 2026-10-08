import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  Search, 
  Code, 
  PenTool, 
  Layout, 
  Clock, 
  CheckCircle, 
  ShieldCheck, 
  GraduationCap, 
  Compass, 
  FileCheck
} from 'lucide-react';
import { TOOLS_DATA, CATEGORIES_DATA } from '@/content/tools/tools-data';
import { ToolFilter } from '@/components/tools/ToolFilter';
import { FAQAccordion } from '@/components/ui/FAQAccordion';

export default function HomePage() {
  const categoriesList = Object.values(CATEGORIES_DATA);
  const featuredTools = TOOLS_DATA.filter((t) => ['quizlet', 'consensus', 'github-copilot', 'grammarly', 'gamma', 'notion-ai'].includes(t.id));

  const homeFaqs = [
    {
      question: 'What is the best AI tool for college students in 2026?',
      answer: 'The answer depends on your task. For literature reviews, Consensus is best. For programming, GitHub Copilot is free with a .edu email. For exam study and active recall flashcards, Knowt and Quizlet lead the field. Check our flagship comparison guide for a full breakdown.'
    },
    {
      question: 'Can college students use AI tools without violating academic integrity?',
      answer: 'Yes, when used ethically for brainstorming, clarifying difficult lecture concepts, checking grammar, or debugging syntax errors. You should never submit AI-generated text or solutions as your own original work without explicit instructor approval.'
    },
    {
      question: 'Are the AI tools listed on StudyAI Hub actually free for students?',
      answer: 'We rigorously audit every tool’s pricing. We clearly distinguish between tools that offer 100% free permanent plans, tools with .edu university discounts (like GitHub Copilot), and tools that offer only brief trial periods.'
    },
    {
      question: 'Why should I use StudyAI Hub instead of general AI directories?',
      answer: 'General AI directories list thousands of commercial tools intended for sales and corporate marketing teams. StudyAI Hub filters exclusively for real undergraduate and graduate coursework workflows.'
    }
  ];

  return (
    <div className="flex flex-col gap-16 sm:gap-20 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 pb-12 overflow-hidden border-b border-slate-200/80 bg-linear-to-b from-indigo-50/50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Trust Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/70 border border-indigo-200 text-indigo-900 text-xs sm:text-sm font-semibold mb-6 shadow-xs">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>The Independent AI Directory for Higher Education</span>
          </div>

          {/* Primary H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight sm:leading-tight">
            Find the Best <span className="text-indigo-600">AI Tools for Students</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover verified AI tools for active studying, scholarly research papers, coding, writing, and presentation decks—with honest free plan breakdowns and academic ethics advice.
          </p>

          {/* CTA Group */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#tool-discovery"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Explore All Verified Tools</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/blog/best-ai-tools-for-college-students"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <span>Read 2026 Student Guide</span>
            </Link>
          </div>

          {/* Micro Trust Stats */}
          <div className="mt-12 pt-8 border-t border-slate-200/60 max-w-3xl mx-auto grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-slate-900">24+</div>
              <div className="text-xs text-slate-500 font-medium">Audited Tools</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-600">6</div>
              <div className="text-xs text-slate-500 font-medium">Academic Hubs</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-600">100%</div>
              <div className="text-xs text-slate-500 font-medium">Free Tier Transparency</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ACADEMIC CATEGORY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" aria-labelledby="categories-heading">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 id="categories-heading" className="text-3xl font-bold tracking-tight text-slate-900">
            Browse by Academic Workflow
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Every collegiate task has unique challenges. Choose your current coursework focus below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesList.map((cat) => {
            const icons: Record<string, React.ReactNode> = {
              study: <BookOpen className="w-6 h-6 text-indigo-600" />,
              research: <Search className="w-6 h-6 text-emerald-600" />,
              coding: <Code className="w-6 h-6 text-sky-600" />,
              writing: <PenTool className="w-6 h-6 text-amber-600" />,
              presentations: <Layout className="w-6 h-6 text-purple-600" />,
              productivity: <Clock className="w-6 h-6 text-teal-600" />
            };

            return (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    {icons[cat.slug] || <Sparkles className="w-6 h-6 text-indigo-600" />}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    {cat.shortDescription}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-600 group-hover:text-indigo-800">
                  <span>Explore {cat.title} Tools</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. INTERACTIVE TOOL DISCOVERY & SEARCH */}
      <section id="tool-discovery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full scroll-mt-20" aria-labelledby="discovery-heading">
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Tool Directory
          </div>
          <h2 id="discovery-heading" className="text-3xl font-bold tracking-tight text-slate-900">
            Search & Filter AI Tools for Students
          </h2>
          <p className="text-slate-600 mt-1 text-sm sm:text-base">
            Find software tailored to your specific major, assignments, and budget restrictions.
          </p>
        </div>

        <ToolFilter initialTools={TOOLS_DATA} defaultCategory="all" showCategoryTabs={true} />
      </section>

      {/* 4. STUDENT USE CASES */}
      <section className="bg-slate-900 text-white py-16 sm:py-20" aria-labelledby="usecases-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider">Targeted Scenarios</span>
            <h2 id="usecases-heading" className="text-3xl font-bold tracking-tight mt-1">
              Built for Real College Workflows
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              How students across various degree disciplines leverage curated AI tools effectively and ethically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Engineering */}
            <div className="bg-slate-800/80 rounded-2xl border border-slate-700 p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 mb-4">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Computer Science & Engineering</h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Debug syntax errors in Python and C++, explain algorithmic big-O complexities, and utilize free GitHub Copilot credits for class software projects.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700 text-xs text-slate-400">
                Recommended: <strong className="text-white">GitHub Copilot, Cursor, Phind</strong>
              </div>
            </div>

            {/* Science & Pre-Med */}
            <div className="bg-slate-800/80 rounded-2xl border border-slate-700 p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 mb-4">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Pre-Med & Science Research</h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Synthesize medical and scientific literature across PubMed, extract study sample sizes and methodologies, and eliminate citation hallucinations.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700 text-xs text-slate-400">
                Recommended: <strong className="text-white">Consensus, Elicit, Scite.ai</strong>
              </div>
            </div>

            {/* Humanities & Business */}
            <div className="bg-slate-800/80 rounded-2xl border border-slate-700 p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-950 border border-purple-800 flex items-center justify-center text-purple-400 mb-4">
                  <Layout className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Humanities & Business Presentation</h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Transform raw seminar notes into structured presentation decks with Gamma, polish academic essay tone, and record lecture audio with Otter.ai.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700 text-xs text-slate-400">
                Recommended: <strong className="text-white">Gamma, Grammarly, Notion AI</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" aria-labelledby="how-it-works-heading">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 id="how-it-works-heading" className="text-3xl font-bold tracking-tight text-slate-900">
            How to Use StudyAI Hub
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Three straightforward steps to finding the right tool without falling into marketing traps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center shadow-xs">
            <div className="w-12 h-12 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-extrabold text-lg flex items-center justify-center mx-auto mb-4">
              1
            </div>
            <h3 className="text-lg font-bold text-slate-900">Select Your Academic Task</h3>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
              Choose from Study, Research, Coding, Writing, Presentations, or Productivity to isolate relevant software.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center shadow-xs">
            <div className="w-12 h-12 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-extrabold text-lg flex items-center justify-center mx-auto mb-4">
              2
            </div>
            <h3 className="text-lg font-bold text-slate-900">Verify Free-Tier Reality</h3>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
              Review our verified audit notes to confirm whether the software has a permanent free plan or requires a credit card.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center shadow-xs">
            <div className="w-12 h-12 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-extrabold text-lg flex items-center justify-center mx-auto mb-4">
              3
            </div>
            <h3 className="text-lg font-bold text-slate-900">Apply Academic Ethics</h3>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
              Consult our academic integrity guidelines to ensure your usage complies with university honor codes.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FEATURED GUIDE CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-linear-to-r from-indigo-900 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-indigo-800/40">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-800/70 text-indigo-200 text-xs font-semibold mb-3">
              <Compass className="w-3.5 h-3.5" /> Flagship Student Resource
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              Best AI Tools for College Students (2026 Comprehensive Evaluation)
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Read our in-depth academic review breaking down the 6 genuinely free student tools, literature review synthesis methods, and how to avoid Turnitin AI detection flags.
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs text-indigo-300 font-medium">
              <span>11 min read</span>
              <span>•</span>
              <span>Verified Pricing Matrix</span>
              <span>•</span>
              <span>Academic Integrity Framework</span>
            </div>
          </div>
          <Link
            href="/blog/best-ai-tools-for-college-students"
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm shadow-md transition-all shrink-0 flex items-center gap-2"
          >
            <span>Read Complete Guide</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 7. TRUST & EDITORIAL STANDARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" aria-labelledby="trust-heading">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" /> Editorial Integrity
            </div>
            <h2 id="trust-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Trust StudyAI Hub?
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              Most AI directory platforms profit from undisclosed vendor sponsorship fees and exaggerated affiliate reviews. StudyAI Hub follows strict academic standards:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Zero Fabricated Data</h3>
                <p className="text-slate-600 text-xs mt-1">
                  We never invent fake reviews, artificial star ratings, or fabricated user testimonials.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Verified Free-Plan Audits</h3>
                <p className="text-slate-600 text-xs mt-1">
                  Every tool card discloses actual trial limitations and highlights student .edu email discounts.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">Student-First Ethics</h3>
                <p className="text-slate-600 text-xs mt-1">
                  We refuse to promote deceptive cheating services, prioritizing tools that foster genuine learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. HOMEPAGE FAQ SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FAQAccordion items={homeFaqs} />
      </div>

      {/* 9. BOTTOM CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center py-12 px-6 rounded-2xl bg-slate-100 border border-slate-200">
          <GraduationCap className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
          <h2 className="text-2xl font-bold text-slate-900">Ready to Upgrade Your Academic Workflow?</h2>
          <p className="text-slate-600 max-w-lg mx-auto text-sm sm:text-base mt-2 mb-6">
            Explore vetted AI software built to help you learn faster, research deeper, and study smarter.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/study"
              className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors"
            >
              Start with Study Tools
            </Link>
            <Link
              href="/research"
              className="px-5 py-2.5 rounded-xl bg-white text-slate-800 font-semibold text-sm border border-slate-300 hover:bg-slate-50 transition-colors"
            >
              Academic Research Tools
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

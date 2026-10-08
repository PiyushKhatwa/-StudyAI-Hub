import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Compass, Clock, ArrowRight, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { constructMetadata } from '@/lib/seo/metadata';
import { FLAGSHIP_ARTICLE } from '@/content/articles/best-ai-tools-for-college-students';

export const metadata: Metadata = constructMetadata({
  title: 'Student AI Guides, Comparisons & Research Hub',
  description: 'Evidence-based guides, tool comparison matrices, and academic integrity advice for college students using artificial intelligence.',
  path: '/blog',
  keywords: ['AI tools for students guides', 'student AI comparisons', 'best AI tools for college students', 'academic integrity and AI']
});

export default function BlogHubPage() {
  const articles = [
    {
      ...FLAGSHIP_ARTICLE,
      isFeatured: true
    },
    {
      title: 'How to Use AI for Literature Reviews Without Hallucinations',
      slug: 'how-to-use-ai-for-literature-reviews',
      description: 'A step-by-step workflow for searching PubMed and Crossref with Consensus and Scite to find verified peer-reviewed citations.',
      author: { name: 'StudyAI Hub Research Desk' },
      publishedAt: '2026-10-05',
      category: 'Research & Literature',
      readingTime: '7 min read',
      isComingSoon: false,
      isPillar: false
    },
    {
      title: 'How to Get GitHub Copilot 100% Free with Your Student Email',
      slug: 'github-copilot-free-student-pack-guide',
      description: 'A complete walkthrough on applying to the GitHub Student Developer Pack and configuring Copilot inside VS Code.',
      author: { name: 'StudyAI Hub Engineering Team' },
      publishedAt: '2026-10-03',
      category: 'Coding & Engineering',
      readingTime: '5 min read',
      isComingSoon: false,
      isPillar: false
    },
    {
      title: 'The College Student’s Guide to AI Detection & Turnitin in 2026',
      slug: 'college-ai-detection-turnitin-guide',
      description: 'Understanding false positive rates, university honor boards, and how to safely utilize AI for grammar editing without triggering misconduct.',
      author: { name: 'StudyAI Hub Ethics Panel' },
      publishedAt: '2026-09-28',
      category: 'Academic Integrity',
      readingTime: '9 min read',
      isComingSoon: false,
      isPillar: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Blog & Student Guides', href: '/blog' }]} />

      {/* Header */}
      <div className="my-8 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
          <Compass className="w-3.5 h-3.5" /> Editorial Guides & Research
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Student AI Guides & Evaluative Research
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          In-depth, student-tested guides designed to cut through vendor marketing hype, compare actual software capabilities, and protect your academic integrity.
        </p>
      </div>

      {/* Featured Pillar Article */}
      <section className="mb-12" aria-labelledby="featured-guide-heading">
        <h2 id="featured-guide-heading" className="sr-only">Featured Article</h2>
        <div className="bg-linear-to-br from-indigo-950 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 text-white border border-indigo-900/40 shadow-xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-indigo-600 text-white">
                Featured Flagship Guide
              </span>
              <span className="text-xs font-medium text-indigo-300 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {FLAGSHIP_ARTICLE.readingTime}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
              <Link
                href={`/blog/${FLAGSHIP_ARTICLE.slug}`}
                className="hover:text-indigo-200 transition-colors"
              >
                {FLAGSHIP_ARTICLE.title}
              </Link>
            </h3>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {FLAGSHIP_ARTICLE.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-slate-800">
              <div className="text-xs text-slate-400">
                Published: <strong className="text-slate-200">{FLAGSHIP_ARTICLE.publishedAt}</strong> • Audited: <strong className="text-slate-200">{FLAGSHIP_ARTICLE.updatedAt}</strong>
              </div>
              <Link
                href={`/blog/${FLAGSHIP_ARTICLE.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs transition-colors shadow-xs"
              >
                <span>Read Full 2026 Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Guides Grid */}
      <section aria-labelledby="all-guides-heading">
        <h2 id="all-guides-heading" className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-600" />
          Recent Student Research & Walkthroughs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.slice(1).map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-md">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {article.readingTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  <Link href={`/blog/${article.slug}`} className="hover:text-indigo-600">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  {article.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400">{article.author.name}</span>
                <Link
                  href={`/blog/${article.slug}`}
                  className="font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Editorial Transparency Footer Callout */}
      <div className="mt-16 p-6 rounded-2xl bg-slate-100 border border-slate-200 text-center max-w-2xl mx-auto">
        <ShieldCheck className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
        <h3 className="font-bold text-slate-900 text-sm">Academic Editorial Disclaimer</h3>
        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
          Our guides are prepared independently by university students and academic researchers. We do not accept sponsorship payments from AI software companies to artificially inflate review positions.
        </p>
      </div>
    </div>
  );
}

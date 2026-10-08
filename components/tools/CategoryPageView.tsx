import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, GraduationCap } from 'lucide-react';
import { CategoryInfo, ToolItem } from '@/lib/types';
import { ToolCard } from '@/components/tools/ToolCard';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FAQAccordion } from '@/components/ui/FAQAccordion';

interface CategoryPageViewProps {
  category: CategoryInfo;
  tools: ToolItem[];
  relatedCategories: { title: string; href: string; description: string }[];
}

export const CategoryPageView: React.FC<CategoryPageViewProps> = ({
  category,
  tools,
  relatedCategories
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: category.title, href: `/${category.slug}` }]} />

      {/* Header & Definitional Featured Snippet Target */}
      <div className="my-8 max-w-4xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" /> Curated Academic Category
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          {category.h1}
        </h1>
        
        {/* Definition Box for Featured Snippet optimization */}
        <div className="mt-6 p-5 rounded-2xl bg-white border border-indigo-100 shadow-xs">
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            {category.fullDescription}
          </p>
        </div>
      </div>

      {/* Key Academic Use Cases */}
      <section className="mb-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs" aria-labelledby="usecases-heading">
        <h2 id="usecases-heading" className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-indigo-600" />
          Primary Student Use Cases for {category.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {category.useCases.map((useCase, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{useCase}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="mb-16" aria-labelledby="tools-list-heading">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 id="tools-list-heading" className="text-2xl font-bold text-slate-900">
              Verified {category.title} Tools ({tools.length})
            </h2>
            <p className="text-slate-500 text-sm mt-0.5">
              Audited for free plan boundaries, student usefulness, and academic reliability.
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full badge-verified hidden sm:inline-flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Human Audited
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* Related Academic Categories (Internal Linking) */}
      <section className="my-16 pt-12 border-t border-slate-200" aria-labelledby="related-heading">
        <h2 id="related-heading" className="text-xl font-bold text-slate-900 mb-6">
          Explore Related Academic Hubs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {relatedCategories.map((rel) => (
            <Link
              key={rel.href}
              href={rel.href}
              className="bg-white rounded-xl border border-slate-200 p-5 hover:border-indigo-300 hover:shadow-xs transition-all group flex flex-col justify-between"
            >
              <div>
                <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors text-sm">
                  {rel.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {rel.description}
                </p>
              </div>
              <div className="mt-4 pt-2 flex items-center text-xs font-semibold text-indigo-600">
                <span>View Tools &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* In-Depth Guide Callout */}
      <div className="my-12 p-6 rounded-2xl bg-indigo-50/70 border border-indigo-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-indigo-950">
            Need a full comparison across all categories?
          </h3>
          <p className="text-sm text-indigo-800 mt-0.5">
            Read our comprehensive 2026 student guide comparing all 24 tools with full pricing and academic integrity details.
          </p>
        </div>
        <Link
          href="/blog/best-ai-tools-for-college-students"
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl shadow-xs shrink-0 flex items-center gap-1.5 transition-colors"
        >
          <span>Read Comparison</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* FAQs */}
      <FAQAccordion
        items={category.faqs}
        title={`Frequently Asked Questions About ${category.title}`}
      />
    </div>
  );
};

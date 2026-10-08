import React from 'react';
import { ExternalLink, Check, Sparkles, GraduationCap, ShieldCheck, Tag } from 'lucide-react';
import { ToolItem } from '@/lib/types';

interface ToolCardProps {
  tool: ToolItem;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <article
      className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-indigo-200 transition-all duration-200 group"
      aria-labelledby={`tool-${tool.id}-title`}
    >
      <div>
        {/* Top Header: Category & Free Plan Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
            {tool.categoryLabel}
          </span>
          <div className="flex items-center gap-1.5">
            {tool.hasFreeTier ? (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full badge-free">
                Free Plan
              </span>
            ) : (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full badge-warning">
                Free Trial
              </span>
            )}
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full badge-verified flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              Verified
            </span>
          </div>
        </div>

        {/* Tool Name & Description */}
        <h3
          id={`tool-${tool.id}-title`}
          className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors"
        >
          {tool.name}
        </h3>
        <p className="text-slate-600 text-sm mt-2 leading-relaxed">
          {tool.description}
        </p>

        {/* Best For Highlight */}
        <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-xs leading-snug">
            <strong className="text-slate-800 font-semibold">Best for: </strong>
            <span className="text-slate-600">{tool.bestFor}</span>
          </div>
        </div>

        {/* Key Features List */}
        <div className="mt-4">
          <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
            Key Academic Features:
          </h4>
          <ul className="space-y-1.5 text-xs text-slate-600">
            {tool.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Student Usefulness Note */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-start gap-2">
          <GraduationCap className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-xs text-slate-600 italic">
            &ldquo;{tool.studentUsefulness}&rdquo;
          </p>
        </div>

        {/* Free Plan / Pricing Details */}
        <div className="mt-4 p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100/80 text-xs">
          <div className="font-semibold text-emerald-900">Free Tier Reality:</div>
          <p className="text-emerald-800 mt-0.5">{tool.freePlan}</p>
          <div className="text-[11px] text-slate-500 mt-1">Standard: {tool.pricing}</div>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tool.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md"
            >
              <Tag className="w-2.5 h-2.5 text-slate-400" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer: Last verified & Outbound Link */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-slate-400 text-[11px]">
          Audited: {tool.lastVerified}
        </span>
        <a
          href={tool.officialUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="inline-flex items-center gap-1.5 font-semibold text-indigo-600 hover:text-indigo-800 hover:underline transition-colors"
          aria-label={`Visit official site for ${tool.name} (opens in new tab)`}
        >
          <span>Official Site</span>
          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
};

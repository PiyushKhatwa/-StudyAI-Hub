'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, CheckCircle2, RotateCcw } from 'lucide-react';
import { ToolItem, ToolCategory } from '@/lib/types';
import { ToolCard } from '@/components/tools/ToolCard';

interface ToolFilterProps {
  initialTools: ToolItem[];
  defaultCategory?: ToolCategory | 'all';
  showCategoryTabs?: boolean;
}

export const ToolFilter: React.FC<ToolFilterProps> = ({
  initialTools,
  defaultCategory = 'all',
  showCategoryTabs = true
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory | 'all'>(defaultCategory);
  const [freeOnly, setFreeOnly] = useState(false);

  const categories = [
    { id: 'all', label: 'All Tools' },
    { id: 'study', label: 'Study & Exams' },
    { id: 'research', label: 'Research Papers' },
    { id: 'coding', label: 'Coding & CSE' },
    { id: 'writing', label: 'Writing & Tone' },
    { id: 'presentations', label: 'Presentations' },
    { id: 'productivity', label: 'Productivity' }
  ];

  const filteredTools = useMemo(() => {
    return initialTools.filter((tool) => {
      // Category filter
      if (selectedCategory !== 'all' && tool.category !== selectedCategory) {
        return false;
      }
      // Free only filter
      if (freeOnly && !tool.hasFreeTier) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = tool.name.toLowerCase().includes(query);
        const matchesDesc = tool.description.toLowerCase().includes(query);
        const matchesBestFor = tool.bestFor.toLowerCase().includes(query);
        const matchesTags = tool.tags.some((tag) => tag.toLowerCase().includes(query));
        return matchesName || matchesDesc || matchesBestFor || matchesTags;
      }
      return true;
    });
  }, [initialTools, selectedCategory, freeOnly, searchQuery]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory(defaultCategory);
    setFreeOnly(false);
  };

  const hasActiveFilters = searchQuery !== '' || (defaultCategory === 'all' && selectedCategory !== 'all') || freeOnly;

  return (
    <div className="w-full">
      {/* Search & Control Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1">
            <label htmlFor="tool-search-input" className="sr-only">
              Search AI tools by name, task, or subject
            </label>
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
            <input
              id="tool-search-input"
              type="search"
              placeholder="Search tools by task (e.g. 'flashcards', 'literature review', 'python debugging')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:border-indigo-600 focus:outline-none transition-colors"
            />
          </div>

          {/* Quick Filters */}
          <div className="flex items-center gap-4 shrink-0 flex-wrap">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={freeOnly}
                onChange={(e) => setFreeOnly(e.target.checked)}
                className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
              />
              <span>100% Free Tier Only</span>
            </label>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 text-xs text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer py-1 px-2.5 rounded-md hover:bg-indigo-50 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        {showCategoryTabs && (
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 overflow-x-auto pb-1 text-sm scrollbar-none">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Filter:
            </span>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id as ToolCategory | 'all')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Results Count Bar */}
      <div className="flex items-center justify-between mb-6 px-1">
        <p className="text-sm font-medium text-slate-600">
          Showing <span className="font-bold text-slate-900">{filteredTools.length}</span> verified tools
          {selectedCategory !== 'all' && (
            <span> in <span className="text-indigo-600 capitalize">{selectedCategory}</span></span>
          )}
          {freeOnly && <span> (Free tier only)</span>}
        </p>
        <span className="text-xs text-slate-400 hidden sm:inline-flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> All links audited for student relevance
        </span>
      </div>

      {/* Tools Grid */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 max-w-lg mx-auto">
          <Filter className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-800">No tools match your criteria</h3>
          <p className="text-sm text-slate-500 mt-1 mb-6">
            Try adjusting your search terms or clearing the &ldquo;100% Free Tier Only&rdquo; filter.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" /> Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
};

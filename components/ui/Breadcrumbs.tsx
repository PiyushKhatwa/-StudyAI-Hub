import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { JsonLd, getBreadcrumbSchema } from '@/components/seo/JsonLd';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const schemaItems = [
    { name: 'Home', url: 'https://studyaihub.com' },
    ...items.map(i => ({ name: i.label, url: `https://studyaihub.com${i.href}` }))
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="py-3 text-sm text-slate-500">
        <ol className="flex items-center flex-wrap gap-1.5 list-none m-0 p-0">
          <li className="flex items-center">
            <Link
              href="/"
              className="flex items-center hover:text-indigo-600 transition-colors"
              title="Return to homepage"
            >
              <Home className="w-4 h-4 mr-1 text-slate-400" />
              <span>Home</span>
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.href} className="flex items-center">
                <ChevronRight className="w-3.5 h-3.5 mx-1 text-slate-300" aria-hidden="true" />
                {isLast ? (
                  <span className="font-medium text-slate-900" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

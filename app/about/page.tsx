import React from 'react';
import { Metadata } from 'next';
import { ShieldCheck, Heart, Sparkles, CheckCircle2, GraduationCap, Users } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'About StudyAI Hub — Mission, Methodology & Editorial Ethics',
  description: 'Learn about StudyAI Hub’s student-first editorial philosophy, anti-fake-review policy, and rigorous software verification methodology.',
  path: '/about',
  keywords: ['About StudyAI Hub', 'student AI editorial standards', 'educational AI verification']
});

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'About Us', href: '/about' }]} />

      <header className="my-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" /> Our Mission & Standards
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Empowering College Students with Honest, Verified AI Technology
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          StudyAI Hub was created to solve a glaring problem in today’s software landscape: the flood of uncurated, sponsored, and deceptive AI recommendations that waste students’ time and budget.
        </p>
      </header>

      <div className="space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed">
        {/* The Problem We Address */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
          <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-indigo-600" />
            Why StudyAI Hub Exists
          </h2>
          <p>
            When generative AI exploded into mainstream education, thousands of applications were launched overnight. For college students, however, navigating this space has been frustrating:
          </p>
          <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-600">
            <li>Directories list thousands of enterprise tools built for corporate sales reps, completely ignoring undergraduate coursework needs.</li>
            <li>Tools advertise &ldquo;Free&rdquo; access, only to reveal a strict 3-prompt limit or demand a credit card during onboarding.</li>
            <li>Bloggers promote unverified auto-essay generators without warning students about university AI detection policies and academic misconduct hearings.</li>
          </ul>
        </section>

        {/* Our Strict Editorial Charter */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            Our Non-Negotiable Editorial Charter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> No Fabricated Ratings or Reviews
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                We never invent fake star ratings, fictitious user reviews, or artificial testimonials. Every tool is evaluated on documented features.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Transparent Pricing Audits
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                We test free tiers to report true limitations (e.g. daily query caps) and highlight genuine student discounts (.edu email perks).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Pro-Academic Integrity
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                We do not promote dishonest essay-writing ghost services. We advocate for tools that enhance conceptual comprehension, active recall, and research efficiency.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Independence from Vendors
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                We do not sell editorial rankings to software vendors. Outbound links use standard non-endorsing rel attributes.
              </p>
            </div>
          </div>
        </section>

        {/* Academic Coursework Context */}
        <section className="bg-slate-100 p-6 sm:p-8 rounded-2xl border border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-600" />
            About This Project
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            StudyAI Hub is developed as part of the <strong>CSET489 Search Engine Optimization</strong> mini-project. It serves as an end-to-end laboratory demonstrating modern technical SEO, topical authority architecture, search intent satisfaction, and ethical educational publishing.
          </p>
        </section>
      </div>
    </div>
  );
}

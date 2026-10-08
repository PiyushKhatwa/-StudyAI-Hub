'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    toolName: '',
    toolUrl: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In Milestone I, simulate local submission without backend dependency
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Contact & Suggestions', href: '/contact' }]} />

      <header className="my-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
          <MessageSquare className="w-3.5 h-3.5" /> Get in Touch
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Suggest an AI Tool or Send Feedback
        </h1>
        <p className="mt-3 text-base text-slate-600 leading-relaxed">
          Know an AI tool with a generous student free tier? Want to report an outdated price? Let our student editorial team know.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* Contact Info Sidebar */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <Mail className="w-6 h-6 text-indigo-600 mb-2" />
            <h3 className="font-bold text-slate-900 text-sm">Direct Editorial Inquiries</h3>
            <p className="text-xs text-slate-500 mt-1">
              For research inquiries, student submissions, or coursework discussions:
            </p>
            <p className="text-xs font-semibold text-indigo-600 mt-2">
              contact@studyaihub.com
            </p>
          </div>

          <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-2">
            <div className="font-bold text-slate-900">Submission Requirements:</div>
            <ul className="list-disc pl-4 space-y-1">
              <li>Must have real academic applicability for college students.</li>
              <li>Must have a transparent free tier or verified student discount.</li>
              <li>No deceptive plagiarism or ghostwriting tools accepted.</li>
            </ul>
          </div>
        </div>

        {/* Contact & Tool Suggestion Form */}
        <div className="md:col-span-2">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-slate-900">Thank You for Your Submission!</h3>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                  Our student audit team will evaluate the tool’s features, verify its free tier limits, and review it for inclusion in the StudyAI Hub directory.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', toolName: '', toolUrl: '', message: '' });
                  }}
                  className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold hover:bg-indigo-700 transition-colors cursor-pointer"
                >
                  Submit Another Tool
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Chen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-indigo-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address (.edu preferred)
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="student@university.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-indigo-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="tool-name" className="block text-xs font-semibold text-slate-700 mb-1">
                      AI Tool Name
                    </label>
                    <input
                      id="tool-name"
                      type="text"
                      placeholder="e.g. Consensus"
                      value={formData.toolName}
                      onChange={(e) => setFormData({ ...formData, toolName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-indigo-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="tool-url" className="block text-xs font-semibold text-slate-700 mb-1">
                      Official Tool Website
                    </label>
                    <input
                      id="tool-url"
                      type="url"
                      placeholder="https://example.com"
                      value={formData.toolUrl}
                      onChange={(e) => setFormData({ ...formData, toolUrl: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-indigo-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1">
                    Why is this useful for students? (Notes on free tier limits)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Describe how students use this tool, what degree major it helps with, and what free plan features it offers..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-indigo-600 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Suggestion for Audit</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

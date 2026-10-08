import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  ExternalLink, 
  AlertTriangle, 
  BookOpen, 
  Check, 
  X, 
  GraduationCap 
} from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { JsonLd, getArticleSchema } from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { FLAGSHIP_ARTICLE } from '@/content/articles/best-ai-tools-for-college-students';

export const metadata: Metadata = constructMetadata({
  title: FLAGSHIP_ARTICLE.title,
  description: FLAGSHIP_ARTICLE.description,
  path: `/blog/${FLAGSHIP_ARTICLE.slug}`,
  keywords: [
    'best AI tools for college students',
    'free AI tools for students',
    'best free AI tools for college students',
    'academic AI tools',
    'student AI ethical guidelines'
  ]
});

export default function BestAiToolsForCollegeStudentsPage() {
  const articleSchema = getArticleSchema({
    title: FLAGSHIP_ARTICLE.title,
    description: FLAGSHIP_ARTICLE.description,
    url: `https://studyaihub.com/blog/${FLAGSHIP_ARTICLE.slug}`,
    publishedAt: FLAGSHIP_ARTICLE.publishedAt,
    updatedAt: FLAGSHIP_ARTICLE.updatedAt,
    authorName: FLAGSHIP_ARTICLE.author.name
  });

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12" itemScope itemType="https://schema.org/Article">
      <JsonLd data={articleSchema} />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Blog', href: '/blog' },
          { label: 'Best AI Tools for Students (2026)', href: `/blog/${FLAGSHIP_ARTICLE.slug}` }
        ]}
      />

      {/* Header */}
      <header className="my-8 max-w-4xl">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-indigo-100 text-indigo-800">
            {FLAGSHIP_ARTICLE.category}
          </span>
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {FLAGSHIP_ARTICLE.readingTime}
          </span>
          <span className="text-xs text-slate-400">•</span>
          <span className="text-xs text-slate-500">
            Published: <time dateTime={FLAGSHIP_ARTICLE.publishedAt}>{FLAGSHIP_ARTICLE.publishedAt}</time>
          </span>
          <span className="text-xs text-slate-400">•</span>
          <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Audited: {FLAGSHIP_ARTICLE.updatedAt}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight" itemProp="headline">
          {FLAGSHIP_ARTICLE.title}
        </h1>

        <p className="mt-4 text-lg text-slate-600 leading-relaxed" itemProp="description">
          {FLAGSHIP_ARTICLE.description}
        </p>

        {/* Author Bio Box */}
        <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
            SAH
          </div>
          <div className="text-xs">
            <div className="font-bold text-slate-900">{FLAGSHIP_ARTICLE.author.name}</div>
            <div className="text-slate-500">{FLAGSHIP_ARTICLE.author.role}</div>
          </div>
        </div>
      </header>

      {/* Table of Contents Box */}
      <nav aria-label="Table of contents" className="my-10 p-6 rounded-2xl bg-indigo-50/60 border border-indigo-100">
        <h2 className="text-base font-bold text-indigo-950 flex items-center gap-2 mb-4">
          <BookOpen className="w-4 h-4 text-indigo-600" />
          Table of Contents
        </h2>
        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-indigo-900 list-none m-0 p-0">
          {FLAGSHIP_ARTICLE.tableOfContents.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="hover:text-indigo-600 hover:underline flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* MAIN ARTICLE BODY */}
      <div className="prose prose-slate max-w-none text-slate-800 text-sm sm:text-base leading-relaxed space-y-12">
        {/* SECTION 1 */}
        <section id="why-students-need-curation" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
            1. Why General AI Lists Fail College Students
          </h2>
          <p className="mt-4">
            If you search the web for &ldquo;best AI tools,&rdquo; you will encounter lists featuring 40+ applications. However, upon inspection, 80% of those applications are enterprise software built for sales outreach, social media ad copying, or corporate marketing pipelines. These tools carry $30 to $80 monthly subscription tags and have virtually zero applicability to college coursework.
          </p>
          <p className="mt-3">
            Undergraduate and graduate students operate under completely different constraints:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2 text-slate-700">
            <li><strong>Zero Subscription Budget:</strong> Students cannot justify recurring paywalls for speculative utility.</li>
            <li><strong>Strict Factual Precision:</strong> In academic term papers and scientific reports, LLM hallucinations are catastrophic.</li>
            <li><strong>Severe Disciplinary Risk:</strong> Submitting uncredited AI-generated prose can trigger academic integrity hearings or course failure.</li>
          </ul>
          <p className="mt-3">
            This guide filters out marketing noise to review the software that actually improves learning, accelerates literature reviews, and simplifies technical coding.
          </p>
        </section>

        {/* SECTION 2 */}
        <section id="top-free-ai-tools" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
            2. The 6 Genuinely Free AI Tools for Students
          </h2>
          <p className="mt-4">
            A major pain point identified in our search landscape audit is the pervasive abuse of the label &ldquo;Freemium.&rdquo; Many services advertise free accounts that expire after three prompts or demand credit card details upon registration.
          </p>
          <p className="mt-3">
            The following six tools provide legitimate, unrestricted free access for college learners:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 not-prose">
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
              <span className="badge-free text-xs px-2 py-0.5 rounded-full font-semibold">100% Free with .edu</span>
              <h3 className="font-bold text-slate-900 mt-2">GitHub Copilot</h3>
              <p className="text-xs text-slate-600 mt-1">
                Full-featured AI pair programmer, free for actively enrolled university students via the GitHub Student Developer Pack.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
              <span className="badge-free text-xs px-2 py-0.5 rounded-full font-semibold">100% Free Web App</span>
              <h3 className="font-bold text-slate-900 mt-2">Knowt</h3>
              <p className="text-xs text-slate-600 mt-1">
                A complete Quizlet alternative offering unlimited AI flashcards, practice quizzes, and lecture note imports without paywalls.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
              <span className="badge-free text-xs px-2 py-0.5 rounded-full font-semibold">Free Forever Individual</span>
              <h3 className="font-bold text-slate-900 mt-2">Codeium (Windsurf)</h3>
              <p className="text-xs text-slate-600 mt-1">
                Unlimited AI code completion across 70+ languages with zero required credit cards or .edu email verification.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
              <span className="badge-free text-xs px-2 py-0.5 rounded-full font-semibold">100% Free Web App</span>
              <h3 className="font-bold text-slate-900 mt-2">Goblin.tools</h3>
              <p className="text-xs text-slate-600 mt-1">
                Neurodivergent-friendly task breaker that divides massive term paper deadlines into manageable micro-steps.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
              <span className="badge-free text-xs px-2 py-0.5 rounded-full font-semibold">Free Open Source</span>
              <h3 className="font-bold text-slate-900 mt-2">Anki Desktop</h3>
              <p className="text-xs text-slate-600 mt-1">
                The gold standard in spaced repetition memory retention, completely free and open source on desktop and Android.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
              <span className="badge-free text-xs px-2 py-0.5 rounded-full font-semibold">100% Free with .edu</span>
              <h3 className="font-bold text-slate-900 mt-2">Notion Plus</h3>
              <p className="text-xs text-slate-600 mt-1">
                Unlimited pages, blocks, and file uploads for verified students with an official academic email address.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section id="research-literature-tools" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
            3. Academic Research & Paper Writing Tools
          </h2>
          <p className="mt-4">
            Undergraduates writing term papers and postgraduates completing theses face a major threat from general LLMs: <strong>citation hallucination</strong>. Standard conversational models are probabilistic; when asked for five papers on a specialized topic, they often generate realistic authors, journal titles, and volume numbers that do not exist.
          </p>
          <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 not-prose">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-amber-900">
              <strong>Academic Warning:</strong> Submitting a research paper with fabricated or hallucinated citations is considered academic dishonesty by university disciplinary committees. Always verify citations using dedicated academic search tools.
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mt-6">Top Verified Research Platforms:</h3>
          <ul className="space-y-4 mt-3">
            <li>
              <strong><Link href="/research" className="text-indigo-600 hover:underline">Consensus (consensus.app)</Link>:</strong> Queries over 200 million peer-reviewed scientific papers. The &ldquo;Consensus Meter&rdquo; synthesizes whether the prevailing scientific literature agrees, disagrees, or is inconclusive on a research question, linking directly to DOIs.
            </li>
            <li>
              <strong><Link href="/research" className="text-indigo-600 hover:underline">Elicit (elicit.com)</Link>:</strong> Extracts structured columns from literature reviews (sample sizes, participant demographics, methodologies, and outcomes) into a clear comparison table.
            </li>
            <li>
              <strong><Link href="/research" className="text-indigo-600 hover:underline">Scite.ai (scite.ai)</Link>:</strong> Uses Smart Citations to indicate whether subsequent studies supported, mentioned, or contrasted a paper’s findings.
            </li>
          </ul>
        </section>

        {/* SECTION 4 */}
        <section id="coding-engineering-tools" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
            4. Coding Assistants & Developer Packs
          </h2>
          <p className="mt-4">
            For Computer Science and Engineering students, AI assistance has shifted from toy snippets to integrated development environments. However, blindly copy-pasting code creates knowledge gaps that become glaring during whiteboard interviews and proctored coding exams.
          </p>
          <p className="mt-3">
            <strong>How to Use AI Coding Tools Responsibly:</strong>
          </p>
          <ol className="list-decimal pl-5 space-y-1.5 mt-2 text-slate-700">
            <li><strong>Explain, don’t copy:</strong> Paste confusing runtime errors into Copilot Chat or Phind and ask: <em>&ldquo;Explain why this segmentation fault occurs and which memory boundary was exceeded.&rdquo;</em></li>
            <li><strong>Analyze Big-O Complexity:</strong> Request algorithmic efficiency comparisons: <em>&ldquo;Compare the time complexity of this recursive DFS against an iterative BFS.&rdquo;</em></li>
            <li><strong>Generate Unit Tests:</strong> Use AI to write edge-case test suites (empty arrays, negative integers, null pointers) to validate your own logic.</li>
          </ol>
        </section>

        {/* SECTION 5 */}
        <section id="study-exam-prep-tools" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
            5. Active Recall & Exam Preparation
          </h2>
          <p className="mt-4">
            Cognitive psychology consistently proves that passive re-reading of textbooks produces poor long-term retention compared to <strong>active recall</strong> and <strong>spaced repetition</strong>.
          </p>
          <p className="mt-3">
            AI study tools excel at automating the laborious creation of active recall materials:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2 text-slate-700">
            <li><strong>Quizlet Magic Notes:</strong> Converts lecture recordings and bullet notes into interactive practice flashcard sets and mock exams.</li>
            <li><strong>Knowt:</strong> Allows students to import entire Quizlet decks for free and generate randomized multiple-choice tests matching professor exam formats.</li>
            <li><strong>Anki:</strong> Employs the SuperMemo SM-2 algorithm to show flashcards right before your brain forgets them, ideal for pre-med anatomy and law terminology.</li>
          </ul>
        </section>

        {/* SECTION 6 */}
        <section id="presentations-slide-makers" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
            6. AI Presentation & Deck Generators
          </h2>
          <p className="mt-4">
            Creating presentations for seminar defenses and group capstone presentations often takes 8+ hours of tedious slide alignment and formatting.
          </p>
          <p className="mt-3">
            Tools like <strong>Gamma App</strong> and <strong>SlidesAI</strong> allow students to input their research paper abstract and generate a coherent 10-slide outline complete with visual cards and data callouts. Students should treat these generated decks as a design foundation, subsequently inserting verified graphs, citations, and specific lab data manually.
          </p>
        </section>

        {/* SECTION 7 */}
        <section id="academic-integrity-rules" className="scroll-mt-24 bg-rose-50/50 p-6 rounded-2xl border border-rose-200/80 not-prose">
          <div className="flex items-center gap-2 text-rose-900 font-bold text-lg mb-2">
            <ShieldCheck className="w-5 h-5 text-rose-600" />
            7. The Academic Integrity Survival Guide
          </div>
          <p className="text-xs sm:text-sm text-rose-950 leading-relaxed">
            Every college campus has published updated academic misconduct policies addressing AI software. Violations can lead to zero grades on assignments, course failure, or suspension. Follow these four non-negotiable rules:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-white p-3.5 rounded-xl border border-rose-100 text-xs">
              <div className="font-bold text-emerald-800 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" /> PERMITTED: Ethical Use
              </div>
              <ul className="mt-2 space-y-1 text-slate-600 list-disc pl-4">
                <li>Grammar and punctuation proofreading</li>
                <li>Brainstorming essay topic angles</li>
                <li>Explaining complex textbook concepts</li>
                <li>Debugging syntax in coursework code</li>
              </ul>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-rose-100 text-xs">
              <div className="font-bold text-rose-800 flex items-center gap-1.5">
                <X className="w-4 h-4 text-rose-600" /> PROHIBITED: Academic Misconduct
              </div>
              <ul className="mt-2 space-y-1 text-slate-600 list-disc pl-4">
                <li>Submitting AI-written paragraphs as your own</li>
                <li>Using AI during proctored exams</li>
                <li>Citing hallucinated, non-existent papers</li>
                <li>Paraphrasing uncited work with QuillBot</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 8: FULL COMPARISON TABLE */}
        <section id="summary-comparison-table" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
            8. Full Student Feature & Pricing Matrix
          </h2>
          <p className="mt-4 mb-6">
            A transparent overview of the leading student AI software, their actual free-tier boundaries, and best use cases:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs not-prose">
            <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 text-slate-700 font-semibold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3 px-4">Tool Name</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Best Student Use Case</th>
                  <th className="py-3 px-4">Free Plan Status</th>
                  <th className="py-3 px-4">Student .edu Perk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white text-slate-700">
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">GitHub Copilot</td>
                  <td className="py-3 px-4">Coding</td>
                  <td className="py-3 px-4">In-editor code completion</td>
                  <td className="py-3 px-4"><span className="badge-free px-2 py-0.5 rounded-full text-xs font-semibold">100% Free</span></td>
                  <td className="py-3 px-4 text-emerald-700 font-medium">Free with Student Pack</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Knowt</td>
                  <td className="py-3 px-4">Study</td>
                  <td className="py-3 px-4">Free Quizlet alternative & quiz maker</td>
                  <td className="py-3 px-4"><span className="badge-free px-2 py-0.5 rounded-full text-xs font-semibold">100% Free</span></td>
                  <td className="py-3 px-4 text-slate-400">Not required</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Consensus</td>
                  <td className="py-3 px-4">Research</td>
                  <td className="py-3 px-4">Peer-reviewed literature search</td>
                  <td className="py-3 px-4"><span className="badge-free px-2 py-0.5 rounded-full text-xs font-semibold">Generous Free</span></td>
                  <td className="py-3 px-4 text-indigo-700">Student discount on Pro</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Grammarly</td>
                  <td className="py-3 px-4">Writing</td>
                  <td className="py-3 px-4">Grammar & tone proofreading</td>
                  <td className="py-3 px-4"><span className="badge-free px-2 py-0.5 rounded-full text-xs font-semibold">Essential Free</span></td>
                  <td className="py-3 px-4 text-indigo-700">Campus-wide license often available</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Gamma App</td>
                  <td className="py-3 px-4">Presentations</td>
                  <td className="py-3 px-4">Rapid slide deck generation</td>
                  <td className="py-3 px-4"><span className="badge-warning px-2 py-0.5 rounded-full text-xs font-semibold">400 Credits</span></td>
                  <td className="py-3 px-4 text-slate-400">Standard tiers</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Notion</td>
                  <td className="py-3 px-4">Productivity</td>
                  <td className="py-3 px-4">Semester course wiki & note hub</td>
                  <td className="py-3 px-4"><span className="badge-free px-2 py-0.5 rounded-full text-xs font-semibold">100% Free</span></td>
                  <td className="py-3 px-4 text-emerald-700 font-medium">Free Plus plan with .edu</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 9: AUTHORITATIVE CITATIONS */}
        <section className="pt-8 border-t border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-3">Authoritative Sources & Reading:</h2>
          <ul className="space-y-2 text-xs text-slate-600">
            {FLAGSHIP_ARTICLE.sources.map((source, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <ExternalLink className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="hover:text-indigo-600 underline"
                >
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* FAQs */}
      <div id="faq" className="mt-16 scroll-mt-24">
        <FAQAccordion items={FLAGSHIP_ARTICLE.faqs} title="Frequently Asked Questions" />
      </div>

      {/* Author Bio Card at End */}
      <footer className="mt-16 pt-8 border-t border-slate-200">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-indigo-600 text-white font-extrabold flex items-center justify-center shrink-0 text-lg">
            SAH
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base">{FLAGSHIP_ARTICLE.author.name}</h3>
            <p className="text-xs text-indigo-600 font-medium">{FLAGSHIP_ARTICLE.author.role}</p>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              {FLAGSHIP_ARTICLE.author.bio}
            </p>
          </div>
        </div>
      </footer>
    </article>
  );
}

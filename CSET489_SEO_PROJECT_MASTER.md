# CSET489 SEO MINI-PROJECT --- MASTER PROJECT SPECIFICATION

**Project:** AI Tools & Productivity for College Students\
**Working Brand:** StudyAI Hub\
**Course:** CSET489 --- Search Engine Optimization\
**Current Priority:** Milestone I\
**Development Environment:** Antigravity\
**Primary Development Stack:** Next.js + TypeScript + Tailwind CSS\
**Project Status:** Development first; deployment later

------------------------------------------------------------------------

# 0. IMPORTANT --- SOURCE OF TRUTH

This document is the master specification for the project.

Any developer/AI agent working on this repository must read this file
completely before making architectural or implementation decisions.

The official CSET489 Mini-Project Handbook is the authority for grading
requirements. This file translates those requirements into an actionable
development plan.

## Non-negotiable rules

1.  Do not fabricate keyword metrics, rankings, backlinks, analytics,
    deployment evidence, or other research evidence.
2.  Do not claim a task is completed unless it has actually been
    completed and can be demonstrated.
3.  Do not create fake reviews, fake ratings, fake testimonials, fake
    users, fake statistics, or fake search-engine results.
4.  Do not keyword-stuff content.
5.  Do not mass-produce thin pages simply to target keywords.
6.  Do not copy competitor content.
7.  Do not purchase/build spam backlinks.
8.  Do not implement cloaking, doorway pages, hidden text, or other
    manipulative SEO techniques.
9.  Preserve a clear separation between:
    -   verified data,
    -   project assumptions,
    -   research still requiring verification.
10. When information is unavailable, label it as `TO VERIFY` rather than
    inventing it.
11. Keep the project maintainable and deployment-ready.
12. Current work is focused on Milestone I. Do not begin production
    deployment, GSC, GA4, backlink implementation, or other Milestone II
    activities unless explicitly instructed.

------------------------------------------------------------------------

# 1. OFFICIAL COURSE PROJECT REQUIREMENTS

The CSET489 project is a 40-mark continuous-assessment mini-project.

## Overall assessment

-   Milestone I: 20 marks
-   Milestone II: 20 marks
-   Total mini-project: 40 marks

The project objective is to build a live SEO-optimized website and
execute an end-to-end SEO campaign covering niche selection, competitor
analysis, keyword research, technical deployment, on-page optimization,
content, backlinks, analytics, and auditing.

------------------------------------------------------------------------

# 2. CURRENT SCOPE --- MILESTONE I

## We are currently doing

### Research and strategy

-   Niche identification
-   Target audience definition
-   SEO problem statement
-   Keyword research
-   Search-intent mapping
-   Long-tail and semantic keyword research
-   SERP analysis
-   Competitor analysis
-   Content-gap analysis
-   Keyword-to-page mapping
-   Site hierarchy
-   URL taxonomy
-   SEO strategy
-   Chronological implementation roadmap

### Website development

-   Homepage
-   Category pages
-   Blog structure
-   About page
-   Contact page
-   Tool discovery/filtering
-   Responsive UI
-   Internal linking
-   SEO-ready metadata
-   Semantic HTML
-   Technical SEO foundations
-   Structured-data foundation
-   Sitemap/robots architecture
-   Documentation system

### Deployment readiness

-   Production-ready build
-   Environment configuration
-   Deployment documentation
-   VPS-ready architecture

## Do NOT perform yet unless explicitly instructed

-   Domain purchase
-   Production DNS configuration
-   Cloudflare production setup
-   VPS provisioning
-   Production SSL setup
-   WordPress deployment
-   Google Search Console verification
-   GA4 production tracking
-   External backlink campaign
-   Final Milestone II audit
-   UpdraftPlus backup

These will be handled in the appropriate later stage.

------------------------------------------------------------------------

# 3. PROJECT NICHE

## Primary niche

**AI Tools & Productivity for College Students**

This is NOT a generic AI news website.

The website must remain focused on helping students discover and
understand AI tools for academic and productivity use cases.

## Core audience

-   College students
-   University students
-   Engineering students
-   CSE/IT students
-   Students preparing for exams
-   Students doing assignments
-   Students working on projects
-   Students conducting academic research
-   Students creating presentations
-   Students learning programming
-   Students looking for productivity tools

## Core problem

Students have access to a rapidly growing number of AI tools, but it can
be difficult to determine:

-   which tool is suitable for a particular academic task,
-   whether the tool has a useful free plan,
-   what the tool actually does,
-   how it compares with alternatives,
-   what its limitations are,
-   and how students can use it effectively.

## Core solution

Create a student-focused AI resource platform that helps users:

1.  Discover relevant AI tools.
2.  Filter tools by use case.
3.  Understand what each tool is best for.
4.  Compare useful options.
5.  Read practical student-focused guides.
6.  Find AI tools for specific academic tasks.

------------------------------------------------------------------------

# 4. WORKING BRAND

## Name

**StudyAI Hub**

This is a working project name.

Do not purchase or register a domain based on this name without explicit
approval.

## Working tagline

**Discover the right AI tools for smarter studying.**

The branding must be easy to change later.

------------------------------------------------------------------------

# 5. PROJECT POSITIONING

The website should feel like a real student-focused technology product.

It should NOT look like:

-   a generic college assignment,
-   a copied blog,
-   an AI-generated content farm,
-   a generic SaaS template,
-   a news website,
-   or a collection of random AI tools.

The core positioning is:

> A practical discovery and educational platform helping college
> students find the right AI tools for study, research, coding, writing,
> presentations, and productivity.

------------------------------------------------------------------------

# 6. WEBSITE INFORMATION ARCHITECTURE

Initial top-level structure:

``` text
/
├── /study
├── /research
├── /coding
├── /writing
├── /presentations
├── /productivity
├── /blog
├── /about
└── /contact
```

Future tool/detail structure can use:

``` text
/tools/[tool-slug]
```

Future article structure:

``` text
/blog/[article-slug]
```

## Navigation

Primary navigation:

-   Home
-   Study
-   Research
-   Coding
-   Writing
-   Presentations
-   Productivity
-   Blog
-   About

Contact can be linked through the footer or About section.

------------------------------------------------------------------------

# 7. CORE WEBSITE FEATURES

## 7.1 Homepage

The homepage must immediately explain:

-   What the site is.
-   Who it is for.
-   What problem it solves.
-   What categories are available.

### Required sections

1.  Navbar
2.  Hero
3.  Primary CTA
4.  Secondary CTA
5.  Category grid
6.  Featured AI tools
7.  Student use cases
8.  How it works
9.  Featured guides
10. Trust/editorial section
11. FAQ
12. Footer

### Suggested H1

**Find the Best AI Tools for Students**

Do not force this exact wording if keyword research indicates a better
primary target.

------------------------------------------------------------------------

# 8. CATEGORY PAGES

Create:

-   `/study`
-   `/research`
-   `/coding`
-   `/writing`
-   `/presentations`
-   `/productivity`

Each category page should include:

-   unique title
-   unique meta description
-   one clear H1
-   short introduction
-   relevant tools
-   useful descriptions
-   related use cases
-   internal links
-   related articles
-   FAQ where useful
-   breadcrumb structure
-   CTA

Each category should target a distinct search intent to reduce keyword
cannibalization.

------------------------------------------------------------------------

# 9. TOOL DISCOVERY EXPERIENCE

Create a reusable tool-card system.

## ToolCard fields

-   Tool name
-   Category
-   Short description
-   Best for
-   Key features
-   Pricing status
-   Free-plan indicator
-   Student usefulness
-   Tags
-   Official website
-   Optional rating field only if verified

Never invent pricing or ratings.

If data is not verified, use a configurable `TO VERIFY` state rather
than false information.

## Filtering

Users should eventually be able to filter by:

-   category
-   use case
-   free/paid
-   student relevance
-   tool type

Keep the initial implementation lightweight.

Do not build an unnecessarily complex backend just for filtering.

------------------------------------------------------------------------

# 10. BLOG SYSTEM

Create a scalable blog architecture.

Each article should support:

-   title
-   slug
-   excerpt
-   author
-   publication date
-   updated date
-   category
-   featured image
-   reading time
-   table of contents
-   related articles
-   internal links
-   authoritative external sources
-   FAQ where useful
-   Article structured data

## Initial article

Create at least one substantial article for demonstration.

Candidate:

**Best AI Tools for College Students**

Alternative:

**Best Free AI Tools for College Students**

The final title must be chosen after keyword/SERP research.

Do not publish a title merely because it sounds SEO-friendly.

------------------------------------------------------------------------

# 11. INITIAL CONTENT TOPICS

## Study

-   AI study tools
-   AI exam preparation tools
-   AI tutors
-   AI flashcards
-   AI tools for studying PDFs/notes

## Research

-   AI research tools
-   AI literature review tools
-   AI citation tools
-   AI tools for research papers

## Coding

-   AI coding tools
-   AI debugging tools
-   AI code explanation tools
-   AI programming tutors
-   AI tools for CSE students

## Writing

-   AI writing tools
-   grammar tools
-   paraphrasing tools
-   editing tools
-   summarization tools

## Presentations

-   AI presentation makers
-   AI PPT tools
-   AI slide generators
-   AI design tools

## Productivity

-   AI note-taking tools
-   AI lecture transcription tools
-   AI planners
-   AI productivity assistants

------------------------------------------------------------------------

# 12. KEYWORD RESEARCH REQUIREMENTS

Milestone I requires:

-   10--15 primary/focus and secondary keywords
-   Search volume
-   Keyword difficulty
-   Search intent
-   5--10 long-tail/semantic terms
-   Competition/relevance information for the long-tail/semantic set

Primary targets should preferably have KD below 20 where possible.

## Initial candidate keywords

These are candidates only. They are NOT verified metrics:

-   AI tools for students
-   best AI tools for students
-   free AI tools for students
-   AI tools for college students
-   AI tools for studying
-   AI study tools
-   AI tools for research
-   AI tools for coding students
-   AI tools for presentations
-   AI tools for note taking
-   AI tools for engineering students
-   AI tools for assignments
-   best free AI tools for students
-   AI tools for exam preparation
-   AI productivity tools for students

## Keyword research table

Create:

  ---------------------------------------------------------------------------------------------
  Keyword   Type   Search     Volume       KD   Relevance Target   Priority   Source   Status
                   Intent                                 URL                          
  --------- ------ -------- -------- -------- ----------- -------- ---------- -------- --------

  ---------------------------------------------------------------------------------------------

Possible `Status` values:

-   Verified
-   To Verify
-   Candidate

Never fill Volume/KD with invented numbers.

------------------------------------------------------------------------

# 13. SEARCH INTENT

Use the official four categories required by the project:

-   Informational
-   Commercial
-   Transactional
-   Navigational

For every keyword, explain the reasoning.

Example:

``` text
AI tools for students
→ Informational

best AI tools for students
→ Informational / Commercial investigation

AI presentation maker
→ Commercial investigation

ChatGPT
→ Navigational
```

Do not automatically assign the same intent to every keyword.

------------------------------------------------------------------------

# 14. LONG-TAIL AND SEMANTIC KEYWORDS

Create 5--10 long-tail/semantic keyword candidates.

Potential examples:

-   best free AI tools for college students
-   AI tools for engineering students
-   best AI tools for studying
-   AI tools for students to make presentations
-   AI tools for research papers
-   free AI coding tools for students
-   AI tools for studying from PDF
-   best AI note-taking tools for students

Verify these through the selected research tools.

------------------------------------------------------------------------

# 15. SERP ANALYSIS

Milestone I requires a deep SERP analysis.

For target keywords inspect:

-   top-ranking URLs
-   page types
-   title patterns
-   H1/H2 structure
-   content depth
-   featured snippets
-   People Also Ask
-   related searches
-   videos
-   images
-   comparison tables
-   FAQ sections
-   freshness
-   internal-linking patterns
-   user intent satisfaction

## SERP evidence table

Create:

  ------------------------------------------------------------------------------------------
  Keyword       Result URL    Page   Title     Content   PAA    Featured   Strength   Gap
              Position        Type   Pattern   Format           Snippet               
  --------- ---------- ------ ------ --------- --------- ------ ---------- ---------- ------

  ------------------------------------------------------------------------------------------

Never fabricate positions.

If live SERP evidence has not been collected, mark the row `TO VERIFY`.

------------------------------------------------------------------------

# 16. COMPETITOR ANALYSIS

Milestone I requires analysis of two direct competitors.

Choose competitors that genuinely target similar users/search intent.

For each competitor record:

-   website
-   target audience
-   niche
-   categories
-   content strategy
-   top keyword opportunities
-   backlinks
-   site structure
-   UX
-   strengths
-   weaknesses
-   content gaps
-   opportunities for StudyAI Hub

## Competitor table

  Factor                   Competitor 1   Competitor 2   StudyAI Hub Opportunity
  ------------------------ -------------- -------------- -------------------------
  Target audience                                        
  Main niche                                             
  Site structure                                         
  Content depth                                          
  Keyword opportunities                                  
  Backlink profile                                       
  UX                                                     
  Content gaps                                           
  Student-specific value                                 
  Opportunities                                          

Do not invent backlink counts or ranking data.

Use `TO VERIFY` if a professional SEO tool is required.

------------------------------------------------------------------------

# 17. CONTENT GAP ANALYSIS

Look for opportunities such as:

-   outdated content
-   weak student-specific guidance
-   missing free-plan explanations
-   poor tool comparisons
-   missing use-case pages
-   poor internal linking
-   weak content structure
-   missing long-tail coverage
-   unclear tool limitations
-   lack of practical examples

Our goal:

**Better usefulness + student-specific intent + better structure +
original analysis.**

Do not copy competitors.

------------------------------------------------------------------------

# 18. KEYWORD-TO-PAGE MAPPING

Every important keyword should have a clear target page.

## Required columns

  -------------------------------------------------------------------------------------
  Keyword   Intent   Keyword   Target   Page     Content   Priority   Cannibalization
                     Type      URL      Type     Type                 Risk
  --------- -------- --------- -------- -------- --------- ---------- -----------------

  -------------------------------------------------------------------------------------

Example:

``` text
AI tools for students
→ /
→ Homepage

AI study tools
→ /study
→ Category

AI research tools
→ /research
→ Category

AI coding tools for students
→ /coding
→ Category

best AI tools for college students
→ /blog/best-ai-tools-for-college-students
→ Blog
```

Avoid assigning the same primary keyword to multiple pages unless there
is a clear strategic reason.

------------------------------------------------------------------------

# 19. URL TAXONOMY

Rules:

-   lowercase
-   hyphen-separated
-   descriptive
-   short where practical
-   no unnecessary parameters
-   no meaningless IDs
-   no keyword stuffing
-   no unnecessary dates

Good:

``` text
/study
/research
/coding
/blog/best-ai-tools-for-college-students
```

Avoid:

``` text
/page?id=123
/blog/post-123
/category1/toolstuff
/best-ai-tools-for-students-2026-top-50-final
```

------------------------------------------------------------------------

# 20. SEO ROADMAP

Create a chronological roadmap.

## Phase 1 --- Research

-   niche
-   audience
-   problem
-   keywords
-   search intent
-   SERP
-   competitors

## Phase 2 --- Architecture

-   information architecture
-   URL taxonomy
-   keyword mapping
-   content plan

## Phase 3 --- Development

-   UI
-   content
-   internal linking
-   metadata
-   technical foundations

## Phase 4 --- Deployment

Later: - domain - Cloudflare - DNS - VPS - SSL - production deployment

## Phase 5 --- Milestone II

Later: - full technical/on-page SEO - schema validation - performance
optimization - content expansion - backlinks - GSC - GA4 - audit -
corrective actions - backup - final viva

------------------------------------------------------------------------

# 21. TECH STACK

## Preferred stack

-   Next.js
-   TypeScript
-   Tailwind CSS

Use the App Router unless an existing project architecture provides a
strong reason otherwise.

## Supporting technologies

-   semantic HTML
-   CSS/Tailwind
-   lightweight client-side interactions
-   Markdown/MDX or a simple content data layer for articles
-   JSON-LD for structured data
-   static/server-rendered content wherever practical

## Engineering principles

-   TypeScript strictness where practical
-   reusable components
-   clean separation of data and presentation
-   no unnecessary dependencies
-   no giant UI libraries unless justified
-   no unnecessary client components
-   avoid unnecessary API calls
-   optimize assets
-   keep the build simple and deployable

If an existing repository already has a suitable framework, inspect it
first and avoid destructive rewrites.

------------------------------------------------------------------------

# 22. RECOMMENDED PROJECT STRUCTURE

Adapt this to the chosen framework:

``` text
/
├── app/
│   ├── page.tsx
│   ├── study/
│   ├── research/
│   ├── coding/
│   ├── writing/
│   ├── presentations/
│   ├── productivity/
│   ├── blog/
│   ├── about/
│   └── contact/
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── cards/
│   ├── tools/
│   ├── blog/
│   ├── seo/
│   └── ui/
│
├── content/
│   ├── articles/
│   └── tools/
│
├── lib/
│   ├── seo/
│   ├── content/
│   └── utils/
│
├── public/
│   ├── images/
│   ├── icons/
│   └── favicon/
│
├── docs/
│   └── milestone-1/
│
├── research/
│   ├── keywords.csv
│   ├── search-intent.md
│   ├── serp-analysis.md
│   ├── competitor-analysis.md
│   ├── content-gap.md
│   └── keyword-page-map.md
│
├── .env.example
├── robots.txt
├── sitemap configuration
├── README.md
└── CSET489_SEO_PROJECT_MASTER.md
```

------------------------------------------------------------------------

# 23. COMPONENT SYSTEM

Create reusable components.

Required candidates:

-   Navbar
-   Footer
-   MobileNav
-   Button
-   Badge
-   Card
-   ToolCard
-   CategoryCard
-   ArticleCard
-   SearchBox
-   FilterPanel
-   Breadcrumbs
-   FAQ
-   SectionHeader
-   CTA
-   ComparisonTable
-   TableOfContents
-   AuthorInfo

Do not duplicate components unnecessarily.

------------------------------------------------------------------------

# 24. VISUAL DESIGN

The design should feel:

-   modern
-   trustworthy
-   academic but not boring
-   technology-oriented
-   clean
-   premium
-   accessible
-   fast

Avoid:

-   excessive gradients
-   excessive animation
-   glassmorphism everywhere
-   huge decorative elements
-   autoplay video
-   unnecessary particle effects
-   visually noisy cards

Use consistent:

-   typography
-   spacing
-   border radius
-   shadows
-   buttons
-   card styles
-   focus states

The site must work well on desktop, tablet, and mobile.

------------------------------------------------------------------------

# 25. HOMEPAGE CONTENT STRUCTURE

Suggested order:

``` text
Navbar
↓
Hero
↓
Search / Discover Tools
↓
Categories
↓
Featured Tools
↓
Student Use Cases
↓
How It Works
↓
Featured Guides
↓
Why StudyAI Hub
↓
FAQ
↓
CTA
↓
Footer
```

------------------------------------------------------------------------

# 26. TOOL DATA MODEL

Use a structured data model.

Example fields:

``` text
id
name
slug
category
description
shortDescription
bestFor
features[]
pricing
freePlan
studentUsefulness
tags[]
officialUrl
logo
lastVerified
```

`lastVerified` should be used for information that may change.

Do not store fabricated data.

------------------------------------------------------------------------

# 27. ARTICLE DATA MODEL

Suggested fields:

``` text
title
slug
description
author
publishedAt
updatedAt
category
featuredImage
readingTime
content
keywords[]
sources[]
faq[]
```

------------------------------------------------------------------------

# 28. ON-PAGE SEO FOUNDATION

Implement from the beginning:

-   unique title tags
-   unique meta descriptions
-   canonical URL support
-   clean URLs
-   one primary H1
-   logical H2/H3 structure
-   semantic HTML
-   descriptive anchor text
-   internal links
-   image alt text
-   Open Graph metadata
-   social metadata
-   robots.txt
-   sitemap support
-   favicon
-   correct language attribute

Do not stuff keywords.

Do not duplicate metadata.

------------------------------------------------------------------------

# 29. STRUCTURED DATA FOUNDATION

Prepare valid JSON-LD.

Possible schema types:

-   Organization
-   WebSite
-   BreadcrumbList
-   Article

Use only schema that accurately represents the page.

Do not create:

-   fake review schema
-   fake rating schema
-   fake FAQ claims
-   misleading structured data

Schema should later be validated using appropriate Google/schema
validation tools.

------------------------------------------------------------------------

# 30. TECHNICAL SEO FOUNDATION

The site must be:

-   crawlable
-   indexable when deployed
-   semantic
-   responsive
-   fast
-   accessible
-   linkable
-   canonicalizable
-   sitemap-ready
-   robots-ready
-   deployment-ready

Create a custom 404 page.

Avoid accidental `noindex` on production pages.

During development, do not accidentally publish a development
environment as the canonical production site.

------------------------------------------------------------------------

# 31. INTERNAL LINKING

Use deliberate internal linking.

Homepage: - category pages - key guides

Category pages: - articles - related categories - tools

Articles: - relevant categories - related articles - relevant tools

Use natural descriptive anchor text.

Avoid repetitive exact-match anchors.

------------------------------------------------------------------------

# 32. PERFORMANCE REQUIREMENTS

Target excellent performance.

Priorities:

-   small JS bundles
-   optimized images
-   modern image formats
-   responsive images
-   lazy loading where appropriate
-   minimal third-party scripts
-   efficient fonts
-   no giant assets
-   avoid unnecessary animations
-   server/static rendering where appropriate

Track future Core Web Vitals:

-   LCP
-   INP
-   CLS

Do not optimize only for a Lighthouse score at the expense of usability.

------------------------------------------------------------------------

# 33. ACCESSIBILITY

Implement:

-   semantic HTML
-   keyboard navigation
-   visible focus states
-   accessible buttons
-   accessible forms
-   labels
-   alt text
-   sufficient contrast
-   logical heading hierarchy
-   responsive text
-   ARIA only when necessary

------------------------------------------------------------------------

# 34. CONTENT QUALITY

Content must be:

-   original
-   useful
-   accurate
-   readable
-   student-focused
-   search-intent aligned
-   well structured
-   evidence-based where claims require evidence

Avoid:

-   keyword stuffing
-   repetitive filler
-   copied competitor content
-   generic AI filler
-   unsupported statistics
-   fake testimonials
-   fake reviews
-   fake authority
-   fake rankings
-   mass thin pages

AI can assist development and drafting, but the final site should
provide real value and original organization/analysis.

------------------------------------------------------------------------

# 35. TRUST AND TRANSPARENCY

Create:

-   About page
-   clear project/site purpose
-   author information for articles where applicable
-   source references where appropriate
-   last-updated information where useful
-   transparent pricing information
-   distinction between free and paid tools

Do not claim independent testing if the project has not actually tested
a tool.

------------------------------------------------------------------------

# 36. MILESTONE I DOCUMENTATION

Create:

``` text
docs/
└── milestone-1/
    ├── 01-niche-and-problem.md
    ├── 02-keyword-research.md
    ├── 03-search-intent.md
    ├── 04-serp-analysis.md
    ├── 05-competitor-analysis.md
    ├── 06-content-gap.md
    ├── 07-keyword-page-mapping.md
    ├── 08-site-architecture.md
    ├── 09-seo-roadmap.md
    ├── 10-deployment-readiness.md
    ├── 11-evidence-checklist.md
    └── 12-viva-preparation.md
```

------------------------------------------------------------------------

# 37. MILESTONE I REPORT STRUCTURE

Prepare a report that can later become the submitted PDF/DOCX.

Recommended structure:

1.  Cover Page
2.  Project Title
3.  Team Members
4.  Executive Summary
5.  Niche Identification
6.  Target Audience Personas
7.  SEO Problem Statement
8.  Keyword Research
9.  Search Intent Mapping
10. Long-tail and Semantic Keywords
11. SERP Analysis
12. Competitor Analysis
13. Content Gap Analysis
14. Keyword-to-Page Mapping
15. Website Architecture
16. URL Taxonomy
17. SEO Strategy
18. Implementation Roadmap
19. Website Screenshots
20. Technical Architecture
21. Deployment Readiness
22. Evidence Checklist
23. Conclusion
24. Future Work / Milestone II

------------------------------------------------------------------------

# 38. EVIDENCE CHECKLIST

## Niche

-   [ ] Niche selected
-   [ ] Target audience defined
-   [ ] Personas defined
-   [ ] Problem statement written
-   [ ] Supporting data sources identified

## Keyword research

-   [ ] 10--15 primary/secondary keywords
-   [ ] Search volume
-   [ ] KD
-   [ ] Search intent
-   [ ] 5--10 long-tail/semantic terms
-   [ ] Competition/relevance
-   [ ] Sources recorded
-   [ ] Unverified values clearly marked

## SERP

-   [ ] Target keywords selected
-   [ ] Top results captured
-   [ ] Top URLs recorded
-   [ ] Featured snippets checked
-   [ ] PAA checked
-   [ ] Content structures analyzed
-   [ ] Ranking opportunities documented

## Competitors

-   [ ] Competitor 1
-   [ ] Competitor 2
-   [ ] Keyword opportunities
-   [ ] Content strategy
-   [ ] Backlink evidence where available
-   [ ] Content gaps
-   [ ] Opportunities for our site

## Architecture

-   [ ] Site hierarchy
-   [ ] URL taxonomy
-   [ ] Keyword-page mapping
-   [ ] Cannibalization review
-   [ ] Internal linking strategy

## Website

-   [ ] Homepage
-   [ ] Study
-   [ ] Research
-   [ ] Coding
-   [ ] Writing
-   [ ] Presentations
-   [ ] Productivity
-   [ ] Blog
-   [ ] About
-   [ ] Contact
-   [ ] Responsive UI
-   [ ] Tool discovery

## SEO foundation

-   [ ] Titles
-   [ ] Meta descriptions
-   [ ] Canonicals
-   [ ] H1/H2/H3
-   [ ] Internal links
-   [ ] Alt text
-   [ ] Open Graph
-   [ ] Sitemap
-   [ ] Robots.txt
-   [ ] JSON-LD foundation

## Deployment --- later

-   [ ] Domain
-   [ ] Cloudflare
-   [ ] DNS
-   [ ] SSL
-   [ ] VPS
-   [ ] Production deployment
-   [ ] Evidence

------------------------------------------------------------------------

# 39. MILESTONE I STATUS TRACKER

Update this section whenever work progresses.

``` text
Niche:
[x] Selected

Target audience:
[x] Defined

Problem statement:
[x] Draft
[x] Verified with supporting data

Keyword research:
[x] Candidate keywords
[x] Verified 10–15 keyword dataset
[x] Long-tail/semantic dataset

SERP:
[x] Research framework
[x] Evidence collected
[x] Analysis complete

Competitors:
[x] Competitor 1
[x] Competitor 2
[x] Gap analysis

Architecture:
[x] Site hierarchy
[x] URL taxonomy
[x] Keyword-page map

Website:
[x] Homepage
[x] Categories
[x] Blog
[x] About
[x] Contact
[x] Tool discovery
[x] Responsive design

SEO foundation:
[x] Metadata
[x] Canonicals
[x] Sitemap
[x] Robots
[x] JSON-LD
[x] Internal links

Documentation:
[x] Report (Drafted in docs/milestone-1/REPORT_MILESTONE_1.md)
[ ] Screenshots (To capture during live preview/viva)
[x] Evidence checklist (docs/milestone-1/11-evidence-checklist.md)
[x] Viva preparation (docs/milestone-1/12-viva-preparation.md)

Deployment:
[ ] NOT STARTED (Reserved for Milestone II)
```

------------------------------------------------------------------------

# 40. MILESTONE II --- FUTURE REQUIREMENTS

Do not execute these now, but preserve architectural support.

## Technical/on-page SEO

Later implement:

-   Rank Math or Yoast where WordPress deployment is used
-   title optimization
-   meta descriptions
-   OpenGraph
-   heading hierarchy
-   breadcrumbs
-   SEO-friendly permalinks
-   XML sitemap
-   Schema/JSON-LD

## Performance/security

Later:

-   SSL
-   caching
-   image compression
-   WebP
-   PageSpeed testing
-   GTmetrix
-   before/after performance evidence

## Content

Later:

-   original keyword-targeted content
-   Homepage
-   About Us
-   at least one in-depth search-intent-optimized article
-   keyword alignment
-   internal links
-   authoritative outbound references

## Backlinks

Later:

-   instructor-designated external domains
-   high-value niche-relevant content
-   contextual do-follow backlink
-   natural anchor text
-   live URL proof
-   indexed proof

## Analytics

Later:

-   Google Search Console
-   DNS/HTML verification
-   XML sitemap submission
-   GA4
-   real-time tracking
-   events
-   engagement

## SEO audit

Later:

-   Screaming Frog / Ahrefs Webmaster Tools / SEMrush Site Audit
-   crawl errors
-   broken links
-   redirect chains
-   missing alt attributes
-   thin content
-   technical issues
-   on-page issues

## Corrective actions

Later:

-   document issues
-   implement fixes
-   measure impact

## Backup

Later:

-   UpdraftPlus
-   full site/database backup
-   `.zip`
-   Google Drive
-   accessible link

## Final viva

Later:

-   live site
-   analytics
-   schema
-   backlink verification
-   SEO decisions
-   critical reflections

------------------------------------------------------------------------

# 41. DEVELOPMENT WORKFLOW FOR ANTIGRAVITY

Before coding:

1.  Read this file completely.
2.  Inspect the existing repository.
3.  Inspect package.json and framework.
4.  Identify existing useful components.
5.  Do not delete useful work.
6.  Create an implementation plan.
7.  Confirm architecture.
8.  Implement design system.
9.  Implement shared components.
10. Implement pages.
11. Implement content data.
12. Implement SEO foundation.
13. Implement research/documentation structure.
14. Run lint/build/type checks.
15. Fix errors.
16. Test responsive layouts.
17. Review SEO.
18. Review accessibility.
19. Review performance.
20. Update project status.

------------------------------------------------------------------------

# 42. DEFINITION OF DONE FOR TODAY

Milestone I development work is considered ready for review when:

-   the site runs locally,
-   homepage is polished,
-   all six core categories exist,
-   blog architecture exists,
-   About and Contact exist,
-   tool discovery exists,
-   responsive design works,
-   internal linking exists,
-   SEO metadata foundation exists,
-   sitemap/robots architecture exists,
-   structured-data foundation exists,
-   at least one substantial article exists,
-   keyword research documentation exists,
-   search-intent mapping exists,
-   SERP analysis framework exists,
-   two competitor-analysis slots are documented,
-   content-gap analysis exists,
-   keyword-to-page mapping exists,
-   site architecture is documented,
-   SEO roadmap exists,
-   evidence checklist exists,
-   no fabricated research/deployment data exists,
-   project builds successfully.

------------------------------------------------------------------------

# 43. VIVA PREPARATION

Prepare concise answers for:

1.  Why did you choose this niche?
2.  Who is your target audience?
3.  What SEO problem are you solving?
4.  What is search intent?
5.  Why did you choose these keywords?
6.  What is keyword difficulty?
7.  Why prioritize lower-KD keywords?
8.  What are long-tail keywords?
9.  What are semantic/LSI terms?
10. What is SERP analysis?
11. What did you learn from competitors?
12. What is a content gap?
13. What is keyword cannibalization?
14. Why did you choose this website architecture?
15. Why are URLs structured this way?
16. What is internal linking?
17. What is technical SEO?
18. What is a canonical URL?
19. Why do you need a sitemap?
20. What will you implement in Milestone II?
21. Why would you use Cloudflare?
22. Why use a VPS?
23. How will Google discover the website?
24. How will you measure SEO performance later?
25. What evidence proves your SEO decisions?

Answers should be technically accurate but easy for a CSE student to
explain.

------------------------------------------------------------------------

# 44. DEPLOYMENT PLAN --- LATER

The planned production architecture is:

``` text
Custom Domain
      ↓
Cloudflare DNS
      ↓
Cloudflare CDN / Security
      ↓
VPS
      ↓
Web Server
      ↓
Application / WordPress as required
      ↓
SSL / HTTPS
      ↓
Production Website
```

The exact VPS/server configuration must be selected later based on the
final application architecture and course requirements.

Do not claim deployment until it is actually working.

------------------------------------------------------------------------

# 45. REPORT EVIDENCE RULE

Every important claim in the final academic report should have one of:

-   screenshot,
-   table,
-   tool output,
-   URL,
-   research source,
-   project artifact,
-   or clearly labeled project assumption.

Never use a fabricated screenshot.

Never fabricate a keyword-tool screenshot.

Never fabricate a ranking screenshot.

Never fabricate a Cloudflare/VPS screenshot.

Never fabricate analytics.

------------------------------------------------------------------------

# 46. ANTIGRAVITY OPERATING INSTRUCTION

When this file is loaded into the project, the AI developer must:

1.  Treat this file as the project specification.
2.  Work in small, verifiable steps.
3.  Inspect before modifying.
4.  Explain major architectural changes briefly.
5.  Avoid unnecessary dependencies.
6.  Never fabricate research.
7.  Never mark unchecked requirements as complete.
8.  Keep a clear TODO/status list.
9.  Run tests/build after meaningful changes.
10. Preserve deployment portability.
11. Ask for clarification only when a required decision cannot
    reasonably be made from this specification.
12. Prefer simple, robust solutions over over-engineering.

------------------------------------------------------------------------

# 47. FIRST COMMAND / FIRST ACTION

When starting work:

> Read `CSET489_SEO_PROJECT_MASTER.md` completely, inspect the existing
> repository, identify the current framework and dependencies, then
> create a concise implementation plan before modifying files.

After the plan:

> Begin implementing the Milestone I website and SEO foundation. Do not
> start production deployment or Milestone II.

------------------------------------------------------------------------

# 48. FINAL PRINCIPLE

The project must demonstrate:

**Research → Strategy → Architecture → Implementation → Evidence →
Measurement**

The website is not the entire SEO project.

The website is the platform on which the SEO strategy will be executed.

The goal is to produce a technically sound, useful, student-focused
website that can later be deployed and expanded into the complete
CSET489 end-to-end SEO campaign.

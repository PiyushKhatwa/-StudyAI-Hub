import { ToolItem, CategoryInfo } from '@/lib/types';

export const CATEGORIES_DATA: Record<string, CategoryInfo> = {
  study: {
    slug: 'study',
    title: 'Study & Exam Prep',
    h1: 'Best AI Tools for Studying & Exam Preparation',
    metaTitle: 'AI Tools for Studying: Flashcards & Exam Prep | StudyAI Hub',
    metaDescription: 'Discover verified AI study tools for college students. Turn lecture slides and PDFs into flashcards, generate practice quizzes, and master active recall.',
    shortDescription: 'Active recall, spaced repetition, PDF lecture study, and automated quiz generation.',
    fullDescription: 'College exams require more than passive reading. These verified AI study tools help students convert dense textbook chapters, lecture slides, and syllabus notes into active recall flashcards, practice quizzes, and interactive study companions.',
    iconName: 'BookOpen',
    useCases: [
      'Generating active recall flashcards from 100-page slide decks',
      'Creating multiple-choice practice exams based on professor notes',
      'Asking targeted questions to complex textbook PDFs',
      'Implementing scientifically backed spaced repetition schedules'
    ],
    faqs: [
      {
        question: 'What is the best free AI tool for studying from PDFs?',
        answer: 'Knowt and Mindgrasp are among the top options. Knowt offers an unrestricted free tier that lets students import Quizlet decks or upload lecture slides to generate flashcards and practice quizzes.'
      },
      {
        question: 'Can AI study tools replace reading the textbook?',
        answer: 'No. AI tools should be used for active recall testing and synthesizing dense paragraphs, not as a complete replacement for primary course reading materials.'
      },
      {
        question: 'Are AI flashcards better than manual flashcards?',
        answer: 'AI speeds up the initial creation phase by 80%, but reviewing and refining the cards manually reinforces memory retention and deep conceptual understanding.'
      }
    ]
  },
  research: {
    slug: 'research',
    title: 'Academic Research',
    h1: 'Verified AI Tools for Academic Research & Papers',
    metaTitle: 'AI Tools for Academic Research & Literature Reviews | StudyAI Hub',
    metaDescription: 'Find vetted AI research tools for university students. Extract peer-reviewed claims, synthesize literature reviews, and verify real DOI citations.',
    shortDescription: 'Scholarly paper search, literature review synthesis, and verified DOI citation checks.',
    fullDescription: 'Undergraduate and postgraduate research requires verifiable academic rigor. Unlike general chatbots that can hallucinate citations, these academic AI tools query indexed scholarly databases (PubMed, arXiv, Crossref) to extract peer-reviewed evidence.',
    iconName: 'Search',
    useCases: [
      'Extracting scientific consensus across 20+ peer-reviewed papers',
      'Conducting structured literature reviews for thesis projects',
      'Verifying if a paper has been supported or contradicted by subsequent research',
      'Generating accurate APA, MLA, and IEEE citation bibliographies'
    ],
    faqs: [
      {
        question: 'Which AI tool is safest for academic research papers?',
        answer: 'Consensus and Scite.ai are specifically designed for academic rigor. They only source from peer-reviewed databases and provide direct DOI links to the original studies.'
      },
      {
        question: 'Why shouldn’t I use standard ChatGPT for paper citations?',
        answer: 'Standard generative LLMs often invent realistic-looking paper titles, authors, and DOIs that do not exist in academic indexes (hallucinations). Dedicated research tools query indexed scientific databases.'
      },
      {
        question: 'Can I use AI to write my literature review?',
        answer: 'AI should be used to discover papers, extract methodologies, and summarize findings. The synthesis, critical evaluation, and writing must be your own to comply with university academic honesty standards.'
      }
    ]
  },
  coding: {
    slug: 'coding',
    title: 'Coding & Engineering',
    h1: 'AI Coding Tools for Computer Science & Engineering Students',
    metaTitle: 'AI Coding Tools for Students: Free IDEs & Assistants | StudyAI Hub',
    metaDescription: 'Explore the best AI coding tools for CSE and engineering students. Debug code, understand complex algorithms, and access free student developer packs.',
    shortDescription: 'IDE assistants, algorithmic syntax debugging, and student developer pack benefits.',
    fullDescription: 'Programming coursework can be daunting when stuck on obscure compiler bugs or complex algorithmic logic. These AI tools act as 24/7 coding tutors—explaining syntax errors, generating boilerplate code, and helping students learn concepts.',
    iconName: 'Code',
    useCases: [
      'Explaining cryptic C++, Java, or Python runtime errors',
      'Refactoring messy coursework code for better time and space complexity',
      'Learning new web frameworks or libraries with interactive code explanations',
      'Accessing premium AI coding features for free via the GitHub Student Developer Pack'
    ],
    faqs: [
      {
        question: 'Is GitHub Copilot really free for college students?',
        answer: 'Yes. College students can obtain GitHub Copilot completely free by applying to the GitHub Student Developer Pack using their official university (.edu) email address or student ID.'
      },
      {
        question: 'Will using AI for coding assignments get me flagged for plagiarism?',
        answer: 'Most CS departments treat raw AI-generated submissions as academic misconduct under MOSS or automated code similarity checkers. Use AI to understand logic and debug errors, but write the actual solution yourself.'
      },
      {
        question: 'What is the best alternative to Copilot if I don’t have a student email?',
        answer: 'Codeium (Windsurf) offers a generous individual tier with rapid autocomplete and in-editor chat that is free forever for personal use.'
      }
    ]
  },
  writing: {
    slug: 'writing',
    title: 'Writing & Editing',
    h1: 'Ethical AI Writing & Grammar Tools for College Students',
    metaTitle: 'Ethical AI Writing Tools for College Students | StudyAI Hub',
    metaDescription: 'Discover ethical AI writing, grammar, and paraphrasing tools for university students. Improve academic tone and cite sources while respecting honor codes.',
    shortDescription: 'Academic tone editing, grammar perfection, thesis outlining, and citation formatting.',
    fullDescription: 'Clear academic writing is critical for essays, lab reports, and dissertations. These tools help students refine grammar, clarify confusing sentence structures, and eliminate passive voice while upholding academic integrity guidelines.',
    iconName: 'PenTool',
    useCases: [
      'Proofreading academic essays for grammatical precision and academic tone',
      'Restructuring convoluted arguments into crisp, logical prose',
      'Detecting accidental uncredited phrasing before submission',
      'Formatting references in standard university bibliographic formats'
    ],
    faqs: [
      {
        question: 'What is the difference between ethical AI editing and plagiarism?',
        answer: 'Ethical AI editing uses tools for spell checking, grammar suggestions, and clarity enhancements on your own original ideas. Plagiarism occurs when an AI generates arguments or text wholesale and you submit it as your own.'
      },
      {
        question: 'Does Grammarly count as AI cheating on Turnitin?',
        answer: 'Standard Grammarly spelling and grammar suggestions do not trigger AI detection penalties at most universities. However, using generative text rewriting features may be flagged depending on your department’s specific syllabus.'
      },
      {
        question: 'Which tool is best for improving vocabulary in lab reports?',
        answer: 'Wordtune and Hemingway Editor excel at highlighting dense, passive sentences and suggesting concise, authoritative phrasing.'
      }
    ]
  },
  presentations: {
    slug: 'presentations',
    title: 'Presentations & Slides',
    h1: 'AI Presentation & Slide Makers for College Projects',
    metaTitle: 'AI Presentation Makers for College Students | StudyAI Hub',
    metaDescription: 'Build polished presentation decks in minutes. Discover AI tools that transform lecture notes and research outlines into professional slide decks.',
    shortDescription: 'Slide deck generation, visual layout styling, and rapid project deck creation.',
    fullDescription: 'Group projects and capstone presentations require visually engaging slide decks, but designing slides from scratch eats up hours of study time. These AI presentation tools transform raw outlines into clean, well-formatted slides.',
    iconName: 'Layout',
    useCases: [
      'Converting structured research outlines into multi-slide presentations',
      'Designing clean slide layouts with consistent typography and color palettes',
      'Generating visual diagrams and speaker notes for group defense presentations',
      'Exporting directly to PowerPoint (.pptx) or Google Slides for collaboration'
    ],
    faqs: [
      {
        question: 'Can Gamma generate PowerPoint presentations for free?',
        answer: 'Yes. Gamma offers a free starter tier with credits upon signup that allow students to generate and export presentation decks directly to PPTX and PDF.'
      },
      {
        question: 'Are AI presentation makers suitable for technical engineering defenses?',
        answer: 'They provide an excellent visual foundation, but students must always manually verify technical formulas, code snippets, and data graphs for accuracy before presenting.'
      },
      {
        question: 'Can I import Google Slides directly into these tools?',
        answer: 'Tools like SlidesAI work directly inside Google Slides as an add-on, converting pasted text into formatted slides without leaving the Google ecosystem.'
      }
    ]
  },
  productivity: {
    slug: 'productivity',
    title: 'Productivity & Notes',
    h1: 'AI Productivity & Lecture Note-Taking Tools for Students',
    metaTitle: 'AI Productivity & Note-Taking Tools for College | StudyAI Hub',
    metaDescription: 'Streamline your college routine with AI productivity tools. Transcribe lectures, organize study schedules, and structure notes effortlessly.',
    shortDescription: 'Audio lecture transcription, intelligent note organization, and task scheduling.',
    fullDescription: 'Managing coursework across 5–6 college classes is a major logistical challenge. These AI productivity tools capture lecture audio, organize research notes into connected wikis, and break overwhelming semester deadlines into actionable tasks.',
    iconName: 'Clock',
    useCases: [
      'Transcribing recorded lecture audio into structured bullet-point summaries',
      'Creating a centralized second-brain knowledge hub for all semester notes',
      'Breaking large term projects into bite-sized daily tasks with Goblin.tools',
      'Tracking active study hours to prevent exam burnout'
    ],
    faqs: [
      {
        question: 'Is it legal to record and transcribe university lectures with AI?',
        answer: 'Always obtain explicit instructor permission before recording lectures, as recording policies vary by institution and state wiretapping regulations.'
      },
      {
        question: 'What is the best completely free note-taking AI tool for students?',
        answer: 'Notion offers its primary workspace 100% free with unlimited blocks for students using a valid .edu email address. For neurodivergent task breakdown, Goblin.tools is completely free on the web.'
      },
      {
        question: 'How does Otter.ai handle academic technical terms?',
        answer: 'Otter.ai transcribes general lectures well, but students in medical, chemical, or engineering courses should review transcripts to correct specialized nomenclature.'
      }
    ]
  }
};

export const TOOLS_DATA: ToolItem[] = [
  // STUDY TOOLS
  {
    id: 'quizlet',
    name: 'Quizlet',
    slug: 'quizlet',
    category: 'study',
    categoryLabel: 'Study & Exam Prep',
    description: 'A global study platform utilizing AI Q-Chat tutoring and Magic Notes to convert study guides into flashcards and practice quizzes.',
    shortDescription: 'AI flashcard generator and interactive practice tests from lecture notes.',
    bestFor: 'Rapid flashcard creation and active recall test preparation.',
    features: ['Magic Notes automated flashcard conversion', 'Q-Chat interactive Socratic study tutor', 'Spaced repetition study modes', 'Mobile offline synchronization'],
    pricing: 'Free tier available; Quizlet Plus at ~$35.99/year.',
    freePlan: 'Free core access to millions of existing study sets and basic flashcard generation.',
    hasFreeTier: true,
    studentUsefulness: 'Essential for memorization-heavy subjects like Biology, Psychology, and Languages.',
    tags: ['Flashcards', 'Active Recall', 'Exam Prep'],
    officialUrl: 'https://quizlet.com',
    iconName: 'BookOpen',
    lastVerified: '2026-10-08',
    verificationStatus: 'Verified',
    academicDiscountAvailable: false
  },
  {
    id: 'knowt',
    name: 'Knowt',
    slug: 'knowt',
    category: 'study',
    categoryLabel: 'Study & Exam Prep',
    description: 'A student-friendly study platform that imports Quizlet decks for free and uses AI to turn lecture slides and lecture notes into practice exams.',
    shortDescription: '100% free alternative to Quizlet Plus with AI flashcard and quiz generation.',
    bestFor: 'Students wanting unlimited free AI flashcards without a paywall.',
    features: ['Direct 1-click Quizlet deck importer', 'AI note summarizer and flashcard generator', 'Learn mode with spaced repetition', 'Community shared college study decks'],
    pricing: 'Completely free for core student features; optional supporter tier.',
    freePlan: 'Generous free tier with unlimited flashcards and practice test creation.',
    hasFreeTier: true,
    studentUsefulness: 'High value for budget-conscious students seeking a free Quizlet replacement.',
    tags: ['Free Quizlet Alternative', 'Flashcards', 'Quiz Maker'],
    officialUrl: 'https://knowt.com',
    iconName: 'Sparkles',
    lastVerified: '2026-10-08',
    verificationStatus: 'Verified',
    academicDiscountAvailable: false
  },
  {
    id: 'ankipro',
    name: 'Anki / AnkiPro',
    slug: 'anki',
    category: 'study',
    categoryLabel: 'Study & Exam Prep',
    description: 'Gold-standard spaced repetition flashcard software designed for long-term retention of massive information volumes.',
    shortDescription: 'Algorithm-driven spaced repetition flashcards for medical, STEM, and law students.',
    bestFor: 'Long-term memory retention for pre-med, law, and vocabulary exams.',
    features: ['SuperMemo SM-2 spaced repetition algorithm', 'Complete customizable card templates', 'Massive open-source shared deck library', 'Completely open-source desktop client'],
    pricing: 'Anki desktop & Android are 100% free/open-source; iOS app is a one-time purchase.',
    freePlan: 'Completely free forever on Windows, Mac, Linux, and Android.',
    hasFreeTier: true,
    studentUsefulness: 'The highest-proven academic retention tool for rigorous multi-semester exams.',
    tags: ['Spaced Repetition', 'Pre-Med', 'Open Source'],
    officialUrl: 'https://apps.ankiweb.net',
    iconName: 'Brain',
    lastVerified: '2026-10-08',
    verificationStatus: 'Verified',
    academicDiscountAvailable: false
  },
  {
    id: 'mindgrasp',
    name: 'Mindgrasp',
    slug: 'mindgrasp',
    category: 'study',
    categoryLabel: 'Study & Exam Prep',
    description: 'An AI learning assistant that digests lecture videos, audio recordings, textbook PDFs, and documents to generate comprehensive notes and quizzes.',
    shortDescription: 'AI engine that converts lecture audio, video, and PDFs into study materials.',
    bestFor: 'Audio and video lecture comprehension and generating practice questions.',
    features: ['Upload YouTube links, Zoom recordings, or lecture slides', 'Generates bullet-point summaries and key takeaways', 'Interactive chat with uploaded documents', 'Automated practice question generator'],
    pricing: 'Free trial; paid student plans starting at ~$6.99/month.',
    freePlan: 'Limited free trial upon registration.',
    hasFreeTier: false,
    studentUsefulness: 'Ideal for students who struggle to capture fast-speaking lecturers.',
    tags: ['Lecture Notes', 'Video Summarizer', 'PDF Chat'],
    officialUrl: 'https://mindgrasp.ai',
    iconName: 'Headphones',
    lastVerified: '2026-10-08',
    verificationStatus: 'Verified',
    academicDiscountAvailable: true,
    academicDiscountDetails: 'Annual student discounts occasionally offered.'
  },

  // RESEARCH TOOLS
  {
    id: 'consensus',
    name: 'Consensus',
    slug: 'consensus',
    category: 'research',
    categoryLabel: 'Academic Research',
    description: 'An AI search engine that answers research questions using evidence extracted directly from 200M+ peer-reviewed scientific papers.',
    shortDescription: 'Evidence-based academic search engine citing peer-reviewed papers.',
    bestFor: 'Finding scientific consensus and real DOI-backed citations.',
    features: ['Consensus Meter showing scientific agreement percentage', 'Direct extract from peer-reviewed scientific journals', 'No hallucinations — every claim cites a real paper', 'Integrated citation export for BibTeX, APA, MLA'],
    pricing: 'Free tier with unlimited searches; Premium at ~$8.99/month for unlimited AI summaries.',
    freePlan: 'Generous free plan with unlimited searches and basic Consensus Meter credits.',
    hasFreeTier: true,
    studentUsefulness: 'Indispensable for science, psychology, economics, and thesis literature reviews.',
    tags: ['Peer Reviewed', 'Literature Review', 'Citations'],
    officialUrl: 'https://consensus.app',
    iconName: 'Search',
    lastVerified: '2026-10-08',
    verificationStatus: 'Verified',
    academicDiscountAvailable: true,
    academicDiscountDetails: 'Student discounts available on academic verification.'
  },
  {
    id: 'elicit',
    name: 'Elicit',
    slug: 'elicit',
    category: 'research',
    categoryLabel: 'Academic Research',
    description: 'An AI research assistant that automates literature review workflows by synthesizing papers, extracting study methodologies, and summarizing findings.',
    shortDescription: 'AI literature review assistant that extracts methodologies and findings.',
    bestFor: 'Systematic literature reviews and comparing research study methodologies.',
    features: ['Extract custom columns (sample size, methodology, outcomes)', 'Search 125M+ academic papers across Semantic Scholar', 'Synthesize key insights across top 8 papers', 'Filter by study type, journal, and publication year'],
    pricing: 'Free plan with 5,000 one-time credits; Plus plan at ~$10/month.',
    freePlan: 'Free tier includes initial credits sufficient for course research projects.',
    hasFreeTier: true,
    studentUsefulness: 'Saves 10+ hours per paper by tabulating study methodologies automatically.',
    tags: ['Literature Review', 'Methodology Extraction', 'Scholarly'],
    officialUrl: 'https://elicit.com',
    iconName: 'FileText',
    lastVerified: '2026-10-08',
    verificationStatus: 'Verified',
    academicDiscountAvailable: false
  },
  {
    id: 'scite',
    name: 'Scite.ai',
    slug: 'scite',
    category: 'research',
    categoryLabel: 'Academic Research',
    description: 'A platform that evaluates research credibility through Smart Citations—showing whether papers support, mention, or contrast the claims they cite.',
    shortDescription: 'Smart citations indicating whether papers confirm or refute scientific claims.',
    bestFor: 'Checking research reliability and finding contrasting viewpoints.',
    features: ['Smart Citations classifying supporting vs contrasting evidence', 'Citation context showing full surrounding sentence', 'Reference checker for manuscript bibliographies', 'Integration with Zotero and browser extensions'],
    pricing: '7-day free trial; student pricing around ~$10/month or university institutional access.',
    freePlan: '7-day trial; free browser extension for basic citation badges.',
    hasFreeTier: false,
    studentUsefulness: 'Crucial for graduate students and rigorous dissertations to avoid citing retracted studies.',
    tags: ['Smart Citations', 'Fact Checking', 'Scholarly Trust'],
    officialUrl: 'https://scite.ai',
    iconName: 'CheckCircle',
    lastVerified: '2026-10-08',
    verificationStatus: 'Verified',
    academicDiscountAvailable: true,
    academicDiscountDetails: 'Many university libraries provide institutional access for students.'
  },
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    slug: 'perplexity',
    category: 'research',
    categoryLabel: 'Academic Research',
    description: 'A conversational answer engine providing comprehensive answers backed by inline citations to verifiable web and academic sources.',
    shortDescription: 'Conversational research engine with live citations and academic search focus.',
    bestFor: 'Initial exploratory research with transparent cited sources.',
    features: ['Academic Focus mode filtering search to scholarly sources', 'Numbered inline citations for instant fact verification', 'Collections for organizing course research topics', 'Multi-model access (GPT-4o, Claude 3.5 Sonnet) on Pro'],
    pricing: 'Free tier with unlimited standard searches; Pro at $20/month.',
    freePlan: 'Generous free tier with unlimited standard searches and 5 Pro searches daily.',
    hasFreeTier: true,
    studentUsefulness: 'Superior to standard Google search for getting instant, synthesized overviews with citations.',
    tags: ['Inline Citations', 'Academic Filter', 'Exploratory Search'],
    officialUrl: 'https://perplexity.ai',
    iconName: 'Compass',
    lastVerified: '2026-10-08',
    verificationStatus: 'Verified',
    academicDiscountAvailable: true,
    academicDiscountDetails: 'Campus student ambassador programs and promotional free Pro months.'
  },

  // CODING TOOLS
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    slug: 'github-copilot',
    category: 'coding',
    categoryLabel: 'Coding & Engineering',
    description: 'The world’s most widely adopted AI pair programmer, providing real-time code completions and chat assistance directly in VS Code and JetBrains.',
    shortDescription: 'AI code completion and in-editor chat, 100% free for verified college students.',
    bestFor: 'Computer Science students learning syntax and building class software projects.',
    features: ['Context-aware code autocomplete for all major programming languages', 'Copilot Chat for explaining algorithmic complexity and debugging', 'Unit test generation and error explanation', 'Native integration into VS Code, Visual Studio, and JetBrains'],
    pricing: 'Normally $10/month; 100% FREE for students via GitHub Student Pack.',
    freePlan: '100% free access for actively enrolled students.',
    hasFreeTier: true,
    studentUsefulness: 'The highest-value coding tool available to students globally.',
    tags: ['100% Free For Students', 'VS Code', 'Autocomplete', 'CSE'],
    officialUrl: 'https://github.com/features/copilot',
    iconName: 'Code',
    lastVerified: '2026-10-08',
    verificationStatus: 'Verified',
    academicDiscountAvailable: true,
    academicDiscountDetails: 'Completely free for students through GitHub Education.'
  },
  {
    id: 'cursor',
    name: 'Cursor',
    slug: 'cursor',
    category: 'coding',
    categoryLabel: 'Coding & Engineering',
    description: 'An AI-first code editor built as a modern fork of VS Code, featuring multi-file codebase reasoning, instant terminal debugging, and smart edits.',
    shortDescription: 'AI-first code editor designed for full codebase understanding and debugging.',
    bestFor: 'Engineering students working on complex multi-file semester projects.',
    features: ['Codebase indexing with `@codebase` semantic query support', 'Instant cursor edits and terminal error resolution', 'Compatible with all VS Code extensions and settings', 'Powered by frontier models (Claude 3.5 Sonnet, GPT-4o)'],
    pricing: 'Free tier with 2,000 completions/month; Pro plan at $20/month.',
    freePlan: 'Free tier includes generous basic completions and trial fast requests.',
    hasFreeTier: true,
    studentUsefulness: 'Tremendously speeds up navigation through unfamiliar open-source repos.',
    tags: ['AI Editor', 'Multi-File', 'Fast Debugging'],
    officialUrl: 'https://cursor.com',
    iconName: 'Terminal',
    lastVerified: '2026-10-08',
    verificationStatus: 'Verified',
    academicDiscountAvailable: false
  },
  {
    id: 'codeium',
    name: 'Codeium / Windsurf',
    slug: 'codeium',
    category: 'coding',
    categoryLabel: 'Coding & Engineering',
    description: 'A free, ultra-fast AI coding companion offering unlimited code autocomplete and in-editor chat for 70+ programming languages.',
    shortDescription: 'Free forever individual AI code completion tool with zero credit card barrier.',
    bestFor: 'Students without a university email who need unlimited free autocomplete.',
    features: ['Unlimited autocomplete for individual developers', 'Fast latency with proprietary low-latency models', 'Supports 40+ IDEs including VS Code, PyCharm, Xcode', 'Zero telemetry privacy options'],
    pricing: 'Individual plan is free forever; Windsurf Pro editor at $15/month.',
    freePlan: 'Free forever individual tier with unlimited code autocompletions.',
    hasFreeTier: true,
    studentUsefulness: 'The best free alternative to Copilot for students without an academic email.',
    tags: ['Free Forever', 'Fast Autocomplete', 'Multi-Language'],
    officialUrl: 'https://codeium.com',
    iconName: 'Zap',
    lastVerified: '2026-10-08',
    verificationStatus: 'Verified',
    academicDiscountAvailable: false
  },
  {
    id: 'phind',
    name: 'Phind',
    slug: 'phind',
    category: 'coding',
    categoryLabel: 'Coding & Engineering',
    description: 'An AI search and reasoning engine customized specifically for developers, technical troubleshooting, and framework documentation.',
    shortDescription: 'Developer-focused search engine for debugging code and technical docs.',
    bestFor: 'Solving obscure compiler bugs and finding current API usage examples.',
    features: ['Live web search indexing latest GitHub issues and documentation', 'Executable code snippets and architectural guidance', 'Pair programmer mode with custom terminal commands', 'Direct links to official framework docs'],
    pricing: 'Free tier with unlimited basic queries; Pro at $20/month.',
    freePlan: 'Completely free unlimited standard searches with fast code explanations.',
    hasFreeTier: true,
    studentUsefulness: 'Far superior to outdated forum threads when debugging new library updates.',
    tags: ['Technical Search', 'Bug Fixer', 'Documentation'],
    officialUrl: 'https://phind.com',
    iconName: 'Cpu',
    lastVerified: '2026-10-08',
    verificationStatus: 'Verified',
    academicDiscountAvailable: false
  },

  // WRITING TOOLS
  {
    id: 'grammarly',
    name: 'Grammarly',
    slug: 'grammarly',
    category: 'writing',
    categoryLabel: 'Writing & Editing',
    description: 'The standard AI writing assistant for grammar, spelling, conciseness, academic tone adjustment, and citation verification.',
    shortDescription: 'Real-time grammar, punctuation, clarity, and tone assistance.',
    bestFor: 'Proofreading college papers, lab reports, and professional emails.',
    features: ['Real-time grammar, spelling, and punctuation correction', 'Tone detector ensuring appropriate academic register', 'Free citation generator (APA, MLA, Chicago)', 'Browser, Google Docs, and Microsoft Word integrations'],
    pricing: 'Free tier with essential checks; Premium at ~$12/month (billed annually).',
    freePlan: 'Free plan covers critical grammar, spelling, and conciseness.',
    hasFreeTier: true,
    studentUsefulness: 'Safe and accepted across almost all universities without triggering AI cheating penalties.',
    tags: ['Grammar', 'Proofreading', 'Safe For College'],
    officialUrl: 'https://grammarly.com',
    iconName: 'Check',
    lastVerified: '2026-10-08',
    verificationStatus: 'Verified',
    academicDiscountAvailable: true,
    academicDiscountDetails: 'Many universities provide free Grammarly Premium to enrolled students.'
  },
  {
    id: 'quillbot',
    name: 'QuillBot',
    slug: 'quillbot',
    category: 'writing',
    categoryLabel: 'Writing & Editing',
    description: 'An AI-powered paraphrasing tool, summarizer, and citation generator designed to help students improve vocabulary and rephrase sentences.',
    shortDescription: 'AI paraphrasing, text summarizer, and automated citation generator.',
    bestFor: 'Overcoming writer’s block and summarizing long reading passages.',
    features: ['Paraphraser with Standard and Fluency modes in free tier', 'Text summarizer condensing lengthy articles into bullet points', 'Automated citation generator with instant bibliography export', 'Co-Writer document editor with research search'],
    pricing: 'Free tier with 125-word paraphrase limit; Premium at ~$4.17/month (annual).',
    freePlan: 'Free tier allows paraphrasing up to 125 words at a time and unlimited summarizer.',
    hasFreeTier: true,
    studentUsefulness: 'Helpful for rephrasing awkward phrasing, but must be used with academic integrity caution.',
    tags: ['Paraphraser', 'Summarizer', 'Citation Tool'],
    officialUrl: 'https://quillbot.com',
    iconName: 'RefreshCw',
    lastVerified: '2026-10-08',
    verificationStatus: 'Verified',
    academicDiscountAvailable: true,
    academicDiscountDetails: 'Frequent semester student discount promotions.'
  },
  {
    id: 'wordtune',
    name: 'Wordtune',
    slug: 'wordtune',
    category: 'writing',
    categoryLabel: 'Writing & Editing',
    description: 'An AI writing companion that provides alternative sentence phrasing, tone adjustments (casual vs formal), and sentence expansion or shortening.',
    shortDescription: 'AI sentence rephraser for perfecting academic clarity and flow.',
    bestFor: 'Non-native English speakers wanting natural academic phrasing.',
    features: ['Rewrite suggestions for entire sentences or selected clauses', 'Formal tone toggle suitable for scholarly submissions', 'Shorten and Expand phrasing modes', 'Browser extension that operates inside any text field'],
    pricing: 'Free tier with 10 rewrites/day; Plus plan at $6.99/month for students.',
    freePlan: 'Free plan includes 10 rewrites per day.',
    hasFreeTier: true,
    studentUsefulness: 'Great for turning clunky drafts into elegant prose without writing the idea for you.',
    tags: ['Tone Adjustment', 'Clarity', 'ESL Friendly'],
    officialUrl: 'https://wordtune.com',
    iconName: 'PenTool',
    lastVerified: '2026-10-08',
    verificationStatus: 'Verified',
    academicDiscountAvailable: true,
    academicDiscountDetails: 'Offers a 50% discount for eligible students and educators.'
  },
  {
    id: 'hemingway',
    name: 'Hemingway Editor',
    slug: 'hemingway',
    category: 'writing',
    categoryLabel: 'Writing & Editing',
    description: 'A focused editor that highlights dense sentences, passive voice, and unnecessary adverbs to ensure clear, punchy academic communication.',
    shortDescription: 'Readability tool highlighting complex sentences and passive voice.',
    bestFor: 'Trimming essay word counts and improving prose readability.',
    features: ['Color-coded highlights for hard-to-read sentences', 'Passive voice detector', 'Grade-level readability score calculation', 'Free web application with no account needed'],
    pricing: 'Web version is 100% free; optional AI rewrite add-on and desktop app available.',
    freePlan: 'Core web editor is 100% free with no login required.',
    hasFreeTier: true,
    studentUsefulness: 'Perfect final-check tool before submitting term papers to ensure clarity.',
    tags: ['Readability', 'Passive Voice', 'No Login Required'],
    officialUrl: 'https://hemingwayapp.com',
    iconName: 'Edit3',
    lastVerified: '2026-10-08',
    verificationStatus: 'Verified',
    academicDiscountAvailable: false
  },

  // PRESENTATION TOOLS
  {
    id: 'gamma',
    name: 'Gamma App',
    slug: 'gamma',
    category: 'presentations',
    categoryLabel: 'Presentations & Slides',
    description: 'A modern AI presentation generator that transforms text prompts and document notes into beautifully formatted, interactive slide decks.',
    shortDescription: 'Generates polished, interactive slide decks and webpages from text prompts.',
    bestFor: 'Creating clean presentation decks rapidly for college group assignments.',
    features: ['Generates complete multi-slide presentations from a 1-paragraph prompt', 'Flexible card layouts that break free from rigid slide templates', '1-click export to PowerPoint (.pptx) and PDF', 'Interactive embeds for web links, graphs, and videos'],
    pricing: 'Free plan with 400 credits upon signup; Plus plan at $8/month.',
    freePlan: 'Free tier with 400 initial credits, enough to build 5+ presentations.',
    hasFreeTier: true,
    studentUsefulness: 'The fastest tool for turning seminar notes into professional presentation decks.',
    tags: ['AI Slides', 'Fast Decks', 'Export to PPTX'],
    officialUrl: 'https://gamma.app',
    iconName: 'Layout',
    lastVerified: '2026-10-08',
    verificationStatus: 'Verified',
    academicDiscountAvailable: false
  },
  {
    id: 'canva-magic',
    name: 'Canva Magic Design',
    slug: 'canva',
    category: 'presentations',
    categoryLabel: 'Presentations & Slides',
    description: 'AI-powered presentation layout assistant inside Canva that generates branded templates, slide layouts, and graphics matching your project topic.',
    shortDescription: 'Template and graphic generator with millions of academic design elements.',
    bestFor: 'Students who need custom visual control and rich graphics for slide decks.',
    features: ['Magic Design creates slides based on uploaded text or themes', 'Huge library of free academic diagrams, icons, and charts', 'Seamless real-time group collaboration for project partners', 'Free student access through Canva for Education (when school enrolled)'],
    pricing: 'Free tier with extensive features; Canva Pro at $12.99/month.',
    freePlan: 'Generous free tier with thousands of presentation templates.',
    hasFreeTier: true,
    studentUsefulness: 'The industry standard for group student presentation collaboration.',
    tags: ['Group Projects', 'Visual Design', 'Collaboration'],
    officialUrl: 'https://canva.com',
    iconName: 'Image',
    lastVerified: '2026-10-08',
    verificationStatus: 'Verified',
    academicDiscountAvailable: true,
    academicDiscountDetails: 'Canva for Education is free for eligible institutions.'
  },
  {
    id: 'slidesai',
    name: 'SlidesAI',
    slug: 'slidesai',
    category: 'presentations',
    categoryLabel: 'Presentations & Slides',
    description: 'A Google Slides extension that automatically creates presentation slides directly from pasted summary text or bullet notes.',
    shortDescription: 'Google Slides add-on converting pasted bullet points into slides.',
    bestFor: 'Students who already work primarily inside Google Workspace.',
    features: ['Runs natively inside Google Slides', 'Summarizes up to 10,000 characters into slides', 'Automatic image search and layout insertion', 'Multi-language support for 100+ languages'],
    pricing: 'Free tier with 3 presentations/month; Pro plan at ~$10/month.',
    freePlan: 'Free plan allows generating 3 presentations per month (max 2,500 chars/input).',
    hasFreeTier: true,
    studentUsefulness: 'Convenient because it requires no learning curve outside Google Slides.',
    tags: ['Google Slides Addon', 'Fast Notes to Deck'],
    officialUrl: 'https://slidesai.io',
    iconName: 'Sliders',
    lastVerified: '2026-10-08',
    verificationStatus: 'Verified',
    academicDiscountAvailable: true,
    academicDiscountDetails: 'Education pricing discounts available for verified students.'
  },

  // PRODUCTIVITY TOOLS
  {
    id: 'notion-ai',
    name: 'Notion AI',
    slug: 'notion',
    category: 'productivity',
    categoryLabel: 'Productivity & Notes',
    description: 'The all-in-one student workspace combining lecture notes, syllabi, assignment trackers, and embedded AI writing and summarization.',
    shortDescription: 'Connected college workspace with AI summaries, task tracking, and wikis.',
    bestFor: 'Centralizing all college class notes, assignment deadlines, and project wikis.',
    features: ['Unlimited blocks free for verified students with .edu email', 'Q&A feature answers questions across your entire semester workspace', 'Action item extraction from lecture notes', 'Rich relational databases for course syllabus tracking'],
    pricing: 'Notion Plus is 100% FREE for students with .edu email; Notion AI add-on is $8/month.',
    freePlan: 'Unlimited free workspace with .edu email verification.',
    hasFreeTier: true,
    studentUsefulness: 'The single most versatile student organization operating system.',
    tags: ['Second Brain', 'Class Wiki', 'Free Student Plan'],
    officialUrl: 'https://notion.so',
    iconName: 'Folder',
    lastVerified: '2026-10-08',
    verificationStatus: 'Verified',
    academicDiscountAvailable: true,
    academicDiscountDetails: 'Notion Plus plan is 100% free with any valid student email.'
  },
  {
    id: 'otter-ai',
    name: 'Otter.ai',
    slug: 'otter',
    category: 'productivity',
    categoryLabel: 'Productivity & Notes',
    description: 'An AI lecture transcription tool that records spoken audio in real time, generates synced text transcripts, and highlights key action items.',
    shortDescription: 'Real-time speech-to-text lecture transcriber and automated summarizer.',
    bestFor: 'Recording fast-paced lectures and generating searchable audio notes.',
    features: ['Real-time audio transcription with speaker identification', 'Automated 30-second summary generation after class', 'Searchable transcripts linked to timestamped audio playback', 'Capture lecture slides and sync with audio notes'],
    pricing: 'Free basic plan with 300 transcription minutes/month; Student Pro at ~$8/month.',
    freePlan: 'Free tier includes 300 monthly transcription minutes (max 30 mins per recording).',
    hasFreeTier: true,
    studentUsefulness: 'Invaluable for students with auditory processing challenges or fast lecturers.',
    tags: ['Lecture Recording', 'Transcription', 'Audio Notes'],
    officialUrl: 'https://otter.ai',
    iconName: 'Mic',
    lastVerified: '2026-10-08',
    verificationStatus: 'Verified',
    academicDiscountAvailable: true,
    academicDiscountDetails: 'Offers a 20% student discount on Pro subscriptions.'
  },
  {
    id: 'goblin-tools',
    name: 'Goblin.tools',
    slug: 'goblin-tools',
    category: 'productivity',
    categoryLabel: 'Productivity & Notes',
    description: 'A collection of free, simple, single-task AI tools designed to break overwhelming assignments into manageable subtasks and estimate time requirements.',
    shortDescription: 'Free neurodivergent-friendly AI tool that breaks big tasks into micro-steps.',
    bestFor: 'Students struggling with executive dysfunction, procrastination, and large projects.',
    features: ['Magic ToDo breaks any term project into 10 smaller sequential steps', 'Estimator calculates how long a study task will realistically take', 'Formalizer translates casual text into polite professor emails', 'Judge evaluates tone to check if an email sounds angry or polite'],
    pricing: '100% free web app; optional low-cost one-time purchase mobile app.',
    freePlan: '100% free web access with zero account registration needed.',
    hasFreeTier: true,
    studentUsefulness: 'An incredible hidden gem for managing ADHD and project overwhelm.',
    tags: ['Task Breakdown', 'Procrastination', '100% Free'],
    officialUrl: 'https://goblin.tools',
    iconName: 'CheckSquare',
    lastVerified: '2026-10-08',
    verificationStatus: 'Verified',
    academicDiscountAvailable: false
  }
];

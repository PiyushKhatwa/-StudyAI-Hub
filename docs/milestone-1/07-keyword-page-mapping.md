# 07 — Keyword-to-Page Mapping & Cannibalization Prevention

## 1. Principles of Keyword-to-Page Mapping
Keyword mapping creates a deterministic 1-to-1 relationship between target search queries and specific URLs. Without meticulous keyword mapping, websites frequently suffer from **Keyword Cannibalization**—a condition where multiple pages on the same website compete for the same query, confusing search crawlers and splitting authority and ranking potential.

---

## 2. Master Keyword-to-Page Matrix

| Target URL | URL Type | Primary Focus Keyword | Secondary Keywords | Search Intent | Cannibalization Prevention Guardrail |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | Homepage | `ai tools for students` | `ai tools for college students`, `ai student tools` | Informational | Restrict generic high-volume head terms to root; do not repeat on category pages. |
| `/study` | Category Hub | `ai tools for studying` | `ai study tools`, `ai flashcards`, `ai tools for studying for exams` | Informational | Keep focus strictly on active learning, quiz generation, and exam prep. |
| `/research` | Category Hub | `ai tools for research` | `ai research paper tools`, `ai tools for literature review students` | Informational | Focus strictly on scholarly academic databases and peer-reviewed citations. |
| `/coding` | Category Hub | `ai coding tools for students` | `ai tools for cse students`, `free ai coding tools for college students` | Informational | Focus exclusively on programming, software engineering coursework, and IDE tools. |
| `/writing` | Category Hub | `ai writing tools for students` | `academic ai writing tools`, `grammar tools for college students` | Informational | Focus strictly on proofreading, thesis outlining, and citation formatting. |
| `/presentations` | Category Hub | `ai tools for presentations` | `ai presentation maker for students`, `ai slide generator students` | Commercial Investigation | Focus strictly on presentation decks and visual slide design. |
| `/productivity` | Category Hub | `ai productivity tools for students` | `ai note taking tools`, `lecture transcription ai for students` | Informational | Focus strictly on time management, audio transcription, and schedule planning. |
| `/blog/best-ai-tools-for-college-students` | Flagship Guide | `best ai tools for college students` | `best free ai tools for college students`, `top ai tools for students` | Commercial / Evaluative | Comparative evaluation article; differs from directory by providing ranked analysis and deep-dive comparisons. |
| `/about` | Static Brand | `about studyai hub` | `student ai research methodology` | Navigational | Establishes publisher credibility and transparent evaluation criteria. |
| `/contact` | Static Brand | `contact studyai hub` | `submit student ai tool` | Navigational | Provides communication channels and submission guidelines. |

---

## 3. Internal Anchor Text Protocol
To enforce this mapping, internal links follow strict anchor text guidelines:
- Links targeting `/study` use: `"AI study tools"`, `"explore study tools"`, `"tools for studying"`.
- Links targeting `/research` use: `"AI tools for research"`, `"scholarly research tools"`.
- Links targeting `/blog/best-ai-tools-for-college-students` use: `"in-depth guide to best AI tools for students"`, `"read our full comparison"`.
- We prohibit generic anchors like "click here" or "learn more".

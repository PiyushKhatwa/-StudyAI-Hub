# Search Intent Mapping & Analysis — StudyAI Hub

## 1. Search Intent Framework
Search intent represents the fundamental objective a user seeks to accomplish when entering a query into a search engine. In accordance with the CSET489 project specifications, search queries are classified across four standardized intent classes:

1. **Informational:** The searcher seeks knowledge, answers, tutorials, or broad conceptual overviews (e.g., *"how to use AI for literature reviews"*, *"best free AI tools for students"*).
2. **Commercial Investigation:** The searcher has purchase or adoption intent but is researching options, comparing feature sets, or reviewing pricing tiers before deciding (e.g., *"Grammarly vs QuillBot for students"*, *"best AI presentation maker"*).
3. **Transactional:** The searcher is ready to take an immediate action—such as signing up, downloading, or purchasing a tool (e.g., *"ChatGPT Plus student discount discount code"*, *"download Cursor IDE"*).
4. **Navigational:** The searcher is looking for a specific, branded website or direct login page (e.g., *"Consensus app login"*, *"Notion AI"*).

---

## 2. Query Classification & Detailed Intent Rationale

| Query | Primary Intent | Secondary Intent | Target Content Format | Intent Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **ai tools for students** | Informational | Commercial Investigation | Directory / Comprehensive Overview (`/`) | High-level exploratory search. Students want to see an organized taxonomy of what AI tools exist for academic purposes. |
| **best ai tools for students** | Informational | Commercial Investigation | Curated Comparison Guide (`/blog/best-ai-tools-for-college-students`) | The user is evaluating multiple alternatives to find the top tools. Demands side-by-side comparative criteria (free tier, limits, reliability). |
| **free ai tools for students** | Informational | Transactional | Filtered Directory / Free-Tier Guide | Strong constraint on price. Student wants tools that require zero budget or offer generous free student tiers without hidden credit card barriers. |
| **ai tools for studying** | Informational | — | Study Category Page (`/study`) | Academic task intent: flashcard creation, active recall, summarizing lecture PDFs, and preparing for exams. |
| **ai study tools** | Informational | — | Study Category Page (`/study`) | Direct synonym to "ai tools for studying", seeking specific learning assistance software. |
| **ai tools for research** | Informational | Commercial Investigation | Research Category Page (`/research`) | Higher-cognitive academic task: finding scholarly papers, extracting citations, synthesizing scientific literature. |
| **ai coding tools for students** | Informational | Commercial Investigation | Coding Category Page (`/coding`) | Computer Science/Engineering students seeking programming companions for code debugging, syntax explanation, and project building. |
| **ai writing tools for students** | Informational | Commercial Investigation | Writing Category Page (`/writing`) | Task-focused: grammar correction, thesis structure, citations, paraphrasing, while complying with academic integrity rules. |
| **ai tools for presentations** | Commercial Investigation | Informational | Presentations Category Page (`/presentations`) | Visual workflow intent: students need to generate slide decks rapidly for class presentations or group projects. |
| **ai presentation maker for students** | Commercial Investigation | Transactional | Presentations Category Page (`/presentations`) | Product-seeking intent: evaluates specific apps like Gamma or SlidesAI to test or sign up for deck generation. |
| **ai note taking tools** | Informational | Commercial Investigation | Productivity Category Page (`/productivity`) | Student workflow query: transcribing audio lectures, organizing lecture notes, auto-summarization. |
| **ai productivity tools for students** | Informational | — | Productivity Category Page (`/productivity`) | General workflow optimization: task scheduling, focus timing, and calendar organization. |

---

## 3. Search Intent Satisfaction Strategy

### 3.1 Informational Queries
- **Approach:** Deliver immediate, clear answers without requiring excessive navigation. Provide transparent definitions, tool purpose, and clear student use cases.
- **Content Elements:** Clear H2/H3 breakdowns, summary tables, pros/cons, and step-by-step guides.

### 3.2 Commercial Investigation Queries
- **Approach:** Provide objective, un-hyped evaluation criteria. Detail exact free plan limits, student discount availability, and academic suitability.
- **Content Elements:** Feature comparison tables, "Best For" callouts, and explicit limitations.

### 3.3 Transactional & Navigational Queries
- **Approach:** Connect students directly to verified official sources with `rel="noopener noreferrer nofollow"` outbound links. Clearly designate that StudyAI Hub is an independent discovery platform, preventing brand confusion.

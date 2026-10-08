# Keyword-to-Page Mapping & Cannibalization Prevention — StudyAI Hub

## 1. Principles of Keyword-to-Page Mapping
Keyword mapping assigns distinct search queries to specific URLs to ensure that:
1. Every major high-intent query has a single authoritative destination.
2. Search engines do not experience **keyword cannibalization** (where two or more internal pages compete for the exact same query, diluting ranking signals).
3. Anchor text across internal links reinforces the designated target page.

---

## 2. Comprehensive Keyword Mapping Matrix

| Keyword | Primary Search Intent | Keyword Type | Target URL | Page Type | Content Type | Priority | Cannibalization Risk Mitigation |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **ai tools for students** | Informational | Primary Head | `/` | Homepage | Directory & Category Gateway | High | Target only on root URL; avoid using as primary H1 on category pages. |
| **ai tools for college students** | Informational | Primary Head | `/` | Homepage | Platform Overview | High | Secondary title tag modifier for homepage. |
| **best ai tools for college students** | Informational / Commercial | Primary Pillar | `/blog/best-ai-tools-for-college-students` | Blog Pillar | Long-form Evaluative Guide | High | Differentiate from homepage by focusing on comparative evaluations and ranked recommendations. |
| **best free ai tools for college students** | Informational | Long-tail / Secondary | `/blog/best-ai-tools-for-college-students` | Blog Pillar | Dedicated Section & Filter | High | Covered as dedicated H2 subsection within the flagship blog guide. |
| **ai tools for studying** | Informational | Primary Category | `/study` | Category Hub | Curated Tool Hub + Study Guide | High | Differentiated from research; strictly focuses on active recall, flashcards, and exam prep. |
| **ai study tools** | Informational | Secondary Category | `/study` | Category Hub | Synonym Target | High | Included in H2 and intro copy on `/study`. |
| **best ai tools for studying for exams** | Informational | Long-tail | `/study` | Category Hub | Use-Case Subheading | High | Targeted via dedicated FAQ and use-case card on `/study`. |
| **ai tools for research** | Informational / Commercial | Primary Category | `/research` | Category Hub | Academic Research Directory | High | Dedicated strictly to scientific literature, academic search, and citations. |
| **ai tools for literature review students** | Informational | Long-tail | `/research` | Category Hub | Research Method Section | High | Targeted via dedicated literature review callout on `/research`. |
| **ai coding tools for students** | Informational | Primary Category | `/coding` | Category Hub | Developer Hub | High | Targets CS/Engineering coursework, debugging, and IDE assistants. |
| **ai tools for cse students** | Informational | Secondary Category | `/coding` | Category Hub | Engineering Subheading | Medium | Included in `/coding` page copy and tags. |
| **free ai coding tools for college students** | Informational | Long-tail | `/coding` | Category Hub | Student Developer Pack Section | High | Targets free tiers (GitHub Student Pack, Codeium) on `/coding`. |
| **ai writing tools for students** | Informational | Primary Category | `/writing` | Category Hub | Writing & Editing Directory | High | Emphasizes grammar, paraphrasing, citations, and ethical writing. |
| **ai tools for presentations** | Commercial Investigation | Primary Category | `/presentations` | Category Hub | Presentation Software Hub | High | Focuses on slide generation, design, and speaker notes. |
| **ai presentation maker for students** | Commercial Investigation | Secondary Category | `/presentations` | Category Hub | Product Selection Guide | Medium | Targeted in `/presentations` tool cards and FAQ. |
| **ai note taking tools** | Informational | Primary Category | `/productivity` | Category Hub | Productivity Hub | High | Focuses on audio transcription, smart notes, and student time management. |
| **ai productivity tools for students** | Informational | Secondary Category | `/productivity` | Category Hub | Workflow Overview | High | Primary H1 modifier for `/productivity`. |

---

## 3. Cannibalization Audit Checklist
- [x] No two pages share the same primary H1 tag.
- [x] Homepage targets broad discovery ("AI Tools for Students"), while category pages target specific academic disciplines (`/study`, `/research`, etc.).
- [x] Blog pillar targets evaluative intent ("Best AI Tools for College Students"), containing comparative reviews rather than replacing the directory.
- [x] Clear internal linking anchors point exact keywords to their designated canonical destination.

# 08 — Information Architecture & URL Taxonomy

## 1. Information Architecture (IA) Hierarchy
StudyAI Hub employs a clean, hierarchical topic cluster model designed to maximize crawl efficiency, establish logical parent-child relationships, and preserve PageRank equity across all hub pages:

```
                                  [ / (Homepage) ]
                                         │
        ┌───────────┬────────────┬───────┴───┬────────────┬───────────┐
        ▼           ▼            ▼           ▼            ▼           ▼
     /study     /research     /coding     /writing  /presentations /productivity
        │           │            │           │            │           │
     Toolcards   Toolcards    Toolcards   Toolcards   Toolcards   Toolcards
        │
   [ /blog ] ───► [ /blog/best-ai-tools-for-college-students ]
        │
   [ /about ] ─── [ /contact ]
```

---

## 2. URL Taxonomy Rules
Our URL structure complies with modern technical SEO best practices:
1. **Lowercase Only:** Avoids duplicate content issues caused by case-sensitive web servers.
2. **Hyphen Separators:** Search engines interpret hyphens (`-`) as word separators, whereas underscores (`_`) join characters.
3. **Short & Descriptive:** Omits unnecessary query parameters, database IDs, or file extensions (e.g., `/coding` instead of `/index.php?cat_id=3&view=coding`).
4. **No Dates in URLs:** Evergreen content URLs do not contain publication years (e.g., `/blog/best-ai-tools-for-college-students` rather than `/blog/2026/03/best-tools...`), preventing artificial URL obsolescence.

---

## 3. Breadcrumb Navigation & Schema Structure
Every subpage implements visual and structured breadcrumb navigation:
- `Home > Study`
- `Home > Blog > Best AI Tools for College Students`
- `Home > About`

Each breadcrumb trail emits JSON-LD structured data conforming to Schema.org `BreadcrumbList`, assisting search engines in displaying rich sitelink paths directly within search results.

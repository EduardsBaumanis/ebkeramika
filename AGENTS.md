# AGENTS.md

Project-level guidance for AI agents working in this repository.

## Project Context

- This repo is a Latvian personal pottery knowledge base and studio practice website for EB Keramika.
- The site supports a small pottery practice in Latvia: practical research, experiments, studio notes, tools, study planning, safety reminders, clay tests, glaze tests, firing notes, documentation systems, and workshop checklists.
- This repo is not a shop. Never add cart, checkout, payment, ordering, customer account, product sales, stock, discount, delivery, e-commerce analytics, or sales funnel features.
- Keep the site focused on making, testing, documenting, learning, and improving ceramic work.

## Current Site Structure

- `index.html` is the Latvian landing page for the personal workshop notebook.
- `research/` contains the main research library:
  - `research/index.html` lists 100 practical research articles in 10 categories.
  - `research/articles/001-...html` through `100-...html` are standalone article pages.
  - `research/research.css` is the shared visual system for research pages and other simple sections.
- `tools/` contains the workshop tool catalogue and printable checklist:
  - `tools/index.html` lists pottery tools and small studio items with descriptions, examples, and internal article links.
  - `tools/checklist.html` is a printable priority checklist.
  - `tools/tools.css` contains tool-specific styling.
- `uni/` contains a personal three-year ceramics study model inspired by university ceramics curricula. It is not an official programme and should not claim to be one.

## Technical Rules

- Use plain HTML, shared CSS, and optional vanilla JavaScript only.
- Do not introduce React, Tailwind, Bootstrap, frameworks, package managers, build systems, backend code, external JavaScript libraries, or server-side dependencies.
- Prefer semantic HTML: `header`, `nav`, `main`, `section`, `article`, `figure`, `footer`, tables for tabular data, and useful heading order.
- Keep internal links relative.
- Store assets locally instead of hotlinking external images, scripts, fonts, or stylesheets.
- Keep CSS shared and reusable. Use `research/research.css` where possible; add section CSS only when it is genuinely section-specific.
- Informational pages must work without JavaScript. Add JavaScript only for small calculators or useful studio interactions.

## Language And Tone

- Everything visible to users must be in Latvian, including navigation, headings, labels, buttons, form messages, image `alt` text, metadata descriptions, and page titles.
- Exception: research article terminology may include English pottery translations in square brackets, such as `šlikeris [slip]`.
- Keep the tone practical, direct, workshop-oriented, and suitable for a small ceramics practice in Latvia.
- Avoid generic AI phrasing and repeated boilerplate. Do not reintroduce phrases like "nevis akadēmisks raksts vai gatava recepte", "secinājumi nepaliktu tikai sajūtās", or "viens labs vai slikts rezultāts vēl nepasaka visu".
- Avoid em dashes and en dashes in article prose. Use commas, periods, parentheses, or a simple hyphen only where needed.
- Do not turn content into marketing copy, sales language, promotional copy, or a product catalogue.
- Use cautious wording for technical ceramics claims. Prefer phrasing such as "parasti", "bieži", "var palīdzēt", "ieteicams pārbaudīt", "mazā darbnīcā", and "rezultāti atkarīgi no māla, glazūras un krāsns".

## Research Article Expectations

- Preserve the 100-article research library unless explicitly asked to restructure it.
- Each article should remain standalone and useful without JavaScript.
- Research articles should include practical sections such as:
  - title and short introduction
  - terminology in Latvian with English terms in brackets where useful
  - practical problem
  - materials and tools
  - step-by-step method with one clear practical result
  - Latvian conditions where relevant
  - common mistakes
  - safety notes where relevant
  - a small experiment or test
  - "Ko pierakstīt darbnīcas žurnālā"
  - short summary
  - links to the research index, previous article, and next article
- Keep methods coherent: every step should contribute to one practical result for that article.
- Keep article text original, practical, and evidence-informed. Do not copy academic papers or claim peer review.

## Sources And Claims

- Do not invent citations, DOI numbers, standards, institutions, books, authors, or academic references.
- Do not cite a source unless it has actually been checked.
- If source-like framing is needed, use wording such as "darbnīcas piezīme", "testa metode", "eksperimenta protokols", or "ieteikums".
- If a claim affects safety, durability, firing results, glaze stability, or food-contact use, phrase it carefully and encourage testing or expert review where appropriate.
- For `uni/`, do not claim that the study model is an official university programme. It may be described only as a personal study model inspired by checked ceramics education patterns.

## Safety Requirements

- Include clear safety warnings where relevant, especially for:
  - silica dust and dry clay or glaze materials
  - wet cleaning and respirator use
  - ventilation and kiln room air movement
  - kiln heat, fire risk, and burn hazards
  - electrical safety around kilns and studio equipment
  - glaze materials, oxides, stains, and potentially toxic ingredients
  - food-contact surfaces, glaze stability, and practical testing limits
- Do not describe a glaze, surface, or vessel as food-safe without explaining that safety depends on the full clay/glaze/firing combination and appropriate testing.
- Do not give unsafe shortcuts for kilns, electricity, dust, unknown glaze materials, or unknown local materials.

## File And Style Conventions

- Use descriptive lowercase filenames. Current article files use numeric prefixes and ASCII transliteration; keep that pattern.
- Do not create duplicate templates, stylesheets, or scripts when existing shared files can be reused cleanly.
- Keep top-level folders purposeful. Before adding a new folder, check whether `research/`, `tools/`, `uni/`, or a future planned section already fits.
- Keep visible link text descriptive and Latvian.
- Keep tables readable on mobile using existing table wrapper patterns.
- Do not remove existing user or agent work unless the user explicitly asks for it.

## Validation

After changes, run checks appropriate to the size of the change. For broad research edits, validate all 100 articles.

Check for:

- Broken relative links and missing linked files.
- Missing local assets referenced by HTML or CSS.
- User-visible text that is not Latvian, except approved English terminology in brackets.
- Forbidden shop-related terms in visible content, especially `grozs`, `groza`, `pirkt`, `cena`, `apmaksa`, `kase`, `pasūtīt`, `piegāde`, `atlaide`, `checkout`, `payment`, `customer`, `cart`, and `order`.
- Missing safety warnings on pages about materials, glazing, kilns, firing, dust, electrical work, or food-contact surfaces.
- New external URLs, scripts, CDNs, or hotlinked assets.
- Reintroduced boilerplate AI phrases or em/en dashes in research articles.

Use simple local checks with `rg` and small scripts when needed. A useful final check is: all article files exist from `001` to `100`, each links to `../research.css`, each has terminology, a practical result, safety warning, journal section, and valid previous/next navigation.

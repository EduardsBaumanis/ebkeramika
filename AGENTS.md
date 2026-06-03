# AGENTS.md

Project-level guidance for AI agents working in this repository.

## Project Context

- This is a Latvian personal pottery knowledge base and small studio tools website.
- It is meant for practical workshop use in Latvia: clay, glazes, firing notes, safety reminders, calculations, checklists, and learning material.
- It is not a shop. Do not add cart, checkout, payment, ordering, customer accounts, product sales, e-commerce analytics, or similar sales flows.
- The repository is currently minimal. Prefer small, clear static files and avoid adding architecture before the site actually needs it.

## Technical Rules

- Use plain HTML, shared CSS, and optional vanilla JavaScript only.
- Do not introduce frameworks, package managers, build systems, backend code, external JavaScript libraries, or server-side dependencies.
- Prefer semantic HTML: `header`, `nav`, `main`, `section`, `article`, `figure`, `footer`, and useful heading structure.
- Keep internal links relative.
- Keep CSS shared and reusable. Add page-specific CSS only when there is a real page-specific need.
- Add JavaScript only for useful interaction or calculations. Informational pages should work without JavaScript.
- Store assets locally instead of hotlinking external images or scripts.

## Language And Tone

- Everything visible to users must be in Latvian, including navigation, headings, labels, buttons, form messages, image `alt` text, and page titles.
- Keep the tone practical, workshop-oriented, and suitable for a small ceramics practice.
- Do not turn content into marketing copy or sales language.
- Use cautious wording for technical ceramics claims. Prefer phrasing such as "parasti", "var palīdzēt", "ieteicams pārbaudīt", and "viens no veidiem" where certainty depends on materials, kiln behavior, or testing.

## Sources And Claims

- Do not invent citations, DOI numbers, standards, institutions, books, authors, or academic references.
- Do not cite a source unless it has actually been checked.
- If a technical claim affects safety, durability, firing results, or food-contact use, phrase it carefully and encourage testing or expert review where appropriate.

## Safety Requirements

- Include clear safety warnings where relevant, especially for:
  - Silica dust and dry clay or glaze materials.
  - Ventilation and respirator use.
  - Kiln heat, fire risk, and burn hazards.
  - Electrical safety around kilns and studio equipment.
  - Glaze materials, oxides, stains, and potentially toxic ingredients.
  - Food-contact surfaces, glaze stability, and practical testing limits.
- Do not describe a glaze, surface, or vessel as food-safe without explaining that safety depends on the full clay/glaze/firing combination and appropriate testing.

## Structure

- Organize pages by topic when the site grows, for example materials, tools, firing, glaze notes, or calculators.
- Before adding a new top-level folder, check whether an existing folder already fits the subject.
- Use descriptive lowercase filenames. Prefer stable Latvian or ASCII transliterated names and keep naming consistent within each folder.
- Do not create duplicate templates, stylesheets, or scripts when existing shared files can be reused cleanly.

## Validation

After changes, run or create checks appropriate to the size of the change:

- Broken relative links and missing linked files.
- Missing local assets referenced by HTML or CSS.
- User-visible text that is not Latvian.
- Forbidden shop-related terms in visible content, especially `grozs`, `pirkt`, `cena`, `apmaksa`, `kase`, `pasūtīt`, `piegāde`, and `atlaide`.
- Missing safety warnings on pages about materials, glazing, kilns, firing, dust, or food-contact surfaces.
- New external URLs, scripts, or hotlinked assets.

If there is no existing validation script, use simple local checks with tools such as `rg`, or add a small validation script if repeated checking would be useful.

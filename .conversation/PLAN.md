# Portfolio site plan

## Direction

Build a root-level, publish-ready Jekyll GitHub user site for `taylordahlgren-cal.github.io`. The visual direction will combine:

- Clean, credible fintech-recruiting presentation inspired by Nevis Wealth.
- Subtle futuristic/retro-tech details inspired by Ribbit Capital.
- Earthy alpine colors, redwood/pine and mountain references, and restrained accent colors.
- Modern, highly legible typography with light and dark themes.

## Pages and content

- **Home** — concise positioning statement, selected strengths, and clear routes to experience, about, and contact.
- **About** — MBA education, interests, languages, and the career arc supplied in the résumé.
- **Work Experience** — chronological roles and impact-focused bullets, preserving supplied facts without inventing metrics or achievements.
- **Contact** — public email `mailto:` link, LinkedIn, GitHub, and location.

## Implementation

- Jekyll with Markdown pages and YAML front matter at the repository root.
- Reusable `_layouts` and `_includes`; content kept separate from CSS and HTML.
- Responsive semantic HTML and accessible contrast at phone and desktop widths.
- Minimal JavaScript for the theme toggle only; no backend, form handler, database, framework, tracker, or unnecessary dependency.
- `_config.yml` configured for `taylordahlgren-cal.github.io` with an empty `baseurl` and URL filters for links.
- SEO metadata, sitemap, an inline SVG favicon, README instructions, and GitHub Pages-compatible structure.

## Assumptions

- The supplied résumé is the source of truth; the placeholder `xyz` will be omitted rather than expanded.
- The phone number will not be published by default; the explicitly approved public contact method is email.
- No headshot or project portfolio was supplied, so the first version will not invent or imply projects.
- The site will use the supplied public LinkedIn URL and GitHub username.
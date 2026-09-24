# Portfolio site plan

## Direction

Build a root-level, publish-ready Jekyll GitHub user site for `taylordahlgren-cal.github.io`. The visual direction combines:

- Clean, credible fintech-recruiting presentation inspired by Nevis Wealth.
- Subtle futuristic/retro-tech details inspired by Ribbit Capital.
- Earthy alpine colors, redwood and pine references, and restrained accent colors.
- Modern, legible typography with light and dark themes.

## Pages and content

- **Home** — concise positioning statement, selected strengths, and clear routes to experience, about, and contact.
- **About** — MBA education, interests, languages, and career background from the supplied résumé.
- **Work Experience** — chronological roles and impact-focused bullets, without adding achievements or metrics.
- **Contact** — public email `mailto:` link, LinkedIn, GitHub, and location.

## Implementation

- Jekyll with Markdown pages and YAML front matter at the repository root.
- Reusable `_layouts` and `_includes`; content separated from CSS and HTML.
- Responsive semantic HTML and accessible contrast at phone and desktop widths.
- Minimal JavaScript for the theme toggle only; no backend, form handler, database, framework, trackers, or unnecessary dependencies.
- `_config.yml` configured for `taylordahlgren-cal.github.io` with an empty `baseurl` and URL filters for internal links.
- SEO metadata, sitemap, inline SVG favicon, README instructions, and GitHub Pages-compatible structure.

## Assumptions

- The supplied résumé is the source of truth; the placeholder `xyz` is omitted.
- The phone number is not published; the approved public contact method is email.
- No headshot or project portfolio was supplied, so the site will not invent or imply projects.
- The supplied LinkedIn profile and GitHub username are used as provided.
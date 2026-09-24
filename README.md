# Taylor Dahlgren — personal portfolio

This repository is the complete source for Taylor's static Jekyll portfolio. The site is designed to publish from the `main` branch and repository root with GitHub Pages; it does not need a separate build or deploy workflow.

## Publish with GitHub Pages

1. Create or rename the GitHub repository to `taylordahlgren-cal.github.io`.
2. Push this repository's root files to the `main` branch.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.

GitHub Pages will run Jekyll and publish the site at `https://taylordahlgren-cal.github.io`. The `_config.yml` already sets the correct site URL and an empty `baseurl`.

## Update the site

- Edit `index.md`, `about.md`, `work-experience.md`, or `contact.md` to update page content.
- Edit `_config.yml` for the site title, description, or canonical URL.
- Edit `assets/css/site.css` for visual changes.
- Reusable page structure lives in `_layouts/`; shared head, navigation, and footer markup lives in `_includes/`.
- The `PLAN.md` file records the approved scope and assumptions. It is excluded from the published site.

Keep career facts, dates, and metrics grounded in Taylor's résumé. Do not publish private contact details unless Taylor chooses to add them.

## Preview locally

Install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000`. Jekyll rebuilds the site as Markdown and layout files change.

## Run Lighthouse

With the local preview running, open `http://127.0.0.1:4000` in Chrome. Open DevTools → **Lighthouse**, select **Navigation**, and run both **Mobile** and **Desktop** audits. Review Performance, Accessibility, Best Practices, and SEO; the target for each category is 90 or higher.

The site uses system fonts, local SVG artwork, and no third-party trackers or remote font requests to keep it lightweight.
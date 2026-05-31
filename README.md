# soumyadeep.in — Design System

The personal design system for [soumyadeep.in](https://soumyadeep.in), built with Storybook and deployed to Cloudflare Pages.

**Live:** https://soumyadeep.in/design-system/

---

## Stack

- **Storybook** — component explorer
- **Cloudflare Pages** — hosting
- **GitHub Actions** — CI/CD (push to `main` → auto deploy)

---

## Tokens

| Token file | What's in it |
|---|---|
| `stories/tokens/tokens.css` | Colors, spacing, typography, border radius, breakpoints |
| `stories/components/components.css` | Component classes built on top of tokens |

### Key decisions

- **Fonts:** Indie Flower (H1–H3) + Patrick Hand (body) — Google Fonts
- **Palette:** `whiteboard` (light) / `blackboard` (dark)
- **Radius:** 6px
- **Shadow:** Hard offset (no blur)
- **Type scale:** Fluid (clamp-based)

> Don't invent new tokens or use arbitrary hex values — always pull from `tokens.css`.

---

## Local Development

```bash
npm install
npm run storybook
```

Runs at `http://localhost:6006`.

## Build

```bash
NODE_ENV=development npx storybook build --output-dir storybook-static
```

## Deploy

Push to `main` — GitHub Actions handles the rest.

Manual deploy:
```bash
NODE_ENV=development npx storybook build --output-dir storybook-static
npx wrangler pages deploy storybook-static --project-name soumyadeep-design-system --branch main
```

---

## CI/CD Setup

The GitHub Actions workflow (`.github/workflows/deploy.yml`) requires two repo secrets:

| Secret | Value |
|---|---|
| `CLOUDFLARE_API_TOKEN` | CF token with Pages:Edit scope |
| `CLOUDFLARE_ACCOUNT_ID` | `c81fc212136d1035e6ae6756bf2f3ea2` |

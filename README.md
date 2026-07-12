# Onboarding

Welcome — this repository contains a Next.js app with a small frontend and helper scripts.

## Quick start

Prerequisites:

- Node.js (18+ recommended)
- pnpm (this repo uses pnpm)

Install dependencies and run the dev server:

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000 in your browser.

## Common scripts

- `pnpm dev` — run the development server
- `pnpm build` — build for production
- `pnpm start` — run the production build

Run `pnpm -s` to see all available scripts defined in `package.json`.

## Project layout (key files)

- [src/app](src/app) — app routes, pages and components
- [src/app/home/page.tsx](src/app/home/page.tsx) — home page
- [src/app/landing/page.tsx](src/app/landing/page.tsx) — landing page
- [src/app/login/page.tsx](src/app/login/page.tsx) — login page
- [src/app/register/page.tsx](src/app/register/page.tsx) — registration
- [src/app/profile/page.tsx](src/app/profile/page.tsx) — profile page
- [src/app/components/app-shell.tsx](src/app/components/app-shell.tsx) — shared layout/component
- [public](public) — static assets and webmanifest
- [dev/scripts/configureVolumePermissions.sh](dev/scripts/configureVolumePermissions.sh) — helper script

## Onboarding checklist

1. Clone the repository and run `pnpm install`.
2. Start locally with `pnpm dev` and open the app.
3. Explore `src/app` to find pages and components to work on.
4. Run or add tests and linters before opening a pull request.

## Contributing

- Create a feature branch from `main`.
- Run linters and tests locally before committing.
- Open a PR and request a review.

## Questions / Contact

If you need help, open an issue or message the maintainer in the repo.

---

If you'd like this README expanded with environment variables, CI steps, or deployment instructions, tell me what to include.

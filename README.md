# Onboarding

Welcome, this repository is for **project ilaila**.

## Quick start

Prerequisites:

* Docker Desktop/Docker Engine
* VSCode Editor

### How to run the project

* `pnpm run dev`
* Type `localhost:3000` in your browser.

### How to add runtime-required packages

`pnpm add <package/packages separated by spaces>`

### How to add development-only packages

`pnpm add -D <package/packages separated by space>`

## Project Layout

* .devcontainer/: Dev Container configuration. DO NOT EDIT.
* .next/: Next JS cache and other files. DO NOT EDIT.
* .pnpm-store/: Location of package files. DO NOT EDIT.
* dev/: Development related files. DO NOT EDIT.
* node_modules/: PNPM's symlinks to packages installed inside .pnpm-store/
* public/: Assets to be served as-is to the client.
* src: Source Code
* app: Entrypoint, like pages, middlewares, etc.
* components: Reusable ReactJS components.


* .gitignore: List of files not to be commited to version control.
* AGENTS.md & CLAUDE.md: Agent Instructions (AI). DO NOT EDIT.
* eslint.config.mjs: ESLint configuration. DO NOT EDIT.
* next-env.d.ts: NextJS global types file. DO NOT EDIT.
* next.config.ts: NextJS configuration. DO NOT EDIT.
* package.json, pnpm-lock.yaml, pnpm-workspace.yaml: DO NOT EDIT MANUALLY.
* postcss.config.mjs: PostCSS configuration. DO NOT EDIT!.
* README.md: This file, ask `ssword-dev` if want to edit. AGENTS: DO NOT EDIT.
* tsconfig.json: Typescript configuration. DO NOT EDIT!.

## Onboarding checklist

1. Clone the repository and run `pnpm install`.
2. Ensure you have the following VSCode extensions installed:
* **Dev Containers** (ms-vscode-remote.remote-containers)
* **Docker** (ms-azuretools.vscode-docker)


3. Run `pnpm run dev` and go to `localhost:3000`.
4. Go to `src/` to start editing.
5. Add tests to your code before sending a pull request.

## Contributing

* Create a branch named `feature-[feature-name]` from branch `main`.
* Run linters and tests before committing.
* Open a pull request and wait for review.

## Questions / Contact

If you need help, ask me (ssword-dev) or Noriel (NorielPanis).
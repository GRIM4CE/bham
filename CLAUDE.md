# CLAUDE.md

## Project Overview

Bham is a personal portfolio monorepo built with Vue 3, TypeScript, and Vite, orchestrated by Turborepo. It is deployed via AWS Amplify.

### Structure

- `apps/portfolio` - Main portfolio application (Vue 3 + Vite)
- `apps/storybook` - Component showcase and documentation
- `packages/design-system` - Shared Vue 3 component library
- `packages/eslint-config` - Shared ESLint configuration
- `packages/typescript-config` - Shared TypeScript configuration

## Common Commands

- `npm run dev` - Start all apps in development mode
- `npm run build` - Build all apps and packages
- `npm run lint` - Lint all workspaces
- `npm run format` - Format files with Prettier
- `npm run clean` - Clean build outputs
- `npm run clean:deps` - Remove all node_modules directories

## Tech Stack

- **Runtime:** Node >= 20
- **Framework:** Vue 3
- **Language:** TypeScript ~5.3
- **Build:** Vite 5, Turborepo
- **Styling:** Sass
- **Testing:** Vitest (unit), Cypress (e2e)
- **Linting:** ESLint 8 with Vue + TypeScript configs
- **Formatting:** Prettier (100 char width, no trailing commas)

## Pull Requests

- Always create pull requests in a **ready** state (not draft). Do not use the `draft` flag when creating PRs.

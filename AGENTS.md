# Repository Guidelines

## Project Structure & Module Organization

This is a React 19 single-page application built with Vite. Application code lives in `src/`:

- `components/` contains reusable, feature-oriented UI; keep component-specific CSS beside the JSX (for example, `Header/Header.jsx` and `Header/Header.css`).
- `pages/` contains top-level route screens, while `solutions/` contains product-specific routes.
- `layout/`, `data/`, and `constants/` hold shared layout primitives, static content, and theme values.
- `assets/` stores imported images; `public/` is for files served unchanged, such as favicons and SVG sprites.

Routes are registered in `src/App.jsx`, and the browser entry point is `src/main.jsx`. Build output is generated in `dist/` and must not be committed.

## Build, Test, and Development Commands

- `npm ci` installs the exact dependency versions from `package-lock.json`.
- `npm run dev` starts the Vite development server with hot reload.
- `npm run build` creates an optimized production build in `dist/`.
- `npm run preview` serves the production build locally for final checks.
- `npm run lint` runs ESLint across JavaScript and JSX files.

Before opening a pull request, run `npm run lint && npm run build`.

## Coding Style & Naming Conventions

Follow the existing JSX style: two-space indentation, single quotes, no semicolons, and trailing commas in multiline expressions. Use PascalCase for components and component directories (`AboutPreview/AboutPreview.jsx`), camelCase for variables and data modules, and descriptive kebab-case URL paths. Prefer small function components and existing Tailwind utility classes; use colocated CSS when styles are too specific or complex for utilities. ESLint configuration is defined in `eslint.config.js` and includes React Hooks and Vite refresh rules.

## Testing Guidelines

No automated test framework or coverage threshold is currently configured. Treat a clean lint and production build as the minimum gate, then manually verify affected routes and responsive layouts with `npm run dev`. If tests are introduced, place them beside the implementation as `ComponentName.test.jsx` and add the corresponding `npm test` script.

## Commit & Pull Request Guidelines

Recent commits use short, imperative, sentence-case summaries such as `Add homepage hero and products section`. Keep each commit focused and avoid bundling unrelated asset or formatting changes. Pull requests should explain the user-visible change, list validation performed, link related issues, and include before/after screenshots for visual updates. Call out new dependencies, routes, or configuration changes explicitly.

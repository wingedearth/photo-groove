# Photo Groove

An Elm application for browsing and selecting photos.

## Prerequisites

- [Elm](https://elm-lang.org/) 0.19.1
- [Node.js](https://nodejs.org/) (for build tooling)

## Installation

```bash
npm install
```

## Development

Start the development server with auto-rebuild:

```bash
npm run dev
```

This will:
- Build the application
- Watch for changes and rebuild automatically
- Start a local server at http://localhost:8000

Alternatively, build manually:

```bash
npm run build
npm start
```

## Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/). See [COMMIT_CONVENTION.md](COMMIT_CONVENTION.md) for details.

Commit messages are validated automatically via git hooks.

## Versioning & Releases

This project uses [standard-version](https://github.com/conventional-changelog/standard-version) for automated versioning and changelog generation.

### Creating a Release

```bash
# Automatically determine version bump based on commits
npm run release

# Force specific version bumps
npm run release:patch  # 1.0.0 -> 1.0.1
npm run release:minor  # 1.0.0 -> 1.1.0
npm run release:major  # 1.0.0 -> 2.0.0
```

After running a release command:

```bash
git push --follow-tags origin main
```

## Project Structure

```
.
├── src/
│   └── PhotoGroove.elm   # Main application
├── index.html            # HTML entry point
└── app.js               # Compiled Elm output (generated)
```

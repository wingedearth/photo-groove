# Commit Message Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/).

## Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

## Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semi colons, etc)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

## Examples

```
feat: add photo filtering functionality

fix(gallery): correct thumbnail sizing issue

docs: update README with setup instructions

refactor: simplify image loading logic
```

## Breaking Changes

Add `BREAKING CHANGE:` in the footer or append `!` after type:

```
feat!: change API response format

BREAKING CHANGE: API now returns images in a different structure
```

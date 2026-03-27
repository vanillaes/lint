<h1 align="center">Lint-ES</h1>

Modern linting for ECMAScript Modules based on **[StandardJS][]**.

<div align="center">
  <a href="https://github.com/vanillaes/lint-es/releases"><img src="https://badgen.net/github/tag/vanillaes/lint-es?cache-control=no-cache" alt="GitHub Release"></a>
  <a href="https://www.npmjs.com/package/@vanillaes/lint-es"><img src="https://badgen.net/npm/v/@vanillaes/lint-es?icon=npm" alt="NPM Version"></a>
  <a href="https://www.npmjs.com/package/@vanillaes/lint-es"><img src="https://badgen.net/npm/dm/@vanillaes/lint-es?icon=npm" alt="NPM Downloads"></a>
  <a href="https://github.com/vanillaes/lint-es/actions"><img src="https://github.com/vanillaes/lint-es/workflows/Latest/badge.svg" alt="Latest Status"></a>
  <a href="https://github.com/vanillaes/lint-es/actions"><img src="https://github.com/vanillaes/lint-es/workflows/Release/badge.svg" alt="Release Status"></a>
</div>

## Features

- **No Configuration**. No `.eslint*` files to manage.
- Pre-loaded with the **[NeoStandard][]** (ie ESLint 9+ successor to **[StandardJS][]**) ruleset for clean JavaScript.
- Preloaded with the **[eslint-plugin-jsdoc][]** ruleset for linting JSDoc comments.
- The following are ignored by default: `node_modules/`, `coverage/`, `vendor/`, `*.min.js`, and hidden files.
- Files included in `.gitignore` will be ignored as well.
<!-- - Automatically correct linting issues using `lint-es --fix`. -->

## lint-es

### Arguments

`lint-es [...options] [pattern]`

- `[pattern]` - pattern of files to match (default `**/*.js`)
- `--fix` - automatically fix problems
<!-- - `-i` | `--ignore` - the ignore matcher pattern (default `**/node_modules/**`) -->
- `--root` - the root path to run the linter from (default `process.cwd()`)

### Usage

```sh
# lint the source
lint-es

```sh
# lint the source (matching a different pattern)
lint-es '**/*.mjs'

# lint the source (change the root)
lint-es --root src/
```

**Note: In Linux/OSX the matcher patterns must be delimited in quotes.**

[StandardJS]: https://standardjs.com/
[NeoStandard]: https://github.com/neostandard/neostandard
[eslint-plugin-jsdoc]: https://github.com/gajus/eslint-plugin-jsdoc

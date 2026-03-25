#!/usr/bin/env node
import { lint } from '../src/index.js'
import { createRequire } from 'node:module'
import { Command } from 'commander'
const require = createRequire(import.meta.url)
const pkg = require('../package.json')

const program = new Command()
  .name('lint-es')
  .description('Modern linting for ECMAScript Modules')
  .version(pkg.version, '-v, --version')

program.argument('[pattern]', '', '**/*.js')
  .description('Lint files matching the provided pattern (default *.spec.js)')
  .action((pattern) => {
    lint(pattern)
  })

program.parse(process.argv)

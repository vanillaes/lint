#!/usr/bin/env node
import { createRequire } from 'node:module'
import { Command } from 'commander'
const require = createRequire(import.meta.url)
const pkg = require('../package.json')

const program = new Command()
  .name('lint-es')
  .description('Modern linting for ECMAScript Modules')
  .version(pkg.version, '-v, --version')

program.parse(process.argv)

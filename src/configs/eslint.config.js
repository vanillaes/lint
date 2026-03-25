import jsdoc from 'eslint-plugin-jsdoc'
import neostandard from 'neostandard'

export default [
  ...neostandard({ noJsx: true, ts: false }),
  jsdoc.configs['flat/recommended-typescript-flavor']
]

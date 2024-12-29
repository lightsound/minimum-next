import path from 'node:path'
import { fileURLToPath } from 'node:url'
import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
import reactCompiler from 'eslint-plugin-react-compiler'
import tailwind from 'eslint-plugin-tailwindcss'

const compat = new FlatCompat({ baseDirectory: path.dirname(fileURLToPath(import.meta.url)) })

export default antfu(
  { react: true, ignores: ['src/type/auth.d.ts'] },
  {
    name: 'react-compiler/recommended',
    plugins: { 'react-compiler': reactCompiler },
    rules: { 'react-compiler/react-compiler': 'error' },
  },
  ...compat.extends('plugin:@next/next/core-web-vitals'),
  // Tailwind CSS
  ...tailwind.configs['flat/recommended'],
  { settings: { tailwindcss: { callees: ['cx'] } } },
  // https://github.com/sweepline/eslint-plugin-unused-imports/
  {
    rules: {
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': ['warn', { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }],
    },
  },
)

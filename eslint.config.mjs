import path from 'node:path'
import { fileURLToPath } from 'node:url'
import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
import reactCompiler from 'eslint-plugin-react-compiler'
import tailwind from 'eslint-plugin-tailwindcss'

const compat = new FlatCompat({ baseDirectory: path.dirname(fileURLToPath(import.meta.url)) })

export default antfu(
  { react: true, ignores: [] },
  {
    name: 'react-compiler/recommended',
    plugins: { 'react-compiler': reactCompiler },
    rules: { 'react-compiler/react-compiler': 'error' },
  },
  ...compat.extends('plugin:@next/next/core-web-vitals'),
  ...tailwind.configs['flat/recommended'],
  { settings: { tailwindcss: { callees: ['cn'] } } },
)

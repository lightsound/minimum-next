import type { NextConfig } from 'next'

export default {
  experimental: {
    ppr: true,
    reactCompiler: true,
  },
} satisfies NextConfig

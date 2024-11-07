import type { NextConfig } from 'next'

export default {
  experimental: {
    ppr: true,
    dynamicIO: true,
    reactCompiler: true,
  },
} satisfies NextConfig

import type { NextConfig } from "next";

export default {
	experimental: {
		ppr: true,
		dynamicIO: true,
		reactCompiler: true,
		authInterrupts: true,
	},
} satisfies NextConfig;

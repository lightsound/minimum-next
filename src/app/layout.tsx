import "~/css/globals.css";

import type { NextLayoutProps } from "~/app/type";

export default function RootLayout({ children }: NextLayoutProps) {
	return (
		<html lang="ja" suppressHydrationWarning={true}>
			<body suppressHydrationWarning={true}>{children}</body>
		</html>
	);
}

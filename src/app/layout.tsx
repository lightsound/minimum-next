import type { NextLayoutProps } from "~/app/type";
import "~/css/globals.css";

export default function RootLayout({
	children,
}: NextLayoutProps): React.ReactNode {
	return (
		<html lang="ja" suppressHydrationWarning={true}>
			<body suppressHydrationWarning={true}>{children}</body>
		</html>
	);
}

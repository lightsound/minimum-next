import Link from "next/link";
import type { NextLayoutProps } from "~/app/type";

export default function Layout({ children }: NextLayoutProps) {
	return (
		<div>
			<div className="bg-red-200 p-4">
				<nav className="flex gap-x-4 font-bold text-2xl *:underline">
					<Link href="/">ホーム</Link>
					<Link href="/users">ユーザーリスト</Link>
				</nav>
			</div>
			<div className="p-4 text-xl">{children}</div>
		</div>
	);
}

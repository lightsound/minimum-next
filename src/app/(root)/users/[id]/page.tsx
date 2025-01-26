import { getUser, getUserAlbums, getUserPosts } from "~/api";
import type { NextPageProps } from "~/app/type";
import { CustomSuspense } from "~/util/custom-suspense";
import { type Promisable, resolvePromisable } from "~/util/promisable";
import { sleep } from "~/util/sleep";

export default function Page({ params }: NextPageProps<{ id: string }>) {
	const userPromise = params.then((p) => getUser(p.id));

	return (
		<div className="space-y-4">
			<div>
				<div className="font-bold text-xl">ユーザー</div>
				<div>
					<div className="flex items-center">
						名前:
						<CustomSuspense height={20} width={160}>
							<ResolvePromise>
								{userPromise.then((user) => user.name)}
							</ResolvePromise>
						</CustomSuspense>
					</div>
					<div className="flex items-center">
						メールアドレス:
						<CustomSuspense height={20} width={160}>
							<ResolvePromise>
								{userPromise.then((user) => user.email)}
							</ResolvePromise>
						</CustomSuspense>
					</div>
				</div>
			</div>
			<CustomSuspense height={350} width="100%">
				<UserPosts userIdPromisable={userPromise.then((user) => user.id)} />
			</CustomSuspense>
			<CustomSuspense height={350} width="100%">
				<ResolvePromise>
					{userPromise.then((user) => (
						<UserAlbums userId={user.id} />
					))}
				</ResolvePromise>
			</CustomSuspense>
		</div>
	);
}

async function ResolvePromise({
	children,
}: { children: Promise<React.ReactNode> }) {
	return await children;
}

async function UserPosts({
	userIdPromisable,
}: { userIdPromisable: Promisable<string> }) {
	const userId = await resolvePromisable(userIdPromisable);
	const posts = await getUserPosts(userId);
	await sleep();

	return (
		<div className="space-y-2 border p-4">
			<div className="font-bold text-xl">記事一覧</div>
			<ol className="list-inside list-disc">
				{posts.map((post: { id: string; title: string }) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ol>
		</div>
	);
}

async function UserAlbums({ userId }: { userId: string }) {
	const posts = await getUserAlbums(userId);
	await sleep(4000);

	return (
		<div className="space-y-2 border p-4">
			<div className="font-bold text-xl">アルバム一覧</div>
			<ol className="list-inside list-disc ">
				{posts.map((post: { id: string; title: string }) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ol>
		</div>
	);
}

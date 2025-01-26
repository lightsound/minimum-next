import Link from "next/link";
import { getUsers } from "~/api";

export default async function Page() {
	const users = await getUsers();

	return (
		<ul className="list-inside list-disc border p-4">
			{users.map((user: { id: string; name: string }) => (
				<li key={user.id}>
					<Link href={`/users/${user.id}`}>{user.name}</Link>
				</li>
			))}
		</ul>
	);
}

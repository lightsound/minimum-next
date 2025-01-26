export async function sleep(ms = 2000) {
	await new Promise((resolve) => setTimeout(resolve, ms));
	return null;
}

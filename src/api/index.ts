import "server-only";
import {
	// unstable_cacheLife as cacheLife,
	unstable_cacheTag as cacheTag,
	revalidateTag,
} from "next/cache";
import { cache } from "react";

const URL = "https://jsonplaceholder.typicode.com";

// getUsers
const getUsersTag = "getUsers";
export const getUsers = cache(async () => {
	"use cache";
	cacheTag(getUsersTag);
	const res = await fetch(`${URL}/users`);
	return res.json();
});
export const preloadGetUsers = () => void getUsers();
export const revalidateGetUsers = () => revalidateTag(getUsersTag);

// getUser
const getUserTag = "getUser";
export const getUser = cache(async (userId: string) => {
	// "use cache";
	// cacheTag(getUserTag);
	// await sleep();
	const res = await fetch(`${URL}/users/${userId}`);
	return res.json();
});
export const preloadGetUser = (args: Parameters<typeof getUser>) =>
	void getUser(...args);
export const revalidateGetUser = () => revalidateTag(getUserTag);

// getUserPosts
const getUserPostsTag = "getUserPosts";
export const getUserPosts = cache(async (userId: string) => {
	// "use cache";
	// cacheTag(getUserPostsTag);
	const res = await fetch(`${URL}/users/${userId}/posts`);
	return res.json();
});
export const preloadGetUserPosts = (args: Parameters<typeof getUserPosts>) =>
	void getUserPosts(...args);
export const revalidateGetUserPosts = () => revalidateTag(getUserPostsTag);

// getUserAlbums
const getUserAlbumsTag = "getUserAlbums";
export const getUserAlbums = cache(async (userId: string) => {
	// "use cache";
	// cacheTag(getUserAlbumsTag);
	const res = await fetch(`${URL}/users/${userId}/albums`);
	return res.json();
});
export const preloadGetUserAlbums = (args: Parameters<typeof getUserAlbums>) =>
	void getUserAlbums(...args);
export const revalidateGetUserAlbums = () => revalidateTag(getUserAlbumsTag);

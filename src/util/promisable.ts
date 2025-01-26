export type Promisable<T> = T | Promise<T>;

export const resolvePromisable = <T>(value: Promisable<T>): Promise<T> => {
	return Promise.resolve(value);
};

export interface HTTPResult<T> {
	message: string | null;
	results: T | null;
	status: number;
}

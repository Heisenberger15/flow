import { useMemo, useRef } from "react";

import type { MutableRefObject, RefObject } from "react";

export interface AsyncMutableRefObject<T> extends MutableRefObject<T> {
	readonly asyncCurrent: Promise<Exclude<T, null | undefined>>;
}
export interface AsyncRefObject<T> extends RefObject<T> {
	readonly asyncCurrent: Promise<Exclude<T, null | undefined>>;
}
export function useAsyncRef<T>(_initialValue: T): AsyncMutableRefObject<T>;
export function useAsyncRef<T>(_initialValue: T | null): AsyncRefObject<T>;
export function useAsyncRef<T = undefined>(): AsyncMutableRefObject<
	T | undefined
>;
export function useAsyncRef<T>(obj?: T | null) {
	const pendingAwaits = useRef<any[]>([]);
	const ref = useRef(obj);
	const handler: ProxyHandler<typeof ref> = useMemo(
		() => ({
			get(target, prop, receiver) {
				if (prop !== "asyncCurrent") return Reflect.get(target, prop, receiver);

				const getTarget = async () => {
					if (
						target.current !== null &&
						typeof target.current !== "undefined"
					) {
						return target.current;
					}
					const current = await new Promise((resolve) =>
						pendingAwaits.current.push(resolve),
					);
					return current;
				};
				return getTarget();
			},
			set(target, p, newValue) {
				if (p !== "current") return Reflect.set(target, p, newValue);
				try {
					return Reflect.set(target, p, newValue);
				} finally {
					if (newValue !== null && typeof newValue !== "undefined") {
						while (pendingAwaits.current.length) {
							const resolve = pendingAwaits.current.pop();
							resolve(target.current);
						}
					}
				}
			},
		}),
		[],
	);
	return useMemo(() => new Proxy(ref, handler), [handler]);
}

"use client";

import { CacheProvider } from "@emotion/react";
import { createEmotionCache, MantineProvider } from "@mantine/core";
import { useServerInsertedHTML } from "next/navigation";
import { PropsWithChildren } from "react";

// must be created outside of the component to persist across renders
const cache = createEmotionCache({ key: "flow", prepend: true });
cache.compat = true;

export function RootStyleRegistry({ children }: PropsWithChildren) {
	useServerInsertedHTML(() => (
		<style
			data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
			dangerouslySetInnerHTML={{
				__html: Object.values(cache.inserted).join(" "),
			}}
		/>
	));

	return (
		<CacheProvider value={cache}>
			<MantineProvider emotionCache={cache}>{children}</MantineProvider>
		</CacheProvider>
	);
}

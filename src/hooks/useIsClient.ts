import { isClient } from "@/utils";
import { useEffect, useState } from "react";

export function useIsClient() {
	const [hydrated, setHydrated] = useState(false);
	useEffect(() => {
		if (isClient()) {
			setHydrated(true);
		}
	}, []);
	return hydrated;
}

import { useLocalStorage } from "@mantine/hooks";
import { useIsClient } from ".";

export type Theme = "day" | "night";

export const useTheme = () => {
	const [theme, setTheme] = useLocalStorage<Theme>({
		key: "theme",
		defaultValue: "night",
		getInitialValueInEffect: true,
	});
	const toggle = () =>
		theme !== "night" ? setTheme("night") : setTheme("day");
	const isClient = useIsClient();

	return { theme, setTheme, toggle, isClient };
};

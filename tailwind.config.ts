import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
		screens: {
			mm: "275px",
			base: "370px",
			sm: "600px",
			md: "768px",
			lt: "868px",
			lg: "976px",
			ipad: "1024px",
			mlap: "1200px",
			mdl: "1356px",
			xl: "1440px",
			xxl: "1600px",
			"3xl": "2048px",
			"4k": "2560px",
		},
	},
	plugins: [],
};
export default config;

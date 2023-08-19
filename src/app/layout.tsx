import MainLayout from "@/components/templates/layouts/main-layout";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
	// display: "swap",
	variable: "--montserrat-font",
});

export const metadata: Metadata = {
	title: "Flow",
	description: "Generated by sina parsa :)))",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={montserrat.variable}>
			<body>
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	);
}

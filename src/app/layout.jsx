import { Plus_Jakarta_Sans } from "next/font/google";
import "../common/style/globals.css";
import Navbar from "@/common/component/navbar/Navbar";
import Footer from "@/common/module/Footer";
import { Providers } from "@/common/component/element/Providers";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
	title: "Horizon - Cybersécurité & Intelligence Artificielle",
	description: "Expert en sécurisation des données, développement IA et webservices. Solutions Safe Data, consulting technique et automatisation pour optimiser votre productivité.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr" suppressHydrationWarning>
			<head>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link rel="dns-prefetch" href="//vercel.app" />
				<link rel="dns-prefetch" href="//cal.com" />
				<meta name="theme-color" content="#5515df" />
				<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
			</head>
			<body className={`${plus_Jakarta_Sans.className} dark:bg-black`}>
				<Providers>
					<header className="flex justify-center items-center">
						<Navbar />
					</header>
					<main>
						{children}
					</main>
					<footer className="flex justify-center items-center">
						<Footer />
					</footer>
				</Providers>
			</body>
		</html>
	);
}

import React from "react";
import Link from "next/link";

const Footer = () => {
	return (
		<div className="flex flex-col items-center justify-center w-full">
			<div className="flex flex-col items-center justify-center py-20 ">
				<div className="flex flex-col items-center space-y-4">
					<div className="flex space-x-6 text-sm">
						<Link 
							href="/mentions-legales" 
							className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
						>
							Mentions légales
						</Link>
					</div>
					<p className="text-sm">© 2025 Horizon. Tous droits réservés.</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;

import Image from "@/common/component/element/Image";
import React from "react";
import { WiDayCloudy } from "react-icons/wi";
import { FaCode } from "react-icons/fa";
import ComponentTransition from "@/common/component/element/ComponentTransition";

const Card = () => {
	return (
		<div className="py-10 flex gap-10 justify-center flex-row flex-wrap relative">
			<div className="absolute  z-[-9] glowbg w-[100%] md:w-[500px] h-[400px]  left-0 "></div>
			<ComponentTransition className="w-full overflow-hidden px-10 py-5 md:basis-[30%] h-auto min-h-[280px] bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
				<WiDayCloudy size={50} />
				<h3 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
					Safe Data & Cybersécurité
				</h3>
				<h4 className="text-sm text-neutral-800 dark:text-neutral-300">
					Protection avancée de vos données
				</h4>
				<p className="text-base text-neutral-700 dark:text-neutral-400 mt-5 line-clamp-3">
					Sécurisation multicouche contre les cybermenaces et protection des infrastructures critiques.
				</p>
			</ComponentTransition>
			<ComponentTransition
				delay={0.2}
				className="w-full h-auto md:h-[300px] md:basis-[65%] overflow-hidden bg-neutral-100 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
			>
				<Image
					src="/img1.webp"
					alt="Services de cybersécurité"
					width={580}
					height={300}
					loading="lazy"
					className="w-full object-cover scale-110"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 580px"
				/>
			</ComponentTransition>
			<ComponentTransition
				delay={0.1}
				className="w-full h-auto md:h-[250px] object-cover md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
			>
				<Image
					src="/img.webp"
					alt="Intelligence artificielle"
					width={280}
					height={250}
					loading="lazy"
					className="w-full h-full object-cover scale-110"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 280px"
				/>
			</ComponentTransition>
			<ComponentTransition
				delay={0.1}
				className="w-full h-auto min-h-[240px] px-10 py-5 md:basis-[30%] overflow-hidden border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
			>
				<FaCode size={40} />
				<h3 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
					Intelligence Artificielle
				</h3>
				<h4 className="text-sm text-neutral-700 dark:text-neutral-300">
					Automatisation intelligente par IA
				</h4>
				<p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
					Génération de contenu, création visuelle et traductions instantanées.
				</p>
			</ComponentTransition>

			<ComponentTransition
				delay={0.1}
				className="w-full h-auto min-h-[240px] px-10 py-5 md:basis-[30%] relative overflow-hidden border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
			>
				<div className="absolute  glowbg inset-0  left-0 "></div>
				<FaCode size={40} />
				<h3 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
					Développement Fullstack
				</h3>
				<h4 className="text-sm text-neutral-700 dark:text-neutral-300">
					Webservices haute performance
				</h4>
				<p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
					Développement fullstack sécurisé et solutions web sur-mesure.
				</p>
			</ComponentTransition>

			{/* <ComponentTransition
				delay={0.1}
				className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
			>
				<FaCode size={40} />
				<h2 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
					Simplify, Optimize, Succeed
				</h2>
				<h3 className="text-sm text-neutral-700 dark:text-neutral-300">
					Your Gateway to Streamlined Excellence
				</h3>
				<p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
					Simplify your SaaS experience with Teaser, where optimization meets
					success
				</p>
			</ComponentTransition> */}
		</div>
	);
};

export default Card;

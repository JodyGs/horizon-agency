import ComponentTransition from "@/common/component/element/ComponentTransition";
import Image from "next/image";
import React from "react";
import { FaPiedPiper } from "react-icons/fa";
import { ButtonSpot } from "@/common/component/element/ButtonSpot";

export default function SpecificNeed() {
	return (
		<div className="h-auto max-w-[1500px]  px-10 xl:px-20 pb-20">
			<ComponentTransition className="border-[1px] border-neutral-600 rounded-3xl max-md:flex-col flex">
				<div className="w-full h-auto md:h-[400px] md:basis-[50%] overflow-hidden  max-md:rounded-t-3xl  lg:rounded-tl-3xl lg:rounded-bl-3xl ">
					<Image
						src="/robot.webp"
						alt="Intelligence artificielle et automatisation"
						width={400}
						height={400}
						loading="lazy"
						className="w-full object-cover md:top-[-100px] relative"
					/>
				</div>
				<div className="w-full px-5 lg:px-10 py-5 md:basis-[50%] h-[400px] bg-neutral-50 dark:bg-neutral-950/50   rounded-br-3xl rounded-tr-3xl">
					<FaPiedPiper size={50} />
					<h3 className="py-2 text-2xl font-bold text-neutral-800 dark:text-neutral-300">
						Solutions IA sur-mesure ?
					</h3>
					<p className="mt-5 mb-10 text-base text-neutral-700 max-xl:line-clamp-5 dark:text-neutral-300">
						Nous développons des solutions d&apos;intelligence artificielle adaptées à vos besoins : 
						génération automatique de fiches produits, création d&apos;images et vidéos personnalisées, 
						traductions multilingues instantanées, et automatisation de vos processus métier. 
						Optimisez votre productivité avec des outils IA conçus spécifiquement pour votre activité.
					</p>
					<ButtonSpot
						exLink={"https://cal.com/jody.gs/30min"}
						className="!px-10 "
						title="Découvrir nos solutions IA"
					/>
				</div>
			</ComponentTransition>
		</div>
	);
}
import ComponentTransition from "@/common/component/element/ComponentTransition";
import PricingCard from "@/common/component/element/PricingCard";
import SectionHeading from "@/common/component/element/SectionHeading";
import Image from "next/image";
import React from "react";
import { AiFillSliders } from "react-icons/ai";
import { FaPiedPiper } from "react-icons/fa";
import { ButtonSpot } from "@/common/component/element/ButtonSpot";

export default function Pricing() {
	return (
		<div className="h-auto max-w-[1500px]  px-10 xl:px-20 pb-20">
			<ComponentTransition className="flex justify-center py-5">
				<SectionHeading
					title="Plans tarifaires"
					icon={<AiFillSliders size={30} />}
				/>
			</ComponentTransition>
			<ComponentTransition
				delay={0.1}
				className="flex flex-col items-center justify-center"
			>
				<h2 className="text-3xl md:text-5xl py-5 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f]  bg-text md:w-[50%] text-transparent font-bold">
					Une tarification simple
				</h2>
				<p className="text-base text-center md:text-2xl text-neutral-500 dark:text-neutral-300">
					Découvrez nos offres adaptées à tous les besoins.
				</p>
			</ComponentTransition>

			<PricingCard />

			<ComponentTransition className="border-[1px] border-neutral-600 rounded-3xl max-md:flex-col flex">
				<div className="w-full h-auto md:h-[400px] md:basis-[50%] overflow-hidden  max-md:rounded-t-3xl  lg:rounded-tl-3xl lg:rounded-bl-3xl ">
					<Image
						src="/robot.webp"
						alt="Header Image"
						width={400}
						height={400}
						loading="lazy"
						className="w-full object-cover md:top-[-100px] relative"
					/>
				</div>
				<div className="w-full px-5 lg:px-10 py-5 md:basis-[50%] h-[400px] bg-neutral-50 dark:bg-neutral-950/50   rounded-br-3xl rounded-tr-3xl">
					<FaPiedPiper size={50} />
					<h3 className="py-2 text-2xl font-bold text-neutral-800 dark:text-neutral-300">
						Un besoin spécifique ?
					</h3>
					<p className="mt-5 mb-10 text-base text-neutral-700 max-xl:line-clamp-5 dark:text-neutral-300">
						Notre mission est de simplifier vos processus et améliorer votre
						efficacité. Si vous avez des besoins spécifiques, nous adaptons nos
						services pour répondre parfaitement à vos attentes et garantir votre
						succès.
					</p>
					<ButtonSpot
						exLink={"https://cal.com/jody.gs/30min"}
						className="!px-10 "
						title="Je veux en discuter"
					/>
				</div>
			</ComponentTransition>
		</div>
	);
}

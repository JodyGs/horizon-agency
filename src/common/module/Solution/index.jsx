import SectionHeading from "@/common/component/element/SectionHeading";
import React from "react";
import { FaUmbrella } from "react-icons/fa";
import CardSolution from "./component/Card";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import Button from "@/common/component/element/Button";

const Solution = () => {
	return (
		<div className="h-auto max-w-[1500px]  px-10 xl:px-20 pb-20">
			<ComponentTransition className="flex justify-center py-5">
				<SectionHeading title="Nos solutions" icon={<FaUmbrella size={30} />} />
			</ComponentTransition>
			<ComponentTransition
				delay={0.1}
				className="flex justify-center items-center flex-col"
			>
				<h2 className="text-3xl md:text-5xl py-5 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f]  bg-text md:w-[50%] text-transparent font-bold">
					Consulting stratégique et expertise technique
				</h2>
				<p className="text-base md:text-2xl text-center text-neutral-500 dark:text-neutral-300">
					Mise en relation d&apos;experts, conseil stratégique et solutions techniques sur-mesure.
				</p>
			</ComponentTransition>
			<CardSolution />
		</div>
	);
};

export default Solution;

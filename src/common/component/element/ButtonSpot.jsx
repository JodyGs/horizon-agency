"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export const ButtonSpot = ({ title, className, exLink, onClick }) => {
	const btnRef = useRef(null);
	const spanRef = useRef(null);

	const router = useRouter();

	const handleClick = () => {
		if (onClick) {
			onClick();
		} else if (exLink) {
			router.push(exLink);
		}
	};

	useEffect(() => {
		const handleMouseMove = (e) => {
			const { width } = e.target.getBoundingClientRect();
			const offset = e.offsetX;
			const left = `${(offset / width) * 100}%`;

			if (spanRef.current) {
				spanRef.current.style.left = left;
				spanRef.current.style.transition = 'left 250ms ease-out';
			}
		};

		const handleMouseLeave = () => {
			if (spanRef.current) {
				spanRef.current.style.left = '50%';
				spanRef.current.style.transition = 'left 100ms ease-out';
			}
		};

		const btn = btnRef.current;

		if (btn) {
			btn.addEventListener("mousemove", handleMouseMove);
			btn.addEventListener("mouseleave", handleMouseLeave);
		}

		return () => {
			if (btn) {
				btn.removeEventListener("mousemove", handleMouseMove);
				btn.removeEventListener("mouseleave", handleMouseLeave);
			}
		};
	}, []);

	return (
		<motion.button
			onClick={handleClick}
			whileTap={{ scale: 0.985 }}
			ref={btnRef}
			className={clsx(
				className,
				`relative w-full group  max-w-xs overflow-hidden rounded-full bg-slate-950 dark:bg-neutral-100 px-4 py-2 text-base font-medium  text-white`
			)}
		>
			<span className="pointer-events-none relative z-10 mix-blend-difference">
				{title}
			</span>

			<span
				ref={spanRef}
				className="pointer-events-none rounde absolute left-[50%] top-[50%] h-16 group-hover:w-16 w-0 transition-all duration-500 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100 dark:bg-neutral-950"
			/>
		</motion.button>
	);
};

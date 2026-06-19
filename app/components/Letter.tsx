"use client";

import { motion } from "framer-motion";

interface LetterProps {
	letter: string;
	left: string;
	bottom: string;
	rotation?: number;
}

export default function Letter({
	letter,
	left,
	bottom,
	rotation = 0,
}: LetterProps) {
	return (
		<motion.div
			drag
			dragMomentum={false}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 1.02 }}
			className="absolute z-[999] cursor-grab"
			style={{
				left,
				bottom,
			}}
		>
			<motion.div
				className="p-[0.2vh] border-[0.2vh] rounded-[0.2vh] drop-shadow-md drop-shadow-neutral-800/50 bg-white"
				initial={{ rotate: rotation }}
				animate={{
					y: [0, -8, 0],
					rotate: [rotation, rotation - 2, rotation],
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			>
				<p className="text-[8vh] sketches bg-black text-white px-[1vw] pt-[1vh] leading-[8vh] rounded-[0.2vh]">
					{letter}
				</p>
			</motion.div>
		</motion.div>
	);
}

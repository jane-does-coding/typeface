"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingProps {
	children: ReactNode;
	left: string;
	bottom: string;
	rotation?: number;
	duration?: number;
}

export default function Floating({
	children,
	left,
	bottom,
	rotation = 0,
	duration = 4,
}: FloatingProps) {
	return (
		<motion.div
			drag
			dragMomentum={false}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 1.02 }}
			className="absolute z-998 cursor-grab min-w-fit drop-shadow-md drop-shadow-neutral-800/50 "
			style={{
				left,
				bottom,
			}}
		>
			<motion.div
				initial={{ rotate: rotation }}
				animate={{
					y: [0, -8, 0],
					rotate: [rotation, rotation - 2, rotation],
				}}
				transition={{
					duration,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			>
				{children}
			</motion.div>
		</motion.div>
	);
}

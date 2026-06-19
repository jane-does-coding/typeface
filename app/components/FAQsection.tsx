"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function FAQDragSection() {
	const dropRef = useRef<HTMLDivElement>(null);

	const questions = [
		{
			id: "ai",
			label: "AI USAGE",
			answer:
				"AI may be used for brainstorming, but all final work must be your own.",
			left: "6vw",
			bottom: "35vh",
			rotation: -5,
		},
		{
			id: "contact",
			label: "Contact",
			answer: "Reach out through Discord or email if you need help.",
			left: "45vw",
			bottom: "75vh",
			rotation: 5,
		},
		{
			id: "font",
			label: "Font Creation",
			answer: "Create your own font and build a website that showcases it.",
			left: "6vw",
			bottom: "65vh",
			rotation: 1,
		},
		{
			id: "submission",
			label: "Submission",
			answer: "Submit your website link and font files before the deadline.",
			left: "65vw",
			bottom: "57vh",
			rotation: 1,
		},
		{
			id: "age",
			label: "Age",
			answer: "Participants must be under 18 years old.",
			left: "82vw",
			bottom: "35vh",
			rotation: 1,
		},
	];

	const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

	return (
		<section className="min-h-screen flex items-center justify-center relative z-2 pt-[5vh]">
			{/* Drop Zone */}
			<motion.div
				layout
				ref={dropRef}
				className="p-[0.2vh] border-[0.2vh] rounded-[0.2vh] drop-shadow-md drop-shadow-neutral-800/50 bg-white"
			>
				<motion.p
					layout
					className={`px-[3vw] pt-[1vh] leading-[8vh] rounded-[0.2vh] ${
						activeQuestion
							? "bg-black text-white sketches text-[8vh] leading-[8vh]"
							: "text-black kg-chasing text-[4vh] leading-[4vh]"
					} `}
				>
					{activeQuestion
						? questions.find((q) => q.id === activeQuestion)?.label
						: "Drag & Drop"}
				</motion.p>
			</motion.div>

			{/* Answer Box */}
			<div className="absolute top-[62vh] w-[35vw] flex items-center justify-center py-[2vh] px-[1vw] bg-white border-[0.2vh] border-black">
				<p className="text-[3vh] kg-chasing text-center">
					{activeQuestion
						? questions.find((q) => q.id === activeQuestion)?.answer
						: "Drop a question above to view its answer."}
				</p>
			</div>

			{/* Questions */}
			{questions.map((question) => {
				const hidden = activeQuestion === question.id;

				return (
					<motion.div
						key={question.id}
						drag
						dragMomentum={false}
						className="absolute cursor-grab active:cursor-grabbing z-10"
						style={{
							left: question.left,
							bottom: question.bottom,
						}}
						initial={false}
						animate={{
							opacity: hidden ? 0 : 1,
							scale: hidden ? 0.85 : 1,
							rotate: question.rotation,
						}}
						transition={{
							duration: 0.35,
							type: "spring",
						}}
						onDragEnd={(e) => {
							if (!dropRef.current) return;

							const draggedRect = (
								e.target as HTMLElement
							).getBoundingClientRect();

							const dropRect = dropRef.current.getBoundingClientRect();

							const intersects =
								draggedRect.left < dropRect.right &&
								draggedRect.right > dropRect.left &&
								draggedRect.top < dropRect.bottom &&
								draggedRect.bottom > dropRect.top;

							if (intersects) {
								setActiveQuestion(question.id);
							}
						}}
					>
						<div className="p-[0.2vh] border-[0.2vh] rounded-[0.2vh] drop-shadow-md drop-shadow-neutral-800/50 bg-white">
							<p className="text-[8vh] sketches bg-black text-white px-[1vw] pt-[1vh] leading-[8vh] rounded-[0.2vh]">
								{question.label}
							</p>
						</div>
					</motion.div>
				);
			})}
		</section>
	);
}

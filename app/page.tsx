"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Home() {
	const [activeSection, setActiveSection] = useState(0);
	const [expanded, setExpanded] = useState(false);

	const section1Ref = useRef<HTMLElement>(null);
	const section2Ref = useRef<HTMLElement>(null);
	const section3Ref = useRef<HTMLElement>(null);
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const dragRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePos({
				x: e.clientX,
				y: e.clientY,
			});
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	const floatingAnimation = {
		animate: {
			y: [0, -10, 5, -8, 0],
			x: [0, 4, -3, 2, 0],
			rotate: [0, 2, -1.5, 1, 0],
		},
		transition: {
			duration: 12,
			repeat: Infinity,
			ease: "easeInOut",
		},
	};

	useEffect(() => {
		const handleScroll = () => {
			const sections = [
				section1Ref.current,
				section2Ref.current,
				section3Ref.current,
			];

			const scrollMiddle = window.scrollY + window.innerHeight / 2;

			let currentSection = 0;

			sections.forEach((section, index) => {
				if (!section) return;

				if (scrollMiddle >= section.offsetTop) {
					currentSection = index;
				}
			});

			setActiveSection(currentSection);
		};

		handleScroll();

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const letters = "Made a font?".split("");

	return (
		<div className="min-h-screen w-full">
			<img
				src="/imgs/texture-bg.png"
				className="w-full h-screen fixed top-0 left-0 z-0 opacity-[4%] pointer-events-none"
				alt=""
			/>

			<div
				className="fixed inset-0 z-0 pointer-events-none"
				style={{
					backgroundImage: "url('/imgs/texture-bg.png')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					opacity: 0.25,

					maskImage: `radial-gradient(
			circle 3.5vw at ${mousePos.x}px ${mousePos.y}px,
			black 0%,
			transparent 100%
		)`,

					WebkitMaskImage: `radial-gradient(
			circle 3.5vw at ${mousePos.x}px ${mousePos.y}px,
			black 0%,
			transparent 100%
		)`,
				}}
			/>
			<img
				src="/imgs/hackclub.svg"
				className="absolute left-[1vw] top-[0vh] w-[12vw] z-10"
				alt=""
			/>
			<nav
				onClick={() => setExpanded((prev) => !prev)}
				className={`fixed top-0 right-0 w-[15vw] border-b-[0.2vh] border-l-[0.2vh] border-black rounded-bl-[0.3vh] overflow-hidden z-50 cursor-pointer transition-all duration-500 ease-in-out bg-white ${
					expanded ? "h-[24vh]" : "h-[8vh]"
				}`}
			>
				<div
					className="absolute top-0 left-0 w-full transition-transform duration-500 ease-in-out cursor-pointer"
					style={{
						transform: expanded
							? "translateY(0)"
							: `translateY(-${activeSection * 8}vh)`,
					}}
				>
					<p className="h-[8vh] flex items-center justify-center text-[2.7vh] kg-chasing cursor-pointer border-b-[0.2vh] border-black">
						What is it?
					</p>

					<p className="h-[8vh] flex items-center justify-center text-[2.7vh] kg-chasing cursor-pointer border-b-[0.2vh] border-black">
						What to Submit?
					</p>

					<p className="h-[8vh] flex items-center justify-center text-[2.7vh] kg-chasing cursor-pointer border-b-[0.2vh] border-black">
						FAQ
					</p>
				</div>
			</nav>

			{/* Horizontal Lines */}
			<div className="w-full h-[0.2vh] z-5 bg-black absolute top-[3vh]"></div>
			<div className="w-full h-[0.2vh] z-5 bg-black absolute top-[3.75vh]"></div>
			<div className="w-full h-[0.2vh] z-5 bg-black absolute bottom-[3vh]"></div>
			<div className="w-full h-[0.2vh] z-5 bg-black absolute bottom-[3.75vh]"></div>

			{/* Vertical Lines */}

			<div className="h-screen fixed top-0 left-[1.75vw] w-[0.2vh] z-5 bg-black"></div>
			<div className="h-screen fixed top-0 left-[2.25vw] w-[0.2vh] z-5 bg-black"></div>

			<div className="h-screen fixed top-0 right-[1.75vw] w-[0.2vh] z-5 bg-black"></div>
			<div className="h-screen fixed top-0 right-[2.25vw] w-[0.2vh] z-5 bg-black"></div>

			<section ref={section1Ref} className="min-h-screen relative z-6">
				<div ref={dragRef} className="absolute inset-0 pointer-events-none" />
				<motion.div
					drag
					dragMomentum={false}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 1.02 }}
					className="absolute bottom-[27vh] left-[7vw] z-[999] cursor-grab"
				>
					<motion.div
						className="p-[0.2vh] border-[0.2vh] rounded-[0.2vh] drop-shadow-md drop-shadow-neutral-800/50"
						initial={{ rotate: -8 }}
						animate={{
							y: [0, -8, 0],
							rotate: [-8, -6, -8],
						}}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					>
						<p className="text-[8vh] sketches bg-black text-white px-[1vw] pt-[1vh] leading-[8vh] rounded-[0.2vh]">
							H
						</p>
					</motion.div>
				</motion.div>
				<motion.div
					drag
					dragMomentum={false}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 1.02 }}
					className="absolute bottom-[16vh] left-[12vw] z-[999] cursor-grab"
				>
					<motion.div
						className="p-[0.2vh] border-[0.2vh] rounded-[0.2vh] drop-shadow-md drop-shadow-neutral-800/50"
						initial={{ rotate: 8 }}
						animate={{
							y: [0, -8, 0],
							rotate: [8, 6, 8],
						}}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					>
						<p className="text-[8vh] sketches bg-black text-white px-[1vw] pt-[1vh] leading-[8vh] rounded-[0.2vh]">
							A
						</p>
					</motion.div>
				</motion.div>
				<motion.div
					drag
					dragMomentum={false}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 1.02 }}
					className="absolute bottom-[22vh] left-[20vw] z-[999] cursor-grab"
				>
					<motion.div
						className="p-[0.2vh] border-[0.2vh] rounded-[0.2vh] drop-shadow-md drop-shadow-neutral-800/50"
						initial={{ rotate: 4 }}
						animate={{
							y: [0, -8, 0],
							rotate: [4, 2, 4],
						}}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					>
						<p className="text-[8vh] sketches bg-black text-white px-[1vw] pt-[1vh] leading-[8vh] rounded-[0.2vh]">
							C
						</p>
					</motion.div>
				</motion.div>
				<motion.div
					drag
					dragMomentum={false}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 1.02 }}
					className="absolute bottom-[18vh] left-[28vw] z-[999] cursor-grab"
				>
					<motion.div
						className="p-[0.2vh] border-[0.2vh] rounded-[0.2vh] drop-shadow-md drop-shadow-neutral-800/50"
						initial={{ rotate: 8 }}
						animate={{
							y: [0, -8, 0],
							rotate: [8, 6, 8],
						}}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					>
						<p className="text-[8vh] sketches bg-black text-white px-[1vw] pt-[1vh] leading-[8vh] rounded-[0.2vh]">
							K
						</p>
					</motion.div>
				</motion.div>
				<h2 className="text-left ml-[12vw] kg-chasing text-[6vh] pt-[15vh]">
					Ptss
				</h2>
				<h1 className="sketches-by-duerer text-[17.5vh] mx-auto w-fit mt-[-2vh]">
					typeface
				</h1>
				<h2 className="text-left ml-[27vw] mx-pixel text-[8vh] mt-[-2vh]">
					Have you ever....
				</h2>
				<h2 className="text-left ml-[57vw] sketches text-[8vh] font-semibold flex">
					{letters.map((letter, index) => {
						const y1 = Math.random() * 8 - 4;
						const y2 = Math.random() * 12 - 6;
						const r1 = Math.random() * 4 - 2;
						const r2 = Math.random() * 4 - 2;
						const x1 = Math.random() * 4 - 2;
						const x2 = Math.random() * 4 - 2;

						return (
							<motion.span
								key={index}
								className="inline-block"
								animate={{
									y: [0, y1, y2, 0],
									x: [0, x1, x2, 0],
									rotate: [0, r1, r2, 0],
								}}
								transition={{
									duration: 2 + Math.random() * 2,
									repeat: Infinity,
									repeatType: "mirror",
									ease: "easeInOut",
								}}
							>
								{letter === " " ? "\u00A0" : letter}
							</motion.span>
						);
					})}
				</h2>
				{/* <h2 className="text-left ml-[46vw] city-of-boy text-[8vh] font-semibold mt-[-2vh]">
					Submit
				</h2> */}
				<div className="p-[0.4vh] border-[0.2vh] min-w-fit w-fit min-h-fit relative ml-[46vw] mt-[1vh] rounded-[0.2vh] cursor-pointer">
					<p className="city-of-boy w-fit text-[5vh] px-[2vw] py-[0.5vh] relative rounded-[0.2vh] w-fit bg-black text-white">
						Submit
					</p>
				</div>
			</section>

			<div className="flex w-[100vw] mx-auto items-center justify-between gap-[0.75vh] mt-[-3vh] bg-white relative z-2">
				<div className="flex flex-col items-center justify-center w-full flex-1 px-0 border-r-[0.2vh] border-black py-[3vh]">
					<p className="kg-chasing text-[3vh] font-semibold mb-[0.75vh]">
						1 Hour
					</p>
					<p className="kg-chasing text-[2.5vh] text-center">
						Custom Stickers!!!
					</p>
				</div>
				<div className="flex flex-col items-center justify-center w-full flex-1 px-0 border-x-[0.2vh] border-black py-[3vh]">
					<p className="kg-chasing text-[3vh] font-semibold mb-[0.75vh]">
						5 Hours
					</p>
					<p className="kg-chasing text-[2.5vh] text-center">Plushie</p>
				</div>
				<div className="flex flex-col items-center justify-center w-full flex-1 px-0 border-x-[0.2vh] border-black py-[3vh]">
					<p className="kg-chasing text-[3vh] font-semibold mb-[0.75vh]">
						10 Hours
					</p>
					<p className="kg-chasing text-[2.5vh] text-center">T-Shirt</p>
				</div>
				<div className="flex flex-col items-center justify-center w-full flex-1 px-0 border-l-[0.2vh] border-black py-[3vh]">
					<p className="kg-chasing text-[3vh] font-semibold mb-[0.75vh]">
						15 Hours
					</p>
					<p className="kg-chasing text-[2.5vh] text-center">eReader</p>
				</div>
			</div>
			<div className="w-full h-[0.2vh] bg-black relative z-2"></div>
			<div className="w-full h-[0.2vh] bg-black mt-[0.75vh] relative z-2"></div>

			<section
				ref={section2Ref}
				className="min-h-fit flex flex-col items-center justify-center max-w-[80vw] mx-auto mt-[14vh] relative z-2"
			>
				<div className="flex gap-[5vw] w-[70vw] items-start justify-between">
					<div className="text-left flex flex-col items-start justify-center">
						<h2 className="text-[8vh] abeda">Create a Font</h2>
						<p className="sketches-by-duerer text-[7.5vh] w-fit mt-[-1vh]">
							learning
						</p>
						<div className="p-[0.4vh] border mt-[3vh] min-w-fit min-h-fit relative cursor-pointer rounded-[0.2vh]">
							<p className="mx-pixel text-[5vh] px-[2vw] py-[0.5vh] relative rounded-[0.2vh] w-fit bg-black text-white">
								guide
							</p>
						</div>
					</div>
					<div className="relative">
						<motion.img
							src="/imgs/fonts.png"
							className="w-[27.5vw] rounded-[0.3vh] drop-shadow-md drop-shadow-neutral-800/30 border border-black absolute bottom-[-17.5vh] left-[-17.5vw] z-2"
							alt=""
							animate={{
								y: [0, -8, 0],
								rotate: [0, 1, 0],
							}}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut",
								delay: 1,
							}}
						/>
						<motion.img
							src="/imgs/template.png"
							className="w-[27.5vw] rounded-[0.3vh] drop-shadow-md drop-shadow-neutral-800/30 border border-black mt-[-5vh] z-1"
							alt=""
							animate={{
								y: [0, 9, 0],
								rotate: [0, -1.5, 0],
							}}
							transition={{
								duration: 5.5,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>
					</div>
				</div>
				<h2 className="text-[6vh] constru-caps mt-[27.5vh]">
					Make a Website to show it off
				</h2>
				<div className="flex-5 relative flex mt-[10vh]">
					<motion.img
						src="/imgs/example1.png"
						className="w-[27.5vw] h-[27.5vh] object-cover rounded-[0.3vh] drop-shadow-md drop-shadow-neutral-800/30  border border-black z-5"
						alt=""
						animate={{
							y: [0, -8, 0],
							rotate: [0, 1, 0],
						}}
						transition={{
							duration: 3,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>

					<motion.img
						src="/imgs/example2.png"
						className="w-[27.5vw] h-[27.5vh] object-cover rounded-[0.3vh] drop-shadow-md drop-shadow-neutral-800/30  border border-black ml-[-12vw] mt-[23vh] z-4"
						alt=""
						animate={{
							y: [0, 6, 0],
							rotate: [0, -1.5, 0],
						}}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut",
							delay: 0.5,
						}}
					/>

					<motion.img
						src="/imgs/example3.png"
						className="w-[27.5vw] h-[27.5vh] object-cover rounded-[0.3vh] drop-shadow-md drop-shadow-neutral-800/30  border border-black ml-[-11vw] z-3"
						alt=""
						animate={{
							y: [0, -10, 0],
							rotate: [0, 1.2, 0],
						}}
						transition={{
							duration: 3.5,
							repeat: Infinity,
							ease: "easeInOut",
							delay: 1,
						}}
					/>

					<motion.img
						src="/imgs/example4.png"
						className="w-[27.5vw] h-[27.5vh] object-cover rounded-[0.3vh] drop-shadow-md drop-shadow-neutral-800/30  border border-black ml-[-14vw] mt-[23vh] z-2"
						alt=""
						animate={{
							y: [0, 8, 0],
							rotate: [0, -1.2, 0],
						}}
						transition={{
							duration: 4.5,
							repeat: Infinity,
							ease: "easeInOut",
							delay: 0.3,
						}}
					/>

					<motion.img
						src="/imgs/example5.png"
						className="w-[27.5vw] h-[27.5vh] object-cover rounded-[0.3vh] drop-shadow-md drop-shadow-neutral-800/30  border border-black ml-[-11vw] z-1"
						alt=""
						animate={{
							y: [0, -7, 0],
							rotate: [0, 1, 0],
						}}
						transition={{
							duration: 3.8,
							repeat: Infinity,
							ease: "easeInOut",
							delay: 0.8,
						}}
					/>
				</div>
			</section>

			<section
				ref={section3Ref}
				className="min-h-screen flex items-center justify-center relative z-2"
			>
				<p className="text-[6vh] constru-caps">FAQ</p>
			</section>
		</div>
	);
}

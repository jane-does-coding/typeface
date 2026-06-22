"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Letter from "./components/Letter";
import Floating from "./components/FloatingImage";
import FAQDragSection from "./components/FAQsection";

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
				className="w-full h-screen fixed top-0 left-0 z-0 opacity-4 pointer-events-none"
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
				className="absolute left-[1vw] top-0 w-[12vw] z-10"
				alt=""
			/>
			<nav
				onClick={() => setExpanded((prev) => !prev)}
				className={`fixed top-0 right-0 w-[16vw] border-b-[0.2vh] border-l-[0.2vh] border-black rounded-bl-[0.3vh] overflow-hidden z-50 cursor-pointer transition-all duration-500 ease-in-out bg-white ${
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
						Drag the Letters
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

				<Letter letter="H" left="7vw" bottom="27vh" rotation={-8} />
				<Letter letter="A" left="12vw" bottom="16vh" rotation={8} />
				<Letter letter="C" left="20vw" bottom="22vh" rotation={4} />
				<Letter letter="K" left="28vw" bottom="18vh" rotation={8} />

				<Letter letter="C" left="54vw" bottom="82vh" rotation={-8} />
				<Letter letter="L" left="62vw" bottom="76vh" rotation={8} />
				<Letter letter="U" left="69vw" bottom="78vh" rotation={2} />
				<Letter letter="B" left="78vw" bottom="80vh" rotation={8} />

				<h2 className="text-left ml-[12vw] kg-chasing text-[6vh] pt-[20vh]">
					Ptss
				</h2>
				<h1 className="sketches-by-duerer text-[17.5vh] mx-auto w-fit mt-[-3vh]">
					typeface
				</h1>
				<h2 className="text-left ml-[27vw] mx-pixel text-[8vh] mt-[-3vh]">
					Have you ever....
				</h2>
				<h2 className="text-left ml-[57vw] sketches text-[8vh] font-semibold flex mt-[-1vh]">
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
				<a
					href="/"
					className="p-[0.4vh] border-[0.2vh] min-w-fit h-fit transition-all w-fit min-h-fit relative left-[46vw] mt-[1vh] rounded-[0.2vh] cursor-pointer bg-white group hover:p-[0.2vh] flex items-center justify-center duration-100 hover:drop-shadow-md hover:drop-shadow-neutral-800/50"
				>
					<span className="city-of-boy text-[5vh] px-[2vw] py-[0.5vh] transition-all relative rounded-[0.2vh] w-fit bg-black group-hover:py-[0.7vh] group-hover:px-[2.15vw] text-white inline duration-100">
						Submit
					</span>
				</a>
			</section>

			<div className="flex w-screen mx-auto items-center justify-between gap-[0.75vh] mt-[-3vh] bg-white relative z-2">
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
				className="min-h-fit flex flex-col items-center justify-center max-w-[80vw] mx-auto mt-[14vh] relative z-5 pb-[10vh]"
			>
				<Letter letter="H" left="-3vw" bottom="113vh" rotation={-8} />
				<Letter letter="E" left="1vw" bottom="98vh" rotation={8} />
				<Letter letter="I" left="7vw" bottom="110vh" rotation={-5} />
				<Letter letter="D" left="10vw" bottom="96vh" rotation={5} />
				<Letter letter="I" left="18vw" bottom="89vh" rotation={-9} />

				<Letter letter="H" left="70vw" bottom="89vh" rotation={-8} />
				<Letter letter="I" left="77vw" bottom="100vh" rotation={8} />

				<Letter letter="!" left="78vw" bottom="150vh" rotation={-8} />

				<div className="flex gap-[5vw] w-[70vw] items-start justify-between">
					<div className="text-left flex flex-col items-start justify-start min-w-fit w-full">
						<h2 className="text-[8vh] abeda">Create a Font</h2>
						<p className="sketches-by-duerer text-[7.5vh] w-fit mt-[-1vh]">
							learning
						</p>
						<a
							href="/guide"
							className="p-[0.4vh] border mt-[3vh] min-w-fit min-h-fit relative cursor-pointer rounded-[0.2vh] bg-white group hover:p-[0.2vh] flex items-center justify-center duration-100 hover:drop-shadow-md hover:drop-shadow-neutral-800/50 transition-all"
						>
							<span className="mx-pixel text-[5vh] px-[2vw] py-[0.5vh] transition-all relative rounded-[0.2vh] w-fit bg-black group-hover:py-[0.7vh] group-hover:px-[2.15vw] text-white inline duration-100">
								guide
							</span>
						</a>
						{/* <div className="p-[0.4vh] border mt-[3vh] min-w-fit min-h-fit relative cursor-pointer rounded-[0.2vh] bg-white">
							<p className="mx-pixel text-[5vh] px-[2vw] py-[0.5vh] relative rounded-[0.2vh] w-fit bg-black text-white">
								guide
							</p>
						</div> */}
					</div>
					<div className="relative min-h-[60vh] w-full">
						<Floating left="0" bottom="-3vh" rotation={1}>
							<img
								src="/imgs/template.png"
								draggable={false}
								className="pointer-events-none w-[28vw] min-w-[28vw] rounded-[0.3vh] border border-black"
								alt=""
							/>
						</Floating>
						<Floating left="-17vw" bottom="-8vh" rotation={5}>
							<img
								src="/imgs/fonts.png"
								draggable={false}
								className="pointer-events-none w-[22vw] min-w-[22vw] rounded-[0.3vh] border border-black"
								alt=""
							/>
						</Floating>
					</div>
				</div>
				<h2 className="text-[6vh] constru-caps mt-[28vh]">
					Make a Website to show it off
				</h2>
				<div className="flex-5 relative flex w-[90vw] items-center justify-center min-h-[60vh] top-[2vh]">
					<Floating left="0vw" bottom="23vh" rotation={1}>
						<img
							src="/imgs/example1.png"
							draggable={false}
							className="w-[27.5vw] min-w-[27.5vw] h-[27.5vh] object-cover rounded-[0.3vh] border border-black drop-shadow-md drop-shadow-neutral-800/30"
							alt=""
						/>
					</Floating>

					<Floating left="15.5vw" bottom="0vh" rotation={-1.5}>
						<img
							src="/imgs/example2.png"
							draggable={false}
							className="w-[27.5vw] min-w-[27.5vw] h-[27.5vh] object-cover rounded-[0.3vh] border border-black drop-shadow-md drop-shadow-neutral-800/30"
							alt=""
						/>
					</Floating>

					<Floating left="32vw" bottom="23vh" rotation={1.2}>
						<img
							src="/imgs/example3.png"
							draggable={false}
							className="w-[27.5vw] min-w-[27.5vw] h-[27.5vh] object-cover rounded-[0.3vh] border border-black drop-shadow-md drop-shadow-neutral-800/30"
							alt=""
						/>
					</Floating>

					<Floating left="46vw" bottom="0vh" rotation={-1.2}>
						<img
							src="/imgs/example4.png"
							draggable={false}
							className="w-[27.5vw] min-w-[27.5vw] h-[27.5vh] object-cover rounded-[0.3vh] border border-black drop-shadow-md drop-shadow-neutral-800/30"
							alt=""
						/>
					</Floating>

					<Floating left="62vw" bottom="23vh" rotation={1}>
						<img
							src="/imgs/example5.png"
							draggable={false}
							className="w-[27.5vw] min-w-[27.5vw] h-[27.5vh] object-cover rounded-[0.3vh] border border-black drop-shadow-md drop-shadow-neutral-800/30"
							alt=""
						/>
					</Floating>
				</div>
			</section>
			<section
				ref={section3Ref}
				className="min-h-[92vh] flex items-center justify-center relative z-2 pt-[5vh]"
			>
				<FAQDragSection />
			</section>
			<footer className="flex items-center justify-between pb-[3vh] pt-[3vh] bg-white top-[-2vh] px-[5vw] relative">
				<p className="mx-pixel font-semibold text-[3.75vh]">
					Made with {" <3 "} by Hack Club
				</p>
				<div className="flex gap-[2.5vw]">
					<a href="/guide" className=" font-semibold kg-chasing text-[2.5vh]">
						Guide
					</a>
					<a href="/" className=" font-semibold kg-chasing text-[2.5vh]">
						Slack
					</a>
					<a href="/" className=" font-semibold kg-chasing text-[2.5vh]">
						Submit
					</a>
				</div>
				<div className="w-full h-[0.2vh] z-5 bg-black absolute left-0 bottom-[0vh]"></div>
				<div className="w-full h-[0.2vh] z-5 bg-black absolute left-0 bottom-[0.75vh]"></div>
			</footer>
		</div>
	);
}

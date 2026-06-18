"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
	const [activeSection, setActiveSection] = useState(0);
	const [expanded, setExpanded] = useState(false);

	const section1Ref = useRef<HTMLElement>(null);
	const section2Ref = useRef<HTMLElement>(null);
	const section3Ref = useRef<HTMLElement>(null);

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

	return (
		<div className="min-h-screen w-full">
			<img
				src="/imgs/hackclub.svg"
				className="absolute left-[1vw] top-[0vh] w-[12vw] z-5"
				alt=""
			/>
			<nav
				onClick={() => setExpanded((prev) => !prev)}
				className={`fixed top-0 right-0 w-[13vw] border-b border-l border-black rounded-bl-[0.3vh] overflow-hidden z-50 cursor-pointer transition-all duration-500 ease-in-out bg-white ${
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
					<p className="h-[8vh] flex items-center justify-center text-[2.7vh] kg-chasing cursor-pointer border-b border-black">
						What is it?
					</p>

					<p className="h-[8vh] flex items-center justify-center text-[2.7vh] kg-chasing cursor-pointer border-b border-black">
						How is it?
					</p>

					<p className="h-[8vh] flex items-center justify-center text-[2.7vh] kg-chasing cursor-pointer border-b border-black">
						FAQ
					</p>
				</div>
			</nav>

			{/* Horizontal Lines */}
			<div className="w-full h-[0.1vh] bg-black absolute top-[3vh]"></div>
			<div className="w-full h-[0.1vh] bg-black absolute top-[3.75vh]"></div>
			<div className="w-full h-[0.1vh] bg-black absolute bottom-[3vh]"></div>
			<div className="w-full h-[0.1vh] bg-black absolute bottom-[3.75vh]"></div>

			{/* Vertical Lines */}

			<div className="h-screen fixed top-0 left-[1.75vw] w-[0.1vh] bg-black"></div>
			<div className="h-screen fixed top-0 left-[2.25vw] w-[0.1vh] bg-black"></div>

			<div className="h-screen fixed top-0 right-[1.75vw] w-[0.1vh] bg-black"></div>
			<div className="h-screen fixed top-0 right-[2.25vw] w-[0.1vh] bg-black"></div>

			<section ref={section1Ref} className="min-h-screen">
				<h2 className="text-left ml-[12vw] kg-chasing text-[6vh] pt-[18vh]">
					Ptss
				</h2>
				<h1 className="sketches-by-duerer text-[15vh] mx-auto w-fit mt-[-2vh]">
					typography
				</h1>
				<h2 className="text-left ml-[27vw] mx-pixel text-[8vh] mt-[-2vh]">
					Have you ever....
				</h2>
				<h2 className="text-left ml-[57vw] sketches text-[8vh] font-semibold">
					Made a font?
				</h2>
				{/* <h2 className="text-left ml-[46vw] city-of-boy text-[8vh] font-semibold mt-[-2vh]">
					Submit
				</h2> */}
				<div className="p-[0.4vh] border min-w-fit w-fit min-h-fit relative ml-[46vw] mt-[1vh] rounded-[0.2vh] cursor-pointer">
					<p className="city-of-boy w-fit text-[5vh] px-[2vw] py-[0.5vh] relative rounded-[0.2vh] w-fit bg-black text-white">
						Submit
					</p>
				</div>
			</section>

			<div className="flex w-[80vw] mx-auto items-center justify-between">
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Necessitatibus, harum.
				</p>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Necessitatibus, harum.
				</p>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Necessitatibus, harum.
				</p>
			</div>
			<div className="w-full h-[0.1vh] bg-black mt-[5vh]"></div>
			<div className="w-full h-[0.1vh] bg-black mt-[0.75vh]"></div>

			<section
				ref={section2Ref}
				className="min-h-fit flex flex-col items-center justify-center max-w-[80vw] mx-auto mt-[12vh]"
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
						<img
							src="/imgs/fonts.png"
							className="w-[27.5vw] rounded-[0.3vh] border border-black absolute bottom-[-17.5vh] left-[-17.5vw]"
							alt=""
						/>
						<img
							src="/imgs/template.png"
							className="w-[27.5vw] rounded-[0.3vh] border border-black mt-[-5vh]"
							alt=""
						/>
					</div>
				</div>
				<h2 className="text-[6vh] constru-caps mt-[27.5vh]">
					Make a Website to show it off
				</h2>
				<div className="flex-5 relative flex mt-[10vh]">
					<img
						src="/imgs/example1.png"
						className="w-[27.5vw] h-[27.5vh] object-cover rounded-[0.3vh] border border-black z-5"
						alt=""
					/>
					<img
						src="/imgs/example2.png"
						className="w-[27.5vw] h-[27.5vh] object-cover rounded-[0.3vh] border border-black ml-[-12vw] mt-[23vh] z-4"
						alt=""
					/>
					<img
						src="/imgs/example3.png"
						className="w-[27.5vw] h-[27.5vh] object-cover rounded-[0.3vh] border border-black ml-[-11vw] z-3"
						alt=""
					/>
					<img
						src="/imgs/example4.png"
						className="w-[27.5vw] h-[27.5vh] object-cover rounded-[0.3vh] border border-black ml-[-14vw] mt-[23vh] z-2"
						alt=""
					/>
					<img
						src="/imgs/example5.png"
						className="w-[27.5vw] h-[27.5vh] object-cover rounded-[0.3vh] border border-black ml-[-11vw] z-1"
						alt=""
					/>
				</div>
			</section>

			<section
				ref={section3Ref}
				className="min-h-screen flex items-center justify-center"
			>
				<p className="text-[6vh] constru-caps">FAQ</p>
			</section>
		</div>
	);
}

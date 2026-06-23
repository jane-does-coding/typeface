"use client";
import Letter from "@/app/components/Letter";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

export default function GuidePage() {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const [activeStep, setActiveStep] = useState(0);
	const [expanded, setExpanded] = useState(false);

	const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		const handleScroll = () => {
			const scrollMiddle = window.scrollY + window.innerHeight / 2;

			let current = 0;

			stepRefs.current.forEach((section, index) => {
				if (!section) return;

				if (scrollMiddle >= section.offsetTop) {
					current = index;
				}
			});

			setActiveStep(current);
		};

		handleScroll();

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const steps = [
		{
			title: "Go to Caligraphr",
			text: (
				<div>
					Go to{" "}
					<a href="/" className="text-blue-700 underline italic">
						Calighraphr
					</a>{" "}
					and select "Create a Template" and then on the left handside select
					"Minimal English"
				</div>
			),
			image: "/imgs/step1.png",
		},
		{
			title: "Download the Template",
			text: (
				<div>
					Click "Download the Template" and select prefered file format, and
					then check the boxes for "Draw Helplines" and "Characters as
					Background"
				</div>
			),
			image: "/imgs/step2.png",
		},
		{
			title: "The Template",
			text: (
				<div>
					This is something the template should look like after you download it.
					You can print it out and draw on it, or preferred way is to do it
					digitally.
				</div>
			),
			image: "/imgs/step3.png",
		},
		{
			title: "Draw Your Font",
			text: "Something to keep in mind is to make susre all your letters are the same thickness and same size",
			image: "/imgs/step4.png",
		},
		{
			title: "Upload the Font",
			text: (
				<div>
					Go back to Caligraphr and click on "My Fonts" and then click "Upload
					Template" and select the file you just drew on.
				</div>
			),
			image: "/imgs/step5.png",
		},
		{
			title: "Build Font",
			text: (
				<div>
					After uploading your font, then you'd see your letters, you can edit
					them if needed - then click "Build Font"
				</div>
			),
			image: "/imgs/step6.png",
		},
		{
			title: "Export Font",
			text: (
				<div>
					Click on the "my-font.ttf" and "my-font.otf" which will download your
					fonts.
				</div>
			),
			image: "/imgs/step7.png",
		},
		{
			title: "Implimenting Font",
			text: (
				<div>
					Here is how to impliment the font, add this CSS code to the global.css
					file or just any css file that's linked to your code.{" "}
					<b> MAKE SURE TO HAVE CORRECT FILE PATH</b>
				</div>
			),
			image: "/imgs/step8.png",
		},
		{
			title: "Implimenting Font",
			text: (
				<div>
					Add the class of your font to the element/text that you want it to be
					that way
				</div>
			),
			image: "/imgs/step9.png",
		},
		{
			title: "Lock In",
			text: (
				<div>
					Lock in on creating a website for your font! Make it look good! It can
					be simple or complex, but make sure it represents your font!
				</div>
			),
			image: "/imgs/example3.png",
		},
	];

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

	return (
		<div className="min-h-screen bg-white">
			<nav
				onClick={() => setExpanded((prev) => !prev)}
				className={`fixed top-0 right-0 w-[16vw] border-b-[0.2vh] border-l-[0.2vh] border-black rounded-bl-[0.3vh] overflow-hidden z-999 cursor-pointer transition-all duration-500 ease-in-out bg-white ${
					expanded ? "h-[64vh]" : "h-[8vh]"
				}`}
			>
				<div
					className="absolute top-0 left-0 w-full transition-transform duration-500 ease-in-out"
					style={{
						transform: expanded
							? "translateY(0)"
							: `translateY(-${activeStep * 8}vh)`,
					}}
				>
					{steps.map((_, index) => (
						<p
							key={index}
							className="h-[8vh] flex items-center justify-center text-[2.7vh] kg-chasing border-b-[0.2vh] border-black"
						>
							Step {index + 1}
						</p>
					))}
				</div>
			</nav>
			{/* Texture */}
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

			{/* Borders */}
			<div className="w-full h-[0.2vh] bg-black absolute top-[3vh] z-20"></div>
			<div className="w-full h-[0.2vh] bg-black absolute top-[3.75vh] z-20"></div>

			<div className="h-screen fixed left-[1.75vw] top-0 w-[0.2vh] bg-black z-20"></div>
			<div className="h-screen fixed left-[2.25vw] top-0 w-[0.2vh] bg-black z-20"></div>

			<div className="h-screen fixed right-[1.75vw] top-0 w-[0.2vh] bg-black z-20"></div>
			<div className="h-screen fixed right-[2.25vw] top-0 w-[0.2vh] bg-black z-20"></div>

			<img
				src="/imgs/hackclub.svg"
				className="absolute left-[1vw] top-0 w-[12vw] z-30"
				alt=""
			/>

			{/* Floating Letters */}
			<div className="absolute inset-0 z-15">
				<Letter letter="A" left="8vw" bottom="75vh" rotation={-8} />
				<Letter letter="B" left="84vw" bottom="75vh" rotation={6} />
				<Letter letter="G" left="10vw" bottom="35vh" rotation={-4} />
				<Letter letter="R" left="88vw" bottom="35vh" rotation={8} />
			</div>

			{/* Hero */}
			<section className="min-h-[70vh] bg-blue-200/0 flex flex-col items-center justify-center relative z-10">
				<p className="kg-chasing text-[5vh]">
					A beginner's guide to creating a
				</p>

				<h1 className="sketches-by-duerer text-[18vh] mt-[-2vh]">typeface</h1>

				<p className="mx-pixel text-[6vh] mt-[-2vh]">
					Turn scribbles into a real font.
				</p>

				<motion.div
					animate={{
						y: [0, 10, 0],
					}}
					transition={{
						duration: 2,
						repeat: Infinity,
					}}
					className="absolute bottom-[5vh]"
				>
					<p className="kg-chasing text-[3vh]">scroll ↓</p>
				</motion.div>

				<div className="w-full h-[0.2vh] bg-black absolute bottom-0"></div>
				<div className="w-full h-[0.2vh] bg-black absolute bottom-[0.75vh]"></div>
			</section>

			<section className="relative z-10">
				{steps.map((step, i) => (
					<div
						key={i}
						ref={(el) => {
							stepRefs.current[i - 1] = el;
						}}
						className="grid grid-cols-2 gap-[6vw] px-[8vw] min-h-[130vh]"
					>
						{/* TEXT */}
						<div className="flex items-center">
							<div className="max-w-[35vw]">
								<p className="kg-chasing font-semibold text-[2vh]">
									STEP {(i + 1).toString().padStart(2, "0")}
								</p>

								<h2 className="romangridcaps text-[7vh] leading-[8vh] mt-[1vh]">
									{step.title}
								</h2>

								<div className="kg-chasing font-medium text-[3vh] mt-[2vh] leading-normal">
									{step.text}
								</div>
							</div>
						</div>

						{/* IMAGE */}
						<div className="relative pt-[5vh]">
							<div className="sticky top-[15vh]">
								<img
									src={step.image}
									alt=""
									className="w-full h-[70vh] object-cover border border-black rounded-[0.3vh]"
								/>
							</div>
						</div>
					</div>
				))}
			</section>

			{/* CTA */}
			<section className="relative z-10 py-[5vh] flex flex-col items-center pt-[10vh]">
				<div className="w-full h-[0.2vh] bg-black"></div>
				<div className="w-full h-[0.2vh] bg-black mt-[0.75vh]"></div>

				<h2 className="sketches text-[8vh] mt-[5vh]">Ready?</h2>

				<a
					href="https://forms.hackclub.com/t/oH3aNgm2pSus"
					className="p-[0.4vh] border-[0.2vh] rounded-[0.2vh] bg-white group hover:p-[0.2vh] transition-all mt-[1vh]"
				>
					<span className="city-of-boy text-[5vh] px-[2vw] py-[0.5vh] bg-black text-white rounded-[0.2vh] inline-block group-hover:px-[2.15vw] group-hover:py-[0.7vh] transition-all">
						Submit Your Font
					</span>
				</a>
			</section>

			<footer className="relative z-10 pb-[3vh] pt-[3vh]">
				<div className="w-full h-[0.2vh] bg-black"></div>
				<div className="w-full h-[0.2vh] bg-black mt-[0.75vh]"></div>
			</footer>
		</div>
	);
}

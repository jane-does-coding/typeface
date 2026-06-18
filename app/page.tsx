import Image from "next/image";

export default function Home() {
	return (
		<div className="min-h-screen w-full">
			<nav className="top-0 right-0 fixed w-[10vw] h-[5vh] border-b border-l border-black"></nav>
			<h2 className="text-left ml-[15vw] kg-chasing text-[6vh] mt-[18vh]">
				Ptss
			</h2>
			<h1 className="sketches-by-duerer text-[15vh] mx-auto w-fit mt-[-1vh]">
				typography
			</h1>
			<h2 className="text-left ml-[30vw] mx-pixel text-[8vh] mt-[-1vh]">
				Have you ever....
			</h2>
			<h2 className="text-left ml-[60vw] sketches text-[8vh] font-[600]">
				Made a font?
			</h2>
		</div>
	);
}

import { TypeAnimation } from "react-type-animation";

export default function TypeContent() {
	return (
		<div className="flex">
			<div className="w-1/2 px-3">
				<h1 className="text-4xl mb-10 text-white">
					Hello there <span className="wave">👋</span>, <br />
					My name is
					<span className="text-[#47aba9]"> Ugyen Samdrup Dorji</span>
					<br />
				</h1>
				<div className="text-white">
					I am a Front end developer and I'm currently working at
					<a
						href="https://bhutan.selise.ch/home"
						style={{ textDecoration: "none" }}
						target="_blank"
						rel="noreferrer">
						<span className="text-[#47aba9]"> Selise Digital Platforms </span>
					</a>
					in Bhutan. Here are some of the
					<a
						href="https://github.com/Ugyen-Lefty"
						style={{ textDecoration: "none" }}
						target="_blank"
						rel="noreferrer">
						<span style={{ color: "#47aba9" }}> projects </span>
					</a>
					that I've done or jump straight to my
					<a
						href="https://github.com/Ugyen-Lefty"
						className="no-underline"
						target="_blank"
						rel="noreferrer">
						<span style={{ color: "#47aba9" }}> Github.</span>
					</a>
					<br />
					<br />
					In addition to my technical skills, I am a creative problem-solver and
					an effective communicator. I am always eager to take on new challenges
					and push the boundaries of what is possible on the web. My ultimate
					goal is to deliver amazing user experiences that are both beautiful
					and functional.
				</div>
				<TypeAnimation
					sequence={[
						"In my free time, I enjoy playing basketball 🏀",
						2000,
						"In my free time, I enjoy playing video games 🎮",
						2000,
						"In my free time, I enjoy learning new things",
						2000,
						"In my free time, I enjoy exploring new concepts",
						2000,
						"In my free time, I enjoy working out 💪",
						2000,
					]}
					wrapper="div"
					cursor={true}
					repeat={Infinity}
					className="text-white mt-10"
				/>
			</div>
			<div className="w-1/2 px-3">
				<img
					className="h-full"
					src="https://rare-gallery.com/thumbs/1183382-illustration-monochrome-anime-text-logo-Death-Note-brand-Lawliet-L-computer-wallpaper-black-and-white-monochrome-photography-font.jpg"
				/>
			</div>
		</div>
	);
}

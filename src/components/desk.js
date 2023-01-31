import Grid from "@mui/material/Grid";
import Navbar from "./navbar";
import Card from "./card";
import AvatarCard from "./avatar";
import Projects from "./projects";
import Skills from "./skills";

export default function Desk() {
	const urls = [
		{
			src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png",
			alt: "Angular",
		},
		{
			src: "https://diegomariano.com/wp-content/uploads/2021/06/react-logo.png",
			alt: "React",
		},
		{
			src: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_502,h_518/https://keytotech.com/wp-content/uploads/2019/05/firebase.png",
			alt: "Firebase",
		},
		{
			src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png?20170517184425",
			alt: "HTML",
		},
		{
			src: "https://www.seekpng.com/png/full/222-2229373_open-css-3.png",
			alt: "CSS",
		},
		{
			src: "https://seeklogo.com/images/G/git-logo-CD8D6F1C09-seeklogo.com.png",
			alt: "Git",
		},
		{
			src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
			alt: "Javascript",
		},
		{
			src: "https://upload.wikimedia.org/wikipedia/ru/a/a3/Unity_Logo.png",
			alt: "Unity",
		},
		{
			src: "https://btihen.me/post_ruby_rails/rails_6_1_tailwind_2_0_alpinejs/featured.png",
			alt: "Tailwind",
		},
	];

	return (
		<div className="bg">
			<Navbar />
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justifyContent="start">
				<Grid item xs={3}>
					<img
						style={{ height: "450px", marginTop: "10%" }}
						src="/assets/desk.gif"
						alt="desk"
					/>
				</Grid>
			</Grid>
			<div className="flex justify-center mb-[30px]">
				<Card>
					<AvatarCard />
				</Card>
			</div>
			<div className="mx-[150px] mb-32">
				<Skills skills={urls} />
			</div>
			<div className="mx-[200px]">
				<Projects />
			</div>
		</div>
	);
}

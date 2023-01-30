export default function Skills(props) {
	return (
		<div>
			<h1 className="flex text-[#fee528] font-press-start justify-center mb-10">
				Things I'm good at
			</h1>
			<div className="flex justify-center space-x-10 pb-20">
				<div className="w-1/2">
					<img className="w-cover-full h-4/5" src="/assets/goku.gif" alt="" />
				</div>
				<div className="w-1/2 grid grid-cols-3 gap-16">
					{props.skills.map((res) => (
						<img
							className="h-32 w-28"
							src={res.src}
							key={res.alt}
							alt={res.alt}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

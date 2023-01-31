export default function Skills(props) {
	return (
		<div>
			<h1 className="flex text-[#e6ff48] font-press-start justify-center mb-10 title-text uppercase">
				Things I'm good at
			</h1>
			<div className="flex justify-center space-x-20 pb-20">
				<div className="w-1/2">
					<img className="w-cover-full h-full" src="/assets/goku.gif" alt="" />
				</div>
				<div className="w-1/2 grid grid-cols-3 gap-10">
					{props.skills.map((res) => (
						<img
							className="w-24 h-24 object-contain"
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

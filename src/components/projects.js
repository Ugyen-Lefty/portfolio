export default function Projects() {
	return (
		<div>
			<h1 className="flex text-[#fee528] font-press-start justify-center pb-10">
				Some projects ive done
			</h1>
			<div className="flex justify-center space-x-10 pb-20">
				<div className="w-1/2">
					<h1>Hello world</h1>
				</div>
				<div className="w-1/2 relative border border-gray-200">
					<div className="absolute top-0 left-[50%] w-[200px] h-[200px]">
						<img className="w-full h-full"
							src="https://uploads-ssl.webflow.com/61cc64369059e84ab8201bee/61dd9dfc505f273e8762836b_g2-min-p-500.webp"
							alt=""
						/>
					</div>
					<div className="absolute top-[100px] left-[10%] z-10 w-[300px] h-[200px]">
						<img className="w-full h-full"
							src="https://uploads-ssl.webflow.com/61cc64369059e84ab8201bee/61dd9dfc4fc6e564c52b927d_g1-min-p-800.webp"
							alt=""
						/>
					</div>
					<div className="absolute top-[300px] left-[calc(50%-150px)] z-20 w-[300px] h-[300px]">
						<img className="w-full h-full"
							src="https://uploads-ssl.webflow.com/61cc64369059e84ab8201bee/61dd9df575a77e23ac720668_g3.webp"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
